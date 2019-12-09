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

func (c *CGroup) Create(group resources.Group) revel.Result {
	groups, err := c.provider.Create(group)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(groups)
}