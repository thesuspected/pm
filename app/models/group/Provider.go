package group

import (
	"fmt"
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
		return nil, fmt.Errorf("Ошибка чтения списка проектов: %v", err)
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