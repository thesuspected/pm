package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/employee"
	"pm/app/models/resources"
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

func (c *CEmployee) GetEmp() revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetEmp()
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

func (c *CEmployee) UpdateGroup(employee resources.Employee) revel.Result {
	employees, err := c.provider.UpdateGroup(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) DeleteGroup(id int) revel.Result {
	id, err := c.provider.DeleteGroup(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CEmployee) Create(employee resources.Employee) revel.Result {
	employees, err := c.provider.Create(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) Delete(id int) revel.Result {
	id, err := c.provider.Delete(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CEmployee) Update(employee resources.Employee) revel.Result {
	employees, err := c.provider.Update(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}