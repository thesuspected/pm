package controllers

import (
	"encoding/base64"
	"log"
	"pm/app/models/employee"
	"pm/app/models/resources"
	"strings"

	"github.com/revel/revel"
)

type CEmployee struct {
	*revel.Controller
	provider *employee.Provider
}

// Авторизация
func (c *CEmployee) Login() revel.Result {

	// получаем строку авторизации
	auth := c.Request.GetHttpHeader("Authorization")

	// избавляемся от префикса
	encoded := strings.TrimPrefix(auth, "Basic ")

	// декодируем
	decoded, err := base64.StdEncoding.DecodeString(encoded)
	if err != nil {
		log.Fatal(err)
	}

	// разбиваем логин и пароль
	str := strings.Split(string(decoded), ":")

	// заносим в структуру
	var user resources.User
	user.Login, user.Password = str[0], str[1]

	// делаем запрос в бд
	users, _ := c.provider.UserLogin(user)

	// возвращаем пользователя
	return c.RenderJSON(users)
}

func (c *CEmployee) Logout() revel.Result {
	// уничтожаем header
	c.Response.Out.Destroy()
	c.Request.Destroy()
	// 401
	c.Response.Out.Header().Set("WWW-Authenticate", "Basic realm='tasks'")
	c.Response.SetStatus(401)
	c.Response.GetWriter().Write([]byte("Unauthorised.\n"))

	return nil
}

// Получить всех сотрудников
func (c *CEmployee) GetAll() revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetAll()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

// Получить сотрудников для канбана
func (c *CEmployee) GetEmp() revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetEmp()
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

// Получить сотрудника привязанного к пользователю
func (c *CEmployee) GetByUser(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.GetByUser(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

// Получить сотрудника с заменой вторичных ключей
func (c *CEmployee) Get(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.Get(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

// Получить сотрудника со вторичными ключами
func (c *CEmployee) GetFk(id int) revel.Result {
	c.provider = employee.New()
	employee, err := c.provider.GetFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employee)
}

// Получить сотрудников опр. группы
func (c *CEmployee) GetByGroup(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetByGroup(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

// Получить сотрудников опр. группы со втор. ключами
func (c *CEmployee) GetByGroupFk(id int) revel.Result {
	c.provider = employee.New()
	employees, err := c.provider.GetByGroupFk(id)
	if err != nil {
		c.RenderJSON(err)
	}
	return c.RenderJSON(employees)
}

// Переместить сотрудника в другую группу
func (c *CEmployee) UpdateGroup(employee resources.Employee) revel.Result {
	employees, err := c.provider.UpdateGroup(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}

// Удалить сотрудника из группы (перемещние в "без группы")
func (c *CEmployee) DeleteGroup(id int) revel.Result {
	id, err := c.provider.DeleteGroup(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

// Создать сотрудника
func (c *CEmployee) Create(employee resources.Employee) revel.Result {
	employees, err := c.provider.Create(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}

// Удалить сотрудника
func (c *CEmployee) Delete(id int) revel.Result {
	id, err := c.provider.Delete(id)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(id)
}

// Обновить данные сотрудника
func (c *CEmployee) Update(employee resources.Employee) revel.Result {
	employees, err := c.provider.Update(employee)
	if err != nil {
		return c.RenderError(err)
	}
	return c.RenderJSON(employees)
}
