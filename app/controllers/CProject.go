package controllers

import (
	"encoding/json"
	"github.com/revel/revel"
	"io/ioutil"
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

func (c *CProject) Create(project resources.Project) revel.Result {
	postBody, err := ioutil.ReadAll(c.Request.GetBody())
	if err != nil {
		return c.RenderError(err)
	}
	var newProject resources.Project
	err = json.Unmarshal(postBody, &newProject)
	projects, err := c.provider.Create(newProject)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(projects)
}