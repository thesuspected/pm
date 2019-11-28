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
	rows, err := db.Query(`SELECT * FROM projects`)
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
