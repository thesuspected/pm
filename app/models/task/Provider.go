package task

import (
	"pm/app/connection"
	"pm/app/models/mappers"
	"pm/app/models/resources"
)

type Provider struct {
	tasks *mappers.TaskMapper
}

func New() *Provider {
	return &Provider{tasks: new(mappers.TaskMapper)}
}

func (p *Provider) GetAll(id int) ([]*resources.Task, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.SelectAll(db, id)
}

func (p *Provider) Create(task resources.Task) ([]*resources.Task, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.Insert(db, task)
}

func (p *Provider) Delete(id int) (int, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return id, err
	}
	defer db.Close()
	return p.tasks.Delete(db, id)
}

func (p *Provider) Update(task resources.Task) ([]*resources.Task, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.Update(db, task)
}

func (p *Provider) GetTags(id int) ([]*resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.SelectTags(db, id)
}