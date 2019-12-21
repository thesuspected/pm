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

func (m *EmployeeMapper) Select(id int, db *sql.DB) (employees []*resources.Employee, err error) {
	c := resources.Employee{}
	err = db.QueryRow(
		`SELECT e.c_id, e.c_last_name, e.c_first_name, e.c_patronymic, e.c_date, e.c_email, e.c_img_src, u.c_login, p.c_name, g.c_name
				FROM t_employees AS e, t_users AS u, t_ref_positions AS p, t_groups AS g
				WHERE e.fk_user = u.c_id and e.fk_position = p.c_id and e.fk_group = g.c_id
				GROUP BY e.c_id, u.c_login, p.c_name, g.c_name
				HAVING e.c_id = $1`, id).Scan(&c.Id, &c.LastName, &c.FirstName, &c.Patronymic, &c.Date, &c.Email, &c.ImgSrc, &c.User, &c.Position, &c.Group)
	if err != nil {
		return employees, err
	}

	employees = append(employees, &c)

	return employees, err
}

func (m *EmployeeMapper) SelectFk(id int, db *sql.DB) (employees []*resources.Employee, err error) {
	c := resources.Employee{}
	err = db.QueryRow(
		`SELECT c_id, c_last_name, c_first_name, c_patronymic, c_date, c_email, c_img_src, fk_user, fk_position, fk_group
				FROM t_employees
				WHERE c_id = $1`, id).Scan(&c.Id, &c.LastName, &c.FirstName, &c.Patronymic, &c.Date, &c.Email, &c.ImgSrc, &c.User, &c.Position, &c.Group)
	if err != nil {
		return employees, err
	}

	employees = append(employees, &c)

	return employees, err
}

func (m *EmployeeMapper) SelectByGroup(id int, db *sql.DB) (employees []*resources.Employee, err error) {
	rows, err := db.Query(
		`SELECT e.c_id, e.c_last_name, e.c_first_name, e.c_patronymic, e.c_date, e.c_email, e.c_img_src, u.c_login, p.c_name, g.c_name
				FROM t_employees AS e, t_users AS u, t_ref_positions AS p, t_groups AS g
				WHERE e.fk_user = u.c_id and e.fk_position = p.c_id and e.fk_group = g.c_id
				GROUP BY e.c_id, u.c_login, p.c_name, g.c_name
				HAVING e.fk_group = $1`, id)
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

func (m *EmployeeMapper) SelectByGroupFk(id int, db *sql.DB) (employees []*resources.Employee, err error) {
	rows, err := db.Query(
		`SELECT c_id, c_last_name, c_first_name, c_patronymic, c_date, c_email, c_img_src, fk_user, fk_position, fk_group
				FROM t_employees
				WHERE fk_group = $1`, id)
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