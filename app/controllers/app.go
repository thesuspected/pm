package controllers

import (
	"github.com/revel/revel"
	"my-app/app/routes"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	return c.Redirect(routes.App.Index())
}

func (c App) Tasks() revel.Result {
	return c.Render()
}

func (c App) Employees() revel.Result {
	return c.Render()
}
