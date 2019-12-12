package mappers

import (
	"database/sql"
	_ "github.com/lib/pq"
	. "log"
	"pm/app/models/resources"
)

type EmployeeMapper struct {
	db *sql.DB
}

func (m *EmployeeMapper) SelectAll(db *sql.DB) (employees []*resources.Employee, err error) {
	rows, err := db.Query(
		`SELECT e.c_id, e.c_last_name, e.c_first_name, e.c_patronymic, e.c_date, e.c_email, e.c_img_src, u.c_login, p.c_name, g.c_name
				FROM t_employees AS e, t_users AS u, t_ref_positions AS p, t_groups AS g
				WHERE e.fk_user = u.c_id and e.fk_position = p.c_id and e.fk_group = g.c_id
				ORDER BY e.c_id`)
	if err != nil {
		return employees, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Employee{}
		err := rows.Scan(&c.Id, &c.LastName, &c.FirstName, &c.Patronymic, &c.Date, &c.Email, &c.ImgSrc, &c.User, &c.Position, &c.Group)
		if err != nil {
			return employees, err
		}

		employees = append(employees, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return employees, err
}