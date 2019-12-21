package mappers

import (
	"database/sql"
	_ "github.com/lib/pq"
	. "log"
	"pm/app/models/resources"
)

type ProjectMapper struct {
	db *sql.DB
}

func (m *ProjectMapper) SelectAll(db *sql.DB) (projects []*resources.Project, err error) {
	rows, err := db.Query(
		`SELECT p.c_id, p.c_name, p.c_date, g.c_name
				FROM t_projects AS p, t_groups AS g
				WHERE p.fk_group = g.c_id
				ORDER BY p.c_id`)
	if err != nil {
		return projects, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Project{}
		err := rows.Scan(&c.Id, &c.Name, &c.Date, &c.Group)
		if err != nil {
			return projects, err
		}

		projects = append(projects, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return projects, err
}

func (m *ProjectMapper) Select(id int, db *sql.DB) (projects []*resources.Project, err error) {
	c := resources.Project{}
	err = db.QueryRow(
		`SELECT p.c_id, p.c_name, p.c_date, g.c_name
				FROM t_projects p, t_groups g
				WHERE p.fk_group = g.c_id
				GROUP BY p.c_id, g.c_name
				HAVING p.c_id = $1`, id).Scan(&c.Id, &c.Name, &c.Date, &c.Group)
	if err != nil {
		return projects, err
	}

	projects = append(projects, &c)

	return projects, err
}

func (m *ProjectMapper) SelectFk(id int, db *sql.DB) (projects []*resources.Project, err error) {
	c := resources.Project{}
	err = db.QueryRow(
		`SELECT c_id, c_name, c_date, fk_group
				FROM t_projects
				WHERE c_id = $1`, id).Scan(&c.Id, &c.Name, &c.Date, &c.Group)
	if err != nil {
		return projects, err
	}

	projects = append(projects, &c)

	return projects, err
}

func (m *ProjectMapper) Insert(db *sql.DB, project resources.Project) (projects []*resources.Project, err error) {
	c := resources.Project{}
	err = db.QueryRow(
		`INSERT INTO t_projects (c_id, c_name, c_date, fk_group)
				SELECT nextval('t_projects_id_seq'), $1, NOW(), $2
				RETURNING c_id`,
				project.Name, project.Group).Scan(&c.Id)
	if err != nil {
		return projects, err
	}

	projects = append(projects, &c)

	return projects, err
}

func (m *ProjectMapper) Delete(db *sql.DB, id int) (int, error) {
	_, err := db.Exec(
		`DELETE FROM t_projects WHERE c_id = $1`, id)

	return id, err
}

func (m *ProjectMapper) Update(db *sql.DB, project resources.Project) (projects []*resources.Project, err error) {
	c := resources.Project{}
	err = db.QueryRow(
		`UPDATE t_projects 
				SET (c_name, fk_group) = ($2, $3)
				WHERE c_id = $1
				RETURNING *`,
				project.Id, project.Name, project.Group).Scan(&c.Id, &c.Name, &c.Date, &c.Group)
	if err != nil {
		return projects, err
	}

	projects = append(projects, &c)

	return projects, err
}
