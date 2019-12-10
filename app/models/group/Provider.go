package group

import (
	"pm/app/connection"
	"pm/app/models/mappers"
	"pm/app/models/resources"
)

type Provider struct {
	groups *mappers.GroupMapper
}

func New() *Provider {
	return &Provider{groups: new(mappers.GroupMapper)}
}

func (p *Provider) GetAll() ([]*resources.Group, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.groups.SelectAll(db)
}

func (p *Provider) Create(group resources.Group) ([]*resources.Group, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.groups.Insert(db, group)
}

func (p *Provider) Delete(id int) (int, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return id, err
	}
	defer db.Close()
	return p.groups.Delete(db, id)
}

func (p *Provider) Update(group resources.Group) ([]*resources.Group, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.groups.Update(db, group)
}