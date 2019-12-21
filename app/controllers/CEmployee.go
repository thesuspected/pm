package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/employee"
)

type CEmployee struct {
	*revel.Controller
	provider *employee.Provider
}

func (c *CEmployee) GetAll() revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetAll()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) Get(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.Get(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

func (c *CEmployee) GetFk(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.GetFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

func (c *CEmployee) GetByGroup(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetByGroup(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) GetByGroupFk(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetByGroupFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}