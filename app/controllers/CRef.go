package controllers

import (
	"pm/app/models/ref"

	"github.com/revel/revel"
)

type CRef struct {
	*revel.Controller
	provider *ref.Provider
}

func (c *CRef) GetPos() revel.Result {
	c.provider = ref.New()
	values, err := c.provider.GetPos()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(values)
}

func (c *CRef) GetPriority() revel.Result {
	c.provider = ref.New()
	values, err := c.provider.GetPriority()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(values)
}

func (c *CRef) GetStatus() revel.Result {
	c.provider = ref.New()
	values, err := c.provider.GetStatus()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(values)
}

func (c *CRef) GetTags() revel.Result {
	c.provider = ref.New()
	values, err := c.provider.GetTags()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(values)
}
