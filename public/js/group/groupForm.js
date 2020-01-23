

export let groupForm = {
    view: "form",
    id: "groups_Form",
    rules: {
        "name": webix.rules.isNotEmpty
    },
    elements: [
        {
            margin:10, cols: [
                {view: "text", label: "Название", labelPosition: "top", name: "name"},
                {
                    view: "select",
                    id: "employeeSelect",
                    margin: 20,
                    label: "Руководитель",
                    options: [],
                    labelPosition: "top",
                    name: "lead"
                }
            ]
        },
        {
            margin: 10, cols: [
                {view: "button", id: "dltGroupFormBtn", width: 111, value: "Удалить"},
                {},
                {view: "button", id: "saveGroupFormBtn", value: "Сохранить", width: 111, css: "webix_primary"},
                {view: "button", id: "createGroupFormBtn", value: "Создать", width: 111, css: "webix_primary"}
            ]
        }
    ]
};