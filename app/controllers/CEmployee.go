package controllers

import (
	"encoding/base64"
	"io/ioutil"
	"log"
	"pm/app/models/employee"
	"pm/app/models/resources"
	"pm/app/routes"
	"strings"

	"github.com/revel/revel"
)

type CEmployee struct {
	*revel.Controller
	provider *employee.Provider
}

func (c *CEmployee) Login() revel.Result {
	body, err := ioutil.ReadAll(c.Request.GetBody())
	if err != nil {
		log.Fatal(err)
	}
	encoded := string(body)
	// декодируем
	decoded, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		log.Fatal(err)
	}
	// разбиваем логин и пароль
	str := strings.Split(string(decoded), ":")
	// заносим их в структуру
	var user resources.User
	user.Login, user.Password = str[0], str[1]
	// ищем логин и пароль в бд
	_, err = c.provider.UserLogin(user)
	// если неверны
	if err != nil {
		// НЕВЕРНЫЕ ЛОГИН ИЛИ ПАРОЛЬ ВЕРНУТЬ
		log.Println("--------  НЕВЕРНЫЕ ЛОГИН И ПАРОЛЬ  --------")
	} else {
		c.Request.Header.Add("Authorization", "Basic "+encoded)
		return c.RenderJSON(body)
	}
	return c.Render(routes.App.Auth())
}

func (c *CEmployee) Logout() revel.Result {
	c.Response.Out.Header().Set("Content-Type", "application/xml")
	c.Request.Header.Server.Del("Authorization")
	return c.Render(routes.App.Auth())
}

func (c *CEmployee) GetAll() revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetAll()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) GetEmp() revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetEmp()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) Get(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.Get(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

func (c *CEmployee) GetFk(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.GetFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

func (c *CEmployee) GetByGroup(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetByGroup(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) GetByGroupFk(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetByGroupFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) UpdateGroup(employee resources.Employee) revel.Result {
	employees, err := c.provider.UpdateGroup(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) DeleteGroup(id int) revel.Result {
	id, err := c.provider.DeleteGroup(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CEmployee) Create(employee resources.Employee) revel.Result {
	employees, err := c.provider.Create(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}

func (c *CEmployee) Delete(id int) revel.Result {
	id, err := c.provider.Delete(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

func (c *CEmployee) Update(employee resources.Employee) revel.Result {
	employees, err := c.provider.Update(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}
