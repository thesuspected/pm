package mappers

import (
	"database/sql"
	_ "github.com/lib/pq"
	. "log"
	"pm/app/models/resources"
)

type GroupMapper struct {
	db *sql.DB
}

func (m *GroupMapper) SelectAll(db *sql.DB) (groups []*resources.Group, err error) {
	rows, err := db.Query(
		`SELECT g.c_id, g.c_name, g.c_date, e.c_last_name
				FROM t_groups AS g, t_employees AS e
				WHERE g.fk_lead = e.c_id
				ORDER BY g.c_id`)
	if err != nil {
		return groups, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Group{}
		err := rows.Scan(&c.Id, &c.Name, &c.Date, &c.Lead)
		if err != nil {
			return groups, err
		}

		groups = append(groups, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return groups, err
}

func (m *GroupMapper) Insert(db *sql.DB, group resources.Group) (groups []*resources.Group, err error) {
	c := resources.Group{}
	err = db.QueryRow(
		`INSERT INTO t_groups (c_id, c_name, c_date, fk_lead)
				SELECT nextval('t_groups_id_seq'), $1, NOW(), e.c_id
				FROM t_employees AS e
				WHERE $2 = e.c_id
				RETURNING c_id, c_name, c_date, $2`,
		group.Name, group.Lead).Scan(&c.Id, &c.Name, &c.Date, &c.Lead)
	if err != nil {
		return groups, err
	}

	groups = append(groups, &c)

	return groups, err
}

func (m *GroupMapper) Delete(db *sql.DB, id int) (int, error) {
	_, err := db.Exec(
		`DELETE FROM t_groups WHERE c_id = $1`, id)

	return id, err
}

func (m *GroupMapper) Update(db *sql.DB, group resources.Group) (groups []*resources.Group, err error) {
	c := resources.Group{}
	err = db.QueryRow(
		`UPDATE t_groups
				SET (c_name, fk_lead) =
					(SELECT $2, c_id 
					 FROM t_employees
					 WHERE $3 = c_id)
				WHERE $1 = c_id
				RETURNING c_id, c_name, c_date, fk_lead`,
		group.Id, group.Name, group.Lead).Scan(&c.Id, &c.Name, &c.Date, &c.Lead)
	if err != nil {
		return groups, err
	}

	groups = append(groups, &c)

	return groups, err
}