package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/project"
)

type CProject struct {
	*revel.Controller
	provider *project.Provider
}

func (c *CProject) GetAll() revel.Result {
	c.provider = project.New()
	projects, err := c.provider.GetAll()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(projects)
}
