package project

import (
	"fmt"
	"pm/app/connection"
	"pm/app/models/mappers"
	"pm/app/models/resources"
)

type Provider struct {
	projects *mappers.ProjectMapper
}

func New() *Provider {
	return &Provider{projects: new(mappers.ProjectMapper)}
}

func (p *Provider) GetAll() ([]*resources.Project, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, fmt.Errorf("Ошибка чтения списка проектов: %v", err)
	}
	defer db.Close()
	return p.projects.SelectAll(db)
}

func (p *Provider) Create(newProject resources.Project) ([]*resources.Project, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.projects.Insert(db, newProject)
}