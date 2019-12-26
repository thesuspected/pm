package ref

import (
	"pm/app/connection"
	"pm/app/models/mappers"
	"pm/app/models/resources"
)

type Provider struct {
	refs *mappers.RefMapper
}

func New() *Provider {
	return &Provider{refs: new(mappers.RefMapper)}
}

func (p *Provider) GetPos() ([]*resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.refs.SelectPos(db)
}

func (p *Provider) GetPriority() ([]*resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.refs.SelectPriority(db)
}

func (p *Provider) GetStatus() ([]*resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.refs.SelectStatus(db)
}

func (p *Provider) GetTags() ([]*resources.Ref, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.refs.SelectTags(db)
}