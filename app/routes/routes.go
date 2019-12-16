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

func (_ tCEmployee) GetGroup(
		id int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "id", id)
	return revel.MainRouter.Reverse("CEmployee.GetGroup", args).URL
}


type tCGroup struct {}
var CGroup tCGroup


func (_ tCGroup) GetAll(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("CGroup.GetAll", args).URL
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


