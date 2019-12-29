package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/task"
)

type CTask struct {
	*revel.Controller
	provider *task.Provider
}

func (c *CTask) GetAll(id int) revel.Result {
	c.provider = task.New()
	tasks, err := c.provider.GetAll(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(tasks)
}

func (c *CTask) GetTags(id int) revel.Result {
	c.provider = task.New()
	tags, err := c.provider.GetTags(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(tags)
}