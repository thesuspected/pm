package employee

import (
	"pm/app/connection"
	"pm/app/models/mappers"
	"pm/app/models/resources"
)

type Provider struct {
	employees *mappers.EmployeeMapper
}

func New() *Provider {
	return &Provider{employees: new(mappers.EmployeeMapper)}
}

func (p *Provider) GetAll() ([]*resources.Employee, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.employees.SelectAll(db)
}

func (p *Provider) Get(id int) ([]*resources.Employee, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.employees.Select(id, db)
}

func (p *Provider) GetFk(id int) ([]*resources.Employee, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.employees.SelectFk(id, db)
}

func (p *Provider) GetByGroup(id int) ([]*resources.Employee, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.employees.SelectByGroup(id, db)
}

func (p *Provider) GetByGroupFk(id int) ([]*resources.Employee, error) {
	db, err := connection.DatabaseConnect()
	if err != nil {
		return nil, err
	}
	defer db.Close()
	return p.employees.SelectByGroupFk(id, db)
}