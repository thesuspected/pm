package mappers

import (
	"database/sql"
	"pm/app/models/resources"
)

type ProjectMapper struct {
	db *sql.DB
}

func (m *ProjectMapper) Select() ([]*resources.Project, error) {
	return nil, nil
}