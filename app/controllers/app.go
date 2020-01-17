package controllers

import (
	"encoding/base64"
	"log"
	"pm/app/models/employee"
	"pm/app/models/resources"
	"pm/app/routes"
	"strings"

	"github.com/revel/revel"
)

type App struct {
	*revel.Controller
	provider *employee.Provider
}

func (c *App) CheckAuth() revel.Result {
	// получаем строку авторизации
	auth := c.Request.GetHttpHeader("Authorization")
	// получем header
	r := c.Response.Out.Header()

	// если авторизация есть
	if auth != "" {
		// избавляемся от префикса
		encoded := strings.TrimPrefix(auth, "Basic ")
		// декодируем
		decoded, err := base64.StdEncoding.DecodeString(encoded)
		if err != nil {
			log.Fatal(err)
		}
		// разбиваем логин и пароль
		str := strings.Split(string(decoded), ":")
		if len(str) == 2 {
			// заносим в структуру
			var user resources.User
			user.Login, user.Password = str[0], str[1]
			// делаем запрос в бд
			users, _ := c.provider.UserLogin(user)
			// Если пользователь не найден
			if len(users) == 0 {
				r.Set("WWW-Authenticate", "Basic realm='tasks'")
				r.SetStatus(401)
				return c.Redirect(routes.App.Tasks())
			} else {
				// Пользователь найден
				return nil
			}
		}
	}
	// если авторизации нет
	r.Set("WWW-Authenticate", "Basic realm='tasks'")
	r.SetStatus(401)
	return c.Redirect(routes.App.Tasks())
}

// проверка аутентификации
func init() {
	revel.InterceptMethod((*App).CheckAuth, revel.BEFORE)
}

func (c App) Index() revel.Result {
	return c.Redirect(routes.App.Tasks())
}

func (c App) Tasks() revel.Result {
	return c.Render()
}

func (c App) Employees() revel.Result {
	return c.Render()
}
