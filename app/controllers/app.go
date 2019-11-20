package controllers

import (
	"github.com/revel/revel"
	"pm/app/routes"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	return c.Render()
}

func (c App) Employees() revel.Result {
	return c.Redirect(routes.App.Employees())
	return c.Render()
}
