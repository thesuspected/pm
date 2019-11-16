package project

import (
	"fmt"
	"pm/app/models/mappers"
	"pm/app/models/resources"
)

type Provider struct {
	projects *mappers.ProjectMapper
}

func New() *Provider {
	return &Provider{projects: new(mappers.ProjectMapper)}
}

func (p *Provider) ReadAll() ([]*resources.Project, error) {
	projects, err := p.projects.Select()
	if err != nil {
		return nil, fmt.Errorf("Ошибка чтения списка проектов: %v", err)
	}
	return projects, nil
}
