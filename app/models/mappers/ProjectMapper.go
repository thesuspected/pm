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
	rows, err := db.Query(`SELECT * FROM t_projects`)
	if err != nil {
		return projects, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Project{}
		err := rows.Scan(&c.Id, &c.Name, &c.Date)
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
	err = db.QueryRow(`
		INSERT INTO t_projects (c_name, c_date) 
		VALUES ($1, NOW()) returning c_id, c_name, c_date
	`, project.Name).Scan(&c.Id, &c.Name, &c.Date)
	if err != nil {
		return projects, err
	}

	projects = append(projects, &c)

	return projects, err
}
