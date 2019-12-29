package mappers

import (
	"database/sql"
	_ "github.com/lib/pq"
	. "log"
	"pm/app/models/resources"
)

type RefMapper struct {
	db *sql.DB
}

func (m *RefMapper) SelectPos(db *sql.DB) (values []*resources.Ref, err error) {
	rows, err := db.Query(
		`SELECT c_id, c_name
				FROM t_ref_positions
				ORDER BY c_id`)
	if err != nil {
		return values, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Ref{}
		err := rows.Scan(&c.Id, &c.Value)
		if err != nil {
			return values, err
		}

		values = append(values, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return values, err
}

func (m *RefMapper) SelectPriority(db *sql.DB) (values []*resources.Ref, err error) {
	rows, err := db.Query(
		`SELECT c_id, c_name, c_color
				FROM t_ref_priority
				ORDER BY c_id`)
	if err != nil {
		return values, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Ref{}
		err := rows.Scan(&c.Id, &c.Value, &c.Color)
		if err != nil {
			return values, err
		}

		values = append(values, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return values, err
}

func (m *RefMapper) SelectStatus(db *sql.DB) (values []*resources.Ref, err error) {
	rows, err := db.Query(
		`SELECT c_id, c_name
				FROM t_ref_status
				ORDER BY c_id`)
	if err != nil {
		return values, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Ref{}
		err := rows.Scan(&c.Id, &c.Value)
		if err != nil {
			return values, err
		}

		values = append(values, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return values, err
}

func (m *RefMapper) SelectTags(db *sql.DB) (values []*resources.Ref, err error) {
	rows, err := db.Query(
		`SELECT c_id, c_name
				FROM t_ref_tags
				ORDER BY c_id`)
	if err != nil {
		return values, err
	}
	defer rows.Close()
	for rows.Next() {
		c := resources.Ref{}
		err := rows.Scan(&c.Id, &c.Value)
		if err != nil {
			return values, err
		}

		values = append(values, &c)
	}

	if err = rows.Err(); err != nil {
		Println(err)
	}

	return values, err
}