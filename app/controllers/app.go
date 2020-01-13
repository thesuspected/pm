package controllers

import (
	"encoding/base64"
	//"fmt"
	"log"
	"pm/app/routes"
	"strings"

	"github.com/revel/revel"
)

type App struct {
	*revel.Controller
}

func (c *App) checkAuth() revel.Result {

	// получаем строку авторизации
	auth := c.Request.GetHttpHeader("authorization")
	url := c.Request.URL

	// если авторизация есть
	if auth != "" {
		// не пускаем на стр авторизации
		if url.Path == "/auth" {
			c.Redirect(routes.App.Tasks())
		}
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
			user, pass := str[0], str[1]
			// если логин и пароль найдены в бд
			if user == "suspect" && pass == "suspect" {
				return nil
				// иначе выкидываем
			} else {
				//h.Set("WWW-Authenticate", fmt.Sprintf(`Basic realm="Войдите в систему"`))
				//h.SetStatus(401)
				return c.Redirect(routes.App.Auth())
			}
		}
		// пересылаем на стр авторизации
	} else if url.Path != "/auth" {
		//h.Set("WWW-Authenticate", fmt.Sprintf(`Basic realm="Войдите в систему"`))
		//h.SetStatus(401)
		return c.Redirect(routes.App.Auth())
	}
	// если не авторизован и на стр авторизации
	return nil
}

// проверка аутентификации
func init() {
	revel.InterceptMethod((*App).checkAuth, revel.BEFORE)
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
