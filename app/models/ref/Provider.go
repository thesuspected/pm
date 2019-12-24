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