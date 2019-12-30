package mappers

import (
	"database/sql"
	_ "github.com/lib/pq"
	. "log"
	"pm/app/models/resources"
)

type TaskMapper struct {
	db *sql.DB
}

func (m *TaskMapper) SelectAll(db *sql.DB, id int) (tasks []*resources.Task, err error) {
	rows, err := db.Query(
		`SELECT *
				FROM t_tasks
				WHERE fk_project = $1
				ORDER BY c_id`, id)
	if err != nil {
		return tasks, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Task{}
		err := rows.Scan(&c.Id, &c.Name, &c.Description, &c.Date, &c.Priority, &c.Status, &c.Assign, &c.Project)
		if err != nil {
			return tasks, err
		}

		tasks = append(tasks, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return tasks, err
}