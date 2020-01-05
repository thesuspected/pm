package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/resources"
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

func (c *CTask) Get(id int) revel.Result {
	task, err := c.provider.Get(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(task)
}

func (c *CTask) GetFk(id int) revel.Result {
	task, err := c.provider.GetFk(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(task)
}

func (c *CTask) Create(task resources.Task) revel.Result {
	tasks, err := c.provider.Create(task)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(tasks)
}

func (c *CTask) Delete(id int) revel.Result {
	id, err := c.provider.Delete(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CTask) Update(task resources.Task) revel.Result {
	tasks, err := c.provider.Update(task)
	if err != nil {
		return c.RenderError(err)
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

func (c *CTask) CreateTag(tag resources.Ref) revel.Result {
	tags, err := c.provider.CreateTag(tag)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(tags)
}

func (c *CTask) DeleteTag(tag resources.Ref) revel.Result {
	tags, err := c.provider.DeleteTag(tag)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(tags)
}

func (c *CTask) GetAllSub(id int) revel.Result {
	c.provider = task.New()
	subTasks, err := c.provider.GetAllSub(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(subTasks)
}

func (c *CTask) CreateSub(sub resources.SubTask) revel.Result {
	subTasks, err := c.provider.CreateSub(sub)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(subTasks)
}

func (c *CTask) DeleteSub(sub resources.SubTask) revel.Result {
	subTasks, err := c.provider.DeleteSub(sub)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(subTasks)
}

func (c *CTask) UpdateSub(sub resources.SubTask) revel.Result {
	subTasks, err := c.provider.UpdateSub(sub)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(subTasks)
}