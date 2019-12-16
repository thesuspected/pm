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

func (c *CEmployee) GetGroup(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetGroup(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}