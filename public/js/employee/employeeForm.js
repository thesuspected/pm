import {positions, projectGroup_data} from '/public/js/data.js';

export let employeeForm = {
    view: "form",
    id: "employees_Form",
    rules: {
        "name": webix.rules.isNotEmpty
    },
    elements: [
        // фото + фио, должность
        {
            margin: 10,
            cols: [
                {
                    template: "Фото"
                },
                {
                    rows: [
                        {view: "text", label: "Фамилия", labelPosition: "top", name: "lastName"},
                        {view: "text", label: "Имя", labelPosition: "top", name: "firstName"},
                        {view: "text", label: "Отчество", labelPosition: "top", name: "patronymic"}
                    ]
                }
            ]
        },
        {
          margin: 10,
          cols: [
              {view: "datepicker", value: new Date(), label: "Дата рождения", labelPosition: "top", name: "date"},
              {view: "text", label: "Почта", labelPosition: "top", name: "email"}
          ]
        },
        {
            margin: 10,
            cols: [
                {view: "select", id:"groupSelect", label: "Группа", options: [], labelPosition: "top", name: "group"},
                {view: "select", label: "Должность", options: [], labelPosition: "top", name: "position"}
            ]
        },
        {
            margin: 10,
            cols: [
                {view: "button", id: "dltEmployeeFormBtn", width: 111, value: "Уволить"},
                {},
                {view: "button", id: "saveEmployeeFormBtn", value: "Нанять", width: 111, css: "webix_primary"},
            ]
        }
    ]
};