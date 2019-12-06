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
				GROUP BY p.c_id, g.c_name`)
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

func (m *ProjectMapper) Insert(db *sql.DB, project resources.Project) (projects []*resources.Project, err error) {
	c := resources.Project{}
	err = db.QueryRow(
		`INSERT INTO t_projects (c_id, c_name, c_date, fk_group)
				SELECT nextval('t_projects_id_seq'), $1, NOW(), g.c_id
				FROM t_groups AS g
				WHERE $2 = g.c_name
				RETURNING c_id, c_name, c_date, $2`,
				project.Name, project.Group).Scan(&c.Id, &c.Name, &c.Date, &c.Group)
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
				SET (c_name, fk_group) =
					(SELECT $2, c_id 
					 FROM t_groups
					 WHERE $3 = c_name)
				WHERE $1 = c_id
				RETURNING c_id, c_name, c_date, $3`,
				project.Id, project.Name, project.Group).Scan(&c.Id, &c.Name, &c.Date, &c.Group)
	if err != nil {
		return projects, err
	}

	projects = append(projects, &c)

	return projects, err
}
