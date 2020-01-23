import {projectGroup_data} from '/public/js/data.js';

export let projectForm = {
    view: "form",
    id: "project_Form",
    rules: {
        "name": webix.rules.isNotEmpty
    },
    elements: [
        {
            margin:10, cols: [
                {view: "text", id:"projectName", label: "Название", labelPosition: "top", name: "name"},
                {
                    view:"select",
                    id: "grProjectSelect",
                    label:"Пр. группа",
                    labelPosition: "top",
                    options:[],
                    name: "group"
                }
            ]
        },
        {
            margin: 10, cols: [
                {view: "button", id: "dltProjectFormBtn", width: 111, value: "Удалить"},
                {},
                {view: "button", id: "saveProjectFormBtn", width: 111, value: "Сохранить", css: "webix_primary"},
                {view: "button", id: "createProjectFormBtn", width: 111, value: "Создать", css: "webix_primary"}
            ]
        }
    ]
};