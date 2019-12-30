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

func (m *TaskMapper) Insert(db *sql.DB, task resources.Task) (tasks []*resources.Task, err error) {
	c := resources.Task{}
	err = db.QueryRow(
		`INSERT INTO t_tasks (c_id, c_name, c_description, c_date, fk_priority, fk_status, fk_assign_to, fk_project)
				SELECT nextval('t_tasks_id_seq'), $1, $2, NOW(), $3, $4, $5, $6
				RETURNING c_id`,
		task.Name, task.Description, task.Priority, task.Status, task.Assign, task.Project).Scan(&c.Id)
	if err != nil {
		return tasks, err
	}

	tasks = append(tasks, &c)

	return tasks, err
}

func (m *TaskMapper) Delete(db *sql.DB, id int) (int, error) {
	_, err := db.Exec(
		`DELETE FROM t_tasks WHERE c_id = $1`, id)

	return id, err
}

func (m *TaskMapper) Update(db *sql.DB, task resources.Task) (tasks []*resources.Task, err error) {
	c := resources.Task{}
	err = db.QueryRow(
		`UPDATE t_tasks 
				SET (c_name, c_description, fk_priority, fk_status, fk_assign_to, fk_project) = ($2, $3, $4, $5, $6, $7)
				WHERE c_id = $1
				RETURNING c_id`,
		task.Id, task.Name, task.Description, task.Priority, task.Status, task.Assign, task.Project).Scan(&c.Id)
	if err != nil {
		return tasks, err
	}

	tasks = append(tasks, &c)

	return tasks, err
}

func (m *TaskMapper) SelectTags(db *sql.DB, id int) (tags []*resources.Ref, err error) {
	rows, err := db.Query(`
		SELECT DISTINCT ON (fk_tag) c_id, fk_tag
		FROM toc_task_to_tags
		WHERE fk_task = $1
		ORDER BY fk_tag`, id)
	if err != nil {
		return tags, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Ref{}
		err := rows.Scan(&c.Id, &c.Value)
		if err != nil {
			return tags, err
		}

		tags = append(tags, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return tags, err
}
