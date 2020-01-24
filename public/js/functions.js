
import {ProjectModel} from "/public/js/project/model/ProjectModel.js";      // model  -  проекты
import {GroupModel} from "/public/js/group/model/GroupModel.js";            // model  -  группы
import {EmployeeModel} from "/public/js/employee/model/EmployeeModel.js";   // model  -  сотрудники
import {RefModel} from "/public/js/ref/model/RefModel.js";                  // model  -  селекты
import {TaskModel} from "/public/js/task/model/TaskModel.js";               // model  -  задачи

import {projects_originalValues} from "/public/js/origValuesForm.js";       // ориг значения формы проекта
import {groups_originalValues} from "/public/js/origValuesForm.js";	        // ориг значения формы группы
import {employees_originalValues} from "/public/js/origValuesForm.js";	    // ориг значения формы сотрудника

import {uploadForm} from "/public/js/employee/employeeForm.js";             // форма для загрузки фото

export const f = {
    ////////////////////////////////////////////////// Функции /////////////////////////////////////////////////////

    sortProject: (value) => {                       // Сортировка проектов
        $$("listProject").sort("#" + value + "#");
    },

    sortGroup: (value) => {                         // Сортировка групп
        $$("listGroup").sort("#" + value + "#");
    },

    //************************************************** Проекты ***************************************************//

    addProjectForm: () => {                         // Заполнение формы для добавления проекта
        // получаем актуальные группы
        f.getGroupSelect();
        // Изменяем форму
        $$("titleP").setValue("Добавить проект");
        $$("dltProjectFormBtn").disable();
        $$("saveProjectFormBtn").hide();
        $$("createProjectFormBtn").show();
        // заносим стандартные значения в форму
        $$("project_Form").setValues(projects_originalValues);
        $$("project_window").show();
    },

    editProjectForm: () => {                        // Заполнение формы для изменения проекта
        // получаем актуальные группы
        f.getGroupSelect();
        // Изменяем форму
        $$("titleP").setValue("Изменить проект");
        $$("createProjectFormBtn").hide();
        $$("dltProjectFormBtn").enable();
        $$("saveProjectFormBtn").show();
        $$("edit_Popup").hide();
        // заносим данные проекта в форму
        let id = $$("listProject").getSelectedId();
        f.fillProjectForm(id);
        // открываем окно проекта
        $$("project_window").show();
    },

    getAllProjects: () => {                         // Запрашиваем все проекты из бд и заполняем в список
        // запрос на получение всех проектов
        ProjectModel.getAll().then(function (result) {
            // парсим в список
            $$("listProject").parse(result, 'json');
        });
    },

    createProject: () => {                          // Берем значения формы, заносим в бд и выводим в список
        // Валидация заполнения
        if ($$("project_Form").validate()) {
            // берем значения формы
            let project_form = $$("project_Form").getValues();
            let project = {
                Name: project_form.name,
                Group: project_form.group
            };
            // делаем запрос в бд
            ProjectModel.create(project).then(function (result) {
                // заносим новый проект в список
                f.getLastProject(result[0].id);
            });
            // закрываем окно
            $$("project_window").hide();
        }
        else
            webix.message({type: "error", text: "Дайте название проекту"});
    },

    delProject: () => {                             // Удаляем проект из бд и из списка
        // закрываем окна
        $$("edit_Popup").hide();
        $$("project_window").hide();
        // подтверждение удаления
        webix.confirm({
            ok: "ОК", cancel: "Отмена",
            text: "Вы собираетесь удалить проект, вы уверены?"
        })
            .then(function () {
                // Берем id проекта
                let id = $$("listProject").getSelectedId();
                // делаем запрос в бд
                ProjectModel.delete(id).then(function(result) {
                    // удаляем из списка проект
                    $$("listProject").remove(result);
                    // удаляем задачи проекта
                    $$("kanban").clearAll();
                });
            })
    },

    updateProject: () => {                          // Обновляем проект в бд, затем в списке
        // Валидация заполнения
        if ($$("project_Form").validate()) {
            // берем значения формы
            let id = $$("listProject").getSelectedId();
            let project_form = $$("project_Form").getValues();
            let project = {
                Id: id,
                Name: project_form.name,
                Group: project_form.group
            };
            // делаем запрос в бд
            ProjectModel.update(project).then(function(result) {
                // обновляем в списке
                f.refreshProject(result[0].id);
            });
            // закрываем окно
            $$("project_window").hide();
        }
        else
            webix.message({type: "error", text: "Дайте название проекту"});
    },

    getLastProject: (id) => {                       // запрашиваем проект из бд, затем добавляем в конец списка
        // делаем запрос в бд
        ProjectModel.get(id).then(function (result) {
            // Добавляем проект в конец списка
            $$("listProject").add({
                id: result[0]['id'],
                name: result[0]['name'],
                date: new Date(result[0]['date']),
                group: result[0]['group']
            });
        });
    },

    refreshProject: (id) => {                       // запрашиваем проект из бд, затем обновляем в списке
        // делаем запрос в бд
        ProjectModel.get(id).then(function (result) {
            // обновляем данные о проекте
            let item = $$("listProject").getItem(result[0]['id']);
            item.name = result[0]['name'];
            item.group = result[0]['group'];
            $$("listProject").refresh();
        });
    },

    fillProjectForm: (id) => {                      // запрашиваем проект из бд, затем заполняем форму
        // делаем запрос в бд
        ProjectModel.getFk(id).then(function (result) {
            // Создаем массив для формы
            let values = {};
            values["name"] = result[0]["name"];
            values["group"] = result[0]["group"];
            // Заполняем форму проекта
            $$("project_Form").setValues(values);
        });
    },

    //************************************************** Задачи ***************************************************//

    getAllTasks: () => {                            // запрашиваем все задачи и их теги из бд
        let project_id = $$('listProject').getSelectedId();
        $$('kanban').clearAll();
        // запрос на получение всех задач
        TaskModel.getAll(project_id).then(function (result) {
            if (result != null) {
                // получаем id выбранного проекта
                let project = $$('listProject').getSelectedId();
                // проходимся по каждой задаче
                for (let i = 0; i < result.length; i++) {
                    // меняем формат даты
                    result[i].date = new Date(result[i].date);
                    // добавляем теги
                    TaskModel.getTags(result[i].id, project).then(function (tags) {
                        let str = [];
                        if (tags != null) {
                            for (let j = 0; j < tags.length; j++) {
                                str[j] = parseInt(tags[j].value);
                            }
                        }
                        result[i].tags = str;
                    });
                }
            }
            // вынужденная задержка для прогрузки тэгов
            setTimeout(function () {$$("kanban").parse(result)}, 200);
        });
    },

    createTask: () => {                             // заносим задачу в бд, затем в канбан
        let task = $$('kanban_form').getValues();               // получаем значения формы
        task.project = "" + $$('listProject').getSelectedId();  // заносим выбранный проект
        // делаем запрос создания задачи
        TaskModel.create(task).then(function (result) {
            // делаем запрос на получение задачи
            TaskModel.getFk(result[0].id, task.project).then(function (item) {
                // добавляем задачу
                $$('kanban').add(item[0]);
            });
        });
    },

    delTask: (id) => {                              // удаляем задачу из бд, затем из канбана
        // берем текущий проект
        let project = $$('listProject').getSelectedId();
        // делаем запрос
        TaskModel.delete(id, project).then(function (result_id) {
            // Если вызов на удаление из корзины
            if ($$('kanban').exists(id)) {
                // Удаляем задачу
                $$('kanban').remove(result_id);
            }
        });
    },

    updateTask: (task) => {                         // обновляем задачу в бд, затем обновляем теги
        // обновляем задачу
        TaskModel.update(task);
        // обновляем теги задачи
        f.updateTags(task);
    },

    updateTags: (task) => {                         // обновление тегов в бд
        let project = $$('listProject').getSelectedId();
        TaskModel.getTags(task.id, task.project).then(function (tags) {
            // переносим теги ДО в массив
            let before = [];
            if (tags) {
                for (let i = 0; i < tags.length; i++) {
                    before[i] = tags[i].value;
                }
            }
            // переносим теги ПОСЛЕ в массив
            let after = task.tags;

            // выбираем длину
            let len;
            if (after.length > before.length) len = after.length;
            else len = before.length;

            // заполняем массив для отправки
            let tag = {};
            tag.id = task.id;

            // проходимся по массивам
            for (let j = 0; j < len; j++) {

                // если элемент сущ.
                if (before[j]) {
                    // ищем старый тег в новом массиве
                    let elem = after.indexOf(before[j]);
                    // если его нет - удаляем
                    if (elem === -1) {
                        tag.value = before[j];              // дополняем массив для отправки
                        TaskModel.deleteTag(tag, project);  // делаем запрос на удаление
                    }
                }

                // если элемент сущ.
                if (after[j]) {
                    // ищем новый тег в старом массиве
                    let elem = before.indexOf(after[j]);
                    // если его нет - добавляем
                    if (elem === -1) {
                        tag.value = after[j];               // дополняем массив для отправки
                        TaskModel.createTag(tag, project);  // делаем запрос на создание
                    }
                }
            }
        })
    },

    //************************************************** Подзадачи ***************************************************//

    fillSubTasksForm: (id) => {                         // Заполняем форму подзадач
        // делаем запрос
        TaskModel.getAllSub(id).then(function (result) {
            // добавляем подзадачи
            $$('subTasksTable').parse(result);
        });
    },

    createSubTask: () => {                              // Создание подзадачи
        // заполняем подзадачу
        let sub = {};
        sub.id = "";
        sub.value = $$('textSubTask').getValue();
        sub.task = $$('kanban').getSelectedId();
        sub.check = false;
        // делаем запрос
        TaskModel.createSub(sub).then(function (result) {
            // добавляем подзадачу
            $$('subTasksTable').add(result[0]);
        });
        // очищаем поле ввода
        $$('textSubTask').setValue("");
    },

    deleteSubTask: (sub) => {                           // Удаление подзадачи
        // удаляем подзадачу из бд
        TaskModel.deleteSub(sub);
        // удаляем подзадачу из таблицы
        $$('subTasksTable').remove(sub.id);
    },

    updateSubTask: (sub) => {                           // Обновление подзадачи
        // При нажатии check в шапке, больше 5 записей не обрабатывается
        // обновляем задачу в бд
        TaskModel.updateSub(sub);
    },

    //************************************************** Группы ***************************************************//

    addGroupForm: () => {                               // Заполнение формы создания группы
        // получаем актуальных сотрудников
        f.getEmployeeSelect();
        // Изменяем форму
        $$("titleG").setValue("Добавить группу");
        $$("dltGroupFormBtn").disable();
        $$("saveGroupFormBtn").hide();
        $$("createGroupFormBtn").show();
        // заносим стандартные значения в форму
        $$("groups_Form").setValues(groups_originalValues);
        $$("groups_window").show();
    },

    editGroupForm: () => {                              // Заполнение формы редактирования группы
        // получаем актуальных сотрудников
        f.getEmployeeSelect();
        // Изменяем форму
        $$("titleG").setValue("Изменить группу");
        $$("createGroupFormBtn").hide();
        $$("dltGroupFormBtn").enable();
        $$("saveGroupFormBtn").show();
        $$("edit_Popup").hide();
        // заносим данные группы в форму
        let id = $$("listGroup").getSelectedId();
        f.fillGroupForm(id);
        // открываем окно группы
        $$("groups_window").show();
    },

    getAllGroups: () => {                               // Заполнить все группы в список
        // запрос на получение всех групп
        GroupModel.getAll().then(function (result) {
            $$("listGroup").parse(result, 'json');
        });
    },

    createGroup: () => {                                // Создать группу
        // Валидация заполнения
        if ($$("groups_Form").validate()) {
            // берем значения формы
            let group_form = $$("groups_Form").getValues();
            let group = {
                Name: group_form.name,
                Lead: group_form.lead,
            };
            // далем запрос в бд
            GroupModel.create(group).then(function (result) {
                f.getLastGroup(result[0].id);
            });
            // закрываем окно
            $$("groups_window").hide();
        }
        else
            webix.message({type: "error", text: "Дайте название проектной группе"});
    },

    delGroup: () => {                                   // Удалить группу
        // закрываем окна
        $$("edit_Popup").hide();
        $$("groups_window").hide();
        // подтверждение удаления
        webix.confirm({
            ok: "ОК", cancel: "Отмена",
            text: "Вы собираетесь удалить группу, вы уверены?"
        })
            .then(function () {
                // Берем id группы
                let id = $$("listGroup").getSelectedId();
                // далем запрос в бд
                GroupModel.delete(id).then(function(result) {
                    $$("listGroup").remove(result);
                });
            })
    },

    updateGroup: () => {                                // Обновить группу в бд
        // Валидация заполнения
        if ($$("groups_Form").validate()) {
            // берем значения формы
            let id = $$("listGroup").getSelectedId();
            let group_form = $$("groups_Form").getValues();
            let group = {
                Id: id,
                Name: group_form.name,
                Lead: group_form.lead
            };
            // далем запрос в бд
            GroupModel.update(group).then(function(result) {
                f.refreshGroup(result[0].id);
            });
            // закрываем окно
            $$("groups_window").hide();
        }
        else
            webix.message({type: "error", text: "Дайте название проектной группе"});
    },

    getLastGroup: (id) => {                             // Вставить группу в конец списка
        // делаем запрос в бд
        GroupModel.get(id).then(function (result) {
            // Добавляем проект в конец списка
            $$("listGroup").add({
                id: result[0]['id'],
                name: result[0]['name'],
                date: new Date(result[0]['date']),
                lead: result[0]['lead']
            });
        });
    },

    refreshGroup: (id) => {                             // Обновить группу в списке
        // делаем запрос в бд
        GroupModel.get(id).then(function (result) {
            // обновляем данные о проекте
            let item = $$("listGroup").getItem(result[0]['id']);
            item.name = result[0]['name'];
            item.lead = result[0]['lead'];
            $$("listGroup").refresh();
        });
    },

    fillGroupForm: (id) => {                            // Заполнить форму выбранной группой
        // запрос на получение имени и лидера
        GroupModel.getFk(id).then(function (result) {
            // Создаем массив для формы
            let values = {};
            values["name"] = result[0]["name"];
            values["lead"] = result[0]["lead"];
            // Заполняем форму проекта
            $$("groups_Form").setValues(values);
        });
    },

    getGroupEmployees: () => {                          // Получить сотрудников выбранной группы
        let id = $$('listGroup').getSelectedId();
        $$('groupsTable').clearAll();
        EmployeeModel.getByGroup(id).then(function (result) {
            $$('groupsTable').parse(result);
        });
    },

    //************************************************ Сотрудники *************************************************//

    addEmployeeForm: () => {                            // Заполнение формы создания сотрудника
        // получаем актуальные группы и должности
        f.getGroupSelect();
        f.getPosSelect();
        // Изменяем форму
        $$("uploadForm").setHTML(uploadForm);
        $$("titleE").setValue("Добавить сотрудника");
        $$("dltEmployeeFormBtn").disable();
        $$("saveEmployeeFormBtn").hide();
        $$("createEmployeeFormBtn").show();
        // заносим стандартные значения в форму
        $$("employees_Form").setValues(employees_originalValues);
        $$("employees_window").show();
    },

    editEmployeeForm: (id) => {                         // Заполнение формы изменения сотрудника
        // получаем актуальные группы и должности
        f.getGroupSelect();
        f.getPosSelect();
        // Изменяем форму
        $$("titleE").setValue("Изменить данные сотрудника");
        $$("dltEmployeeFormBtn").enable();
        $$("saveEmployeeFormBtn").show();
        $$("createEmployeeFormBtn").hide();
        $$("edit_Popup").hide();
        // заносим данные сотрудника в форму
        f.fillEmployeeForm(id);
        // открываем окно сотрудника
        $$("employees_window").show();
    },

    getAllEmployees: () => {                            // Заполнить список сотрудников
        // далем запрос в бд
        EmployeeModel.getAll().then(function (result) {
            $$("listEmployees").parse(result, 'json');
        });
    },

    createEmployee:() => {                              // Создать сотрудника
        // Валидация заполнения
        if ($$("employees_Form").validate()) {
            // берем значения формы
            let em_form = $$("employees_Form").getValues();
            // imgSrc выставляется 0, т.к. не реализован uploadApi
            let employee = {
                lastName:   em_form.lastName,
                firstName:  em_form.firstName,
                patronymic: em_form.patronymic,
                date:       webix.i18n.dateFormatStr(em_form.date),
                email:      em_form.email,
                imgSrc:     '0.png',
                user:       '1',
                position:   em_form.position,
                group:      em_form.group
            };
            // далем запрос в бд
            EmployeeModel.create(employee).then(function (result) {
                // вставляем его в конец списка
                f.getLastEmployee(result[0].id);
            });
            // закрываем окно
            $$("employees_window").hide();
        }
        else
            webix.message({type: "error", text: "Заполните все данные сотрудника"});
    },

    deleteEmployee: (id) => {                           // Удалить сотрудника
        // закрываем окна
        $$("edit_Popup").hide();
        $$("employees_window").hide();
        // подтверждение удаления
        webix.confirm({
            ok: "ОК", cancel: "Отмена",
            text: "Вы собираетесь удалить сотрудника, вы уверены?"
        })
            .then(function () {
                // далем запрос в бд
                EmployeeModel.delete(id).then(function(result) {
                    let item = $$('listEmployees').getItem(result);
                    webix.message({type:"debug", text:"<i>" + item.lastName + " " + item.firstName + "</i> был удалён"});
                    $$("listEmployees").remove(result);
                    $$("groupsTable").remove(result);
                });
            })
    },

    deleteFromGroup: (id) => {                          // Сделать сотрудника "без группы"
        let g_id = $$('listGroup').getSelectedId();
        if (g_id !== 1) {
            EmployeeModel.deleteFromGroup(id).then(function (id) {
                console.log(id);
                let item = $$('groupsTable').getItem(id);
                webix.message({type: "debug", text: "<i>" + item.lastName + " " + item.firstName + " </i>теперь без группы"});
                $$("groupsTable").remove(id);
            });
        } else webix.message({type: "error", text: "Сотрудник уже без группы"});
    },

    updateEmployee: () => {                             // Обновить сотрудника в бд
        // Валидация заполнения
        if ($$("employees_Form").validate()) {
            // берем значения формы
            let em_form = $$("employees_Form").getValues();
            let employee = {
                Id:         em_form.id,
                lastName:   em_form.lastName,
                firstName:  em_form.firstName,
                patronymic: em_form.patronymic,
                date:       webix.i18n.dateFormatStr(em_form.date),
                email:      em_form.email,
                imgSrc:     em_form.imgSrc,
                user:       '1',
                position:   em_form.position,
                group:      em_form.group
            };
            // далем запрос в бд
            EmployeeModel.update(employee).then(function(result) {
                // обновить в списке
                f.refreshEmployee(result[0].id);
            });
            // закрываем окно
            $$("employees_window").hide();
        }
        else
            webix.message({type: "error", text: "Заполните все данные сотрудника"});
    },

    getLastEmployee: (id) => {                          // Вставить сотрудника в конец списка
        // делаем запрос в бд
        EmployeeModel.get(id).then(function (result) {
            result[0].date = new Date(result[0].date);
            // Добавляем сотрудника в конец списка
            $$("listEmployees").add(result[0]);
            // Добавляем сотрудника в таблицу группы
            let group = $$('listGroup').getSelectedItem();
            if (result[0].group === group.name) {
                $$('groupsTable').add(result[0]);
            }
        });
    },

    refreshEmployee: (id) => {                          // Обновить сотрудника в списке
        // делаем запрос в бд
        EmployeeModel.get(id).then(function (result) {
            // обновляем данные о сотруднике в списке
            let item = $$("listEmployees").getItem(result[0]['id']);
            item.lastName = result[0].lastName;
            item.firstName = result[0].firstName;
            item.patronymic = result[0].patronymic;
            item.position = result[0].position;
            $$("listEmployees").updateItem(result[0]['id']);
            let group = $$('listGroup').getSelectedItem();
            // если обновленный сотрудник находится в выбранной группе
            if (result[0].group === group.name) {
                // обновляем данные о сотруднике в группе
                let itemTable = $$("groupsTable").getItem(result[0]['id']);
                itemTable.id = result[0].id;
                itemTable.lastName = result[0].lastName;
                itemTable.firstName = result[0].firstName;
                itemTable.patronymic = result[0].patronymic;
                itemTable.position = result[0].position;
                itemTable.imgSrc = result[0].imgSrc;
                itemTable.date = result[0].date;
                itemTable.email = result[0].email;
                $$('groupsTable').updateItem(result[0]['id']);
            }
        });
    },

    fillEmployeeForm: (id) => {                         // Заполнить форму выбранным сотрудником
        // запрос на получение данных сотрудника
        EmployeeModel.getFk(id).then(function (result) {
            // Заполняем форму проекта
            //let employeeImg = "<img src='/public/img/employees/#imgSrc#'>";
            $$("uploadForm").setHTML("<img class='upload employeeImg' src='/public/img/employees/" + result[0].imgSrc + "'>");
            result[0].date = new Date(result[0].date);
            $$("employees_Form").setValues(result[0]);
        });
    },

    addEmployeeInGroup: () => {                         // Добавить сотрудника в группу
        // Если сотрудник уже в группе
        if ($$('groupsTable').exists(context.source)) {
            webix.message({type: "error", text: "Сотрудник уже в группе"});
        } else {
            // берем id группы и id сотрудника
            let item = $$('listEmployees').getItem(context.source);
            let group = $$('listGroup').getSelectedItem();
            // создаем массив для отправки
            let employee = {};
            employee.id = item.id;
            employee.group = group.id;
            // делаем запрос на обновление группы у сотрудника
            EmployeeModel.updateGroup(employee).then(function (result) {
                // получаем сотрудника обратно
                EmployeeModel.get(result[0].id).then(function (result) {
                    $$('groupsTable').add(result[0]);
                });
            });
            // оповещаем о действии
            webix.message({type: "success", text: item.lastName + " " + item.firstName + " назначен(а) в группу <i>'" + group.name +"'</i>"});
        }
    },

    //************************************************** Select ***************************************************//

    getGroupSelect: () => {                             // Получить все группы для селекта
        // делаем запрос в бд
        GroupModel.getAll().then(function (result) {
            // создаем массив для Select
            let selectGroup = [];
            // заполняем группы
            if (result) {
                for (let i = 0; i < result.length; i++) {
                    selectGroup[i] = {};
                    selectGroup[i].id = result[i].id;
                    selectGroup[i].value = result[i].name;
                }
            }
            // заносим в select
            if (window.location.href === "http://localhost:9000/employees")
            {
                $$("grEmpSelect").define("options", selectGroup);
                $$("grEmpSelect").refresh();
            }
            else {
                $$("grProjectSelect").define("options", selectGroup);
                $$("grProjectSelect").refresh();
            }
        });
    },

    getEmployeeSelect: () => {                          // Получить всех сотрудников для выбора лидера проекта
        // далем запрос в бд
        EmployeeModel.getAll().then(function (result) {
            // создаем переменную для select
            let selectEmployee = [];
            // заполняем сотрудников
            for (let i = 0; i < result.length; i++) {
                selectEmployee[i] = {};
                selectEmployee[i].id = result[i].id;
                selectEmployee[i].value = result[i].lastName;
            }
            // заносим в select
            $$("employeeSelect").define("options", selectEmployee);
            $$("employeeSelect").refresh();
        });
    },

    getPosSelect: () => {                             // Получить все должности для селекта
        RefModel.getPos().then(function (result) {
            // заносим в select
            $$("positionSelect").define("options", result);
            $$("positionSelect").refresh();
        });
    },

    getAssignSelect: () => {                           // Получить всех сотрудников для селекта задач
        let project = $$('listProject').getSelectedId();
        // делаем запрос выбранного проекта
        ProjectModel.getFk(project).then(function (result) {
            // узнаем нужную группу сотрудников
            let group = result[0].group;
            // делаем запрос сотрудников
            EmployeeModel.getByGroupFk(group).then(function (result) {
                // создаем массив для Select
                let selectAssign = [];
                // заполняем сотрудников
                for (let i = 0; i < result.length; i++) {
                    selectAssign[i] = {};
                    selectAssign[i].id = result[i].id;
                    selectAssign[i].value = result[i].lastName;
                }
                // заносим в select
                $$("assignSelect").define("options", selectAssign);
                $$("assignSelect").refresh();
            });
        });
    },

    getPrioritySelect: () => {                           // Получить приоритетность задач для селекта
        // делаем запрос в бд
        RefModel.getPriority().then(function (result) {
            // заносим в select
            $$("prioritySelect").define("data", result);
            $$("prioritySelect").refresh();
        });
    },

    getStatusSelect: () => {                             // Получить статусы задач для селекта
        // делаем запрос в бд
        RefModel.getStatus().then(function (result) {
            // заносим в select
            $$("statusSelect").define("options", result);
            $$("statusSelect").refresh();
        });
    },

    getTagsSelect: () => {                             // Получить теги задач для селекта
        // делаем запрос в бд
        RefModel.getTags().then(function (result) {
            // заносим в select
            $$("tagsSelect").define("options", result);
            $$("tagsSelect").refresh();
        });
    },

    //************************************************** User ***************************************************//

    getUserInfo: () => {                             // Получить информацию о пользователе
        // Берем текущего пользователя
        EmployeeModel.login().then(function (user) {
            // Ищем сотрудника с таким пользователем
            EmployeeModel.getByUser(user[0].id).then(function (employee) {
                $$('userBtn').setValues(employee[0]);
            })
        })
    },

    logout: () => {                                 // Выйти из системы
        EmployeeModel.logout();
        document.location.replace("/")
    }
};