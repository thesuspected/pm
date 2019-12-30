import {colors_set, kanban_data, tags_set, users_set} from '/public/js/data.js';
let addIcon = "<div class='webix_view webix_control webix_el_icon addSubtaskBtn' style='display: inline-block; vertical-align: top; border-width: 0px; margin-top: 2px; margin-left: 4px; width: 38px; height: 38px;'><div class='webix_el_box' style='width:38px;height:38px;line-height:38px;margin-top:0px'><button type='button' style='height:38px;width:38px;' class='webix_icon_button'><span class='webix_icon mdi mdi-plus-circle-outline'></span></button></div></div>";
let delIcon = "<div class='webix_view webix_control webix_el_icon delSubtaskBtn' style='display: inline-block; vertical-align: top; border-width: 0px; margin-top: 2px; margin-left: -4px; width: 38px; height: 38px;'><div class='webix_el_box' style='width:38px;height:38px;line-height:38px;margin-top:0px'><button type='button' style='height:38px;width:38px;' class='webix_icon_button'><span class='webix_icon mdi mdi-trash-can'></span></button></div></div>";

export let kanban = {
    view: "kanban",
    id: "kanban",
    type: "wide",
    cols: [
        {
            rows: [
                {
                    view: "toolbar",
                    padding: {left: 10},
                    elements: [
                        {view: "label", label: "Новые"},
                        {view: "icon", id: "addTaskBtn", icon: "mdi mdi-plus-circle-outline", tooltip:"Добавить задачу"}
                    ]
                },
                {id: "new", view: "kanbanlist", status: "0"}
            ]
        },
        {
            header: "<span class='webix_icon mdi mdi-briefcase-outline'></span>В работе",
            body: {view: "kanbanlist", status: "1"}
        },
        {
            header: "<span class='webix_icon mdi mdi-alert-rhombus-outline'></span>На проверку",
            body: {view: "kanbanlist", status: "2"}
        },
        {
            header: "<span class='webix_icon mdi mdi-check'></span>Выполнено",
            body: {view: "kanbanlist", status: "3"}
        }
    ],
    // окно задачи
    editor: {
        id:"kanban_form",
        rules: {
            text: webix.rules.isNotEmpty,
            assign: webix.rules.isNotEmpty,
            priority: webix.rules.isNotEmpty,
            status: webix.rules.isNotEmpty,
        },
        elements: [
            {view: "textarea", name: "text", label: "Название"},
            {view: "textarea", name: "description", height: 100, label: "Описание"},
            {
                view: "multicombo",
                id:"tagsSelect",
                name: "tags",
                label: "Метки",
                options: []
            },
            {
                margin: 10,
                cols: [
                    {
                        name: "assign", id:"assignSelect", view: "combo", options: [], label: "Назначить"
                    },
                    {
                        view: "richselect", name: "priority", label: "Приоритет",
                        options: {
                            body: {
                                id:"prioritySelect",
                                data: [],
                                css: "webix_kanban_colorpicker",
                                template: "<span class='webix_kanban_color_item' style='background-color: #color#'></span>#value#"
                            }
                        }
                    },
                    {
                        view: "richselect",
                        id: "statusSelect",
                        name: "status",
                        label: "Статус",
                        options: []
                    }
                ]
            },
            {
                view: "label",
                label: "Подзадачи"
            },
            {
                view:"datatable",
                id:"subTasksTable",
                editable: true,
                select: true,
                multiselect:true,
                height:220,
                columns:[
                    { id:"check", header:{ content:"masterCheckbox" }, template:"{common.checkbox()}", width:50},
                    { id:"value", header:"Значение", editor:"text", fillspace:true},
                    { id:"buttons", header:addIcon + delIcon, width:100}
                ],
                data: [
                    { id: 1, check:0, value:"Допилить базу данных"},
                    { id: 2, check:1, value:"Реализовать подзадачи на фронтенде"},
                    { id: 3, check:0, value:"Связать бэк с фронтом"},
                ]
            },
        ]
    },
    userList: {
        width:150
    }, // настроить вывод должности?
    cardActions: true,
    tags: [],
    users: users_set,
    colors: colors_set,
    data: kanban_data
};