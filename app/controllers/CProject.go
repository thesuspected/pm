package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/project"
	"pm/app/models/resources"
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

func (c *CProject) Get(id int) revel.Result {
	project, err := c.provider.Get(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(project)
}

func (c *CProject) GetFk(id int) revel.Result {
	project, err := c.provider.GetFk(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(project)
}

func (c *CProject) Create(project resources.Project) revel.Result {
	projects, err := c.provider.Create(project)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(projects)
}

func (c *CProject) Delete(id int) revel.Result {
	id, err := c.provider.Delete(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CProject) Update(project resources.Project) revel.Result {
	projects, err := c.provider.Update(project)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(projects)
}