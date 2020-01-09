package controllers

import (
	"fmt"
	"log"
	"pm/app/routes"

	"github.com/revel/revel"
)

type App struct {
	*revel.Controller
}

// func handler(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("WWW-Authenticate", fmt.Sprintf(`Basic realm="Войдите в систему"`))
// 	w.WriteHeader(401)
// 	return
// }

func (c *App) checkAuth() revel.Result {
	//r := c.Request
	w := c.Response.Out.Header()
	if w.Get("authorization") != "" {
		log.Println(w.Get("authorization"))
		return c.Redirect(routes.App.Tasks)
	}
	w.Set("WWW-Authenticate", fmt.Sprintf(`Basic realm="Войдите в систему"`))
	w.SetStatus(401)
	return nil
}

func init() {
	revel.InterceptMethod((*App).checkAuth, revel.AFTER)
}

func (c App) Index() revel.Result {
	return c.Redirect(routes.App.Tasks)
}

func (c App) Tasks() revel.Result {
	return c.Render()
}

func (c App) Employees() revel.Result {
	return c.Render()
}
