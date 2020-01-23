export let uploadForm = "<div class='upload uploadDiv uploadBtns'><button type='button' class='uploadBtn webix_view' ><img src='/public/img/upload.svg' class='uploadImg'/>Загрузить</button></div>";

export let employeeForm = {
    view: "form",
    id: "employees_Form",
    rules: {
        "lastName": webix.rules.isNotEmpty,
        "firstName": webix.rules.isNotEmpty,
        "date": webix.rules.isNotEmpty,
        "email": webix.rules.isNotEmpty,
        "group": webix.rules.isNotEmpty,
        "position": webix.rules.isNotEmpty
    },
    elements: [
        // фото + фио, должность
        {
            margin: 10,
            cols: [
                {
                    id:"uploadForm",
                    type:"clean",
                    template: uploadForm,
                    onClick:{
                        "upload":function(){
                            $$("uploadAPI").fileDialog();
                        }
                    },
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
                {view: "select", id:"grEmpSelect", label: "Группа", options: [], labelPosition: "top", name: "group"},
                {view: "select", id:"positionSelect", label: "Должность", options: [], labelPosition: "top", name: "position"}
            ]
        },
        {
            margin: 10,
            cols: [
                {view: "button", id: "dltEmployeeFormBtn", width: 111, value: "Удалить"},
                {},
                {view: "button", id: "saveEmployeeFormBtn", value: "Сохранить", width: 111, css: "webix_primary"},
                {view: "button", id: "createEmployeeFormBtn", value: "Добавить", width: 111, css: "webix_primary"}
            ]
        }
    ]
};