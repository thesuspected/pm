package controllers

import (
	"github.com/revel/revel"
	"pm/app/models/ref"
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