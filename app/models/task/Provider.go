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

func (p *Provider) Get(id int) ([]*resources.Task, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.Select(id, db)
}

func (p *Provider) GetFk(id int) ([]*resources.Task, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.SelectFk(id, db)
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

func (p *Provider) CreateTag(tag resources.Ref) (resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return tag, err
	}
	defer db.Close()
	return p.tasks.InsertTag(db, tag)
}

func (p *Provider) DeleteTag(tag resources.Ref) (resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return tag, err
	}
	defer db.Close()
	return p.tasks.DeleteTag(db, tag)
}

func (p *Provider) GetAllSub(id int) ([]*resources.SubTask, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.SelectAllSub(db, id)
}

func (p *Provider) CreateSub(sub resources.SubTask) ([]*resources.SubTask, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.InsertSub(db, sub)
}

func (p *Provider) DeleteSub(sub resources.SubTask) (resources.SubTask, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return sub, err
	}
	defer db.Close()
	return p.tasks.DeleteSub(db, sub)
}

func (p *Provider) UpdateSub(sub resources.SubTask) ([]*resources.SubTask, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.tasks.UpdateSub(db, sub)
}