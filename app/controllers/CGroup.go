package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/group"
	"pm/app/models/resources"
)

type CGroup struct {
	*revel.Controller
	provider *group.Provider
}

func (c *CGroup) GetAll() revel.Result {
	c.provider = group.New()
	groups, err := c.provider.GetAll()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(groups)
}

func (c *CGroup) Get(id int) revel.Result {
	c.provider = group.New()
	group, err := c.provider.Get(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(group)
}

func (c *CGroup) GetFk(id int) revel.Result {
	c.provider = group.New()
	group, err := c.provider.GetFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(group)
}

func (c *CGroup) Create(group resources.Group) revel.Result {
	groups, err := c.provider.Create(group)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(groups)
}

func (c *CGroup) Delete(id int) revel.Result {
	id, err := c.provider.Delete(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CGroup) Update(group resources.Group) revel.Result {
	groups, err := c.provider.Update(group)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(groups)
}