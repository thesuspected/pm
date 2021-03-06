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

func (m *GroupMapper) Select(id int, db *sql.DB) (groups []*resources.Group, err error) {
	c := resources.Group{}
	err = db.QueryRow(
		`SELECT g.c_id, g.c_name, g.c_date, e.c_last_name
				FROM t_groups g, t_employees e
				WHERE g.fk_lead = e.c_id
				GROUP BY g.c_id, e.c_last_name
				HAVING g.c_id = $1`, id).Scan(&c.Id, &c.Name, &c.Date, &c.Lead)
	if err != nil {
		return groups, err
	}

	groups = append(groups, &c)

	return groups, err
}

func (m *GroupMapper) SelectFk(id int, db *sql.DB) (groups []*resources.Group, err error) {
	c := resources.Group{}
	err = db.QueryRow(
		`SELECT c_id, c_name, c_date, fk_lead
				FROM t_groups
				WHERE c_id = $1`, id).Scan(&c.Id, &c.Name, &c.Date, &c.Lead)
	if err != nil {
		return groups, err
	}

	groups = append(groups, &c)

	return groups, err
}

func (m *GroupMapper) Insert(db *sql.DB, group resources.Group) (groups []*resources.Group, err error) {
	c := resources.Group{}
	err = db.QueryRow(
		`INSERT INTO t_groups (c_id, c_name, c_date, fk_lead)
				SELECT nextval('t_groups_id_seq'), $1, NOW(), $2
				RETURNING c_id`,
		group.Name, group.Lead).Scan(&c.Id)
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
				SET (c_name, fk_lead) = ($2, $3)
				WHERE c_id = $1
				RETURNING c_id`,
		group.Id, group.Name, group.Lead).Scan(&c.Id)
	if err != nil {
		return groups, err
	}

	groups = append(groups, &c)

	return groups, err
}