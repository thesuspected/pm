// GENERATED CODE - DO NOT EDIT
// This file provides a way of creating URL's based on all the actions
// found in all the controllers.
package routes

import "github.com/revel/revel"


type tStatic struct {}
var Static tStatic


func (_ tStatic) Serve(
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.Serve", args).URL
}

func (_ tStatic) ServeDir(
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.ServeDir", args).URL
}

func (_ tStatic) ServeModule(
		moduleName string,
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "moduleName", moduleName)
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.ServeModule", args).URL
}

func (_ tStatic) ServeModuleDir(
		moduleName string,
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "moduleName", moduleName)
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.ServeModuleDir", args).URL
}


type tTestRunner struct {}
var TestRunner tTestRunner


func (_ tTestRunner) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.Index", args).URL
}

func (_ tTestRunner) Suite(
		suite string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	return revel.MainRouter.Reverse("TestRunner.Suite", args).URL
}

func (_ tTestRunner) Run(
		suite string,
		test string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	revel.Unbind(args, "test", test)
	return revel.MainRouter.Reverse("TestRunner.Run", args).URL
}

func (_ tTestRunner) List(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.List", args).URL
}


type tApp struct {}
var App tApp


func (_ tApp) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.Index", args).URL
}

func (_ tApp) Tasks(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.Tasks", args).URL
}

func (_ tApp) Employees(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.Employees", args).URL
}


type tCEmployee struct {}
var CEmployee tCEmployee


func (_ tCEmployee) GetAll(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CEmployee.GetAll", args).URL
}

func (_ tCEmployee) Get(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.Get", args).URL
}

func (_ tCEmployee) GetFk(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.GetFk", args).URL
}

func (_ tCEmployee) GetByGroup(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.GetByGroup", args).URL
}

func (_ tCEmployee) GetByGroupFk(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.GetByGroupFk", args).URL
}

func (_ tCEmployee) UpdateGroup(
		employee interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "employee", employee)
	return revel.MainRouter.Reverse("CEmployee.UpdateGroup", args).URL
}

func (_ tCEmployee) DeleteGroup(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.DeleteGroup", args).URL
}

func (_ tCEmployee) Create(
		employee interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "employee", employee)
	return revel.MainRouter.Reverse("CEmployee.Create", args).URL
}

func (_ tCEmployee) Delete(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.Delete", args).URL
}

func (_ tCEmployee) Update(
		employee interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "employee", employee)
	return revel.MainRouter.Reverse("CEmployee.Update", args).URL
}


type tCGroup struct {}
var CGroup tCGroup


func (_ tCGroup) GetAll(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CGroup.GetAll", args).URL
}

func (_ tCGroup) Get(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CGroup.Get", args).URL
}

func (_ tCGroup) GetFk(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CGroup.GetFk", args).URL
}

func (_ tCGroup) Create(
		group interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "group", group)
	return revel.MainRouter.Reverse("CGroup.Create", args).URL
}

func (_ tCGroup) Delete(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CGroup.Delete", args).URL
}

func (_ tCGroup) Update(
		group interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "group", group)
	return revel.MainRouter.Reverse("CGroup.Update", args).URL
}


type tCProject struct {}
var CProject tCProject


func (_ tCProject) GetAll(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CProject.GetAll", args).URL
}

func (_ tCProject) Get(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CProject.Get", args).URL
}

func (_ tCProject) GetFk(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CProject.GetFk", args).URL
}

func (_ tCProject) Create(
		project interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "project", project)
	return revel.MainRouter.Reverse("CProject.Create", args).URL
}

func (_ tCProject) Delete(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CProject.Delete", args).URL
}

func (_ tCProject) Update(
		project interface{},
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "project", project)
	return revel.MainRouter.Reverse("CProject.Update", args).URL
}


type tCRef struct {}
var CRef tCRef


func (_ tCRef) GetPos(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CRef.GetPos", args).URL
}

func (_ tCRef) GetPriority(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CRef.GetPriority", args).URL
}

func (_ tCRef) GetStatus(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CRef.GetStatus", args).URL
}

func (_ tCRef) GetTags(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CRef.GetTags", args).URL
}


