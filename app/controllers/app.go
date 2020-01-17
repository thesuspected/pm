package controllers

import (
	//"encoding/base64"
	//"fmt"
	"log"
	"pm/app/routes"

	//"strings"

	"github.com/revel/revel"
)

type App struct {
	*revel.Controller
}

func (c *App) CheckAuth() revel.Result {

	// получаем строку авторизации
	auth := c.Request.GetHttpHeader("Authorization")
	url := c.Request.URL
	r := c.Response.Out.Header()
	log.Println("---------------", auth, "----------------")

	// если авторизация есть
	if auth != "" {
		// не пускаем на стр авторизации
		if url.Path == "/auth" {
			c.Request.Header.Set("Authorization", auth)
			//r.Set("Authorization", auth)
			//c.Request.Header.Set("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9")
			return c.Redirect(routes.App.Tasks())
		}
		return nil
		// Если не авторизован и не на странице авторизации
	} else if url.Path != "/auth" {
		r.Set("WWW-Authenticate", "Basic")
		//r.SetStatus(401)
		return c.Redirect(routes.App.Auth())
	}
	// если не авторизован и на стр авторизации
	r.Set("WWW-Authenticate", "Basic")
	//r.SetStatus(401)
	return c.RenderTemplate("App/auth.html")
}

// проверка аутентификации
func init() {
	revel.InterceptMethod((*App).CheckAuth, revel.BEFORE)
}

func (c App) Index() revel.Result {
	return c.Redirect(routes.App.Tasks())
}

func (c App) Auth() revel.Result {
	return c.Render()
}

func (c App) Tasks() revel.Result {
	return c.Render()
}

func (c App) Employees() revel.Result {
	return c.Render()
}
