import {colors_set, kanban_data, tags_set, users_set} from '/public/js/data.js';

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
                {id: "new", view: "kanbanlist", status: "Новые"}
            ]
        },
        {
            header: "<span class='webix_icon mdi mdi-briefcase-outline'></span>В работе",
            body: {view: "kanbanlist", status: "В работе"}
        },
        {
            header: "<span class='webix_icon mdi mdi-alert-rhombus-outline'></span>На проверку",
            body: {view: "kanbanlist", status: "На проверку"}
        },
        {
            header: "<span class='webix_icon mdi mdi-check'></span>Выполнено",
            body: {view: "kanbanlist", status: "Выполнено"}
        }
    ],
    // окно задачи
    editor: {
        rules: {
            text: webix.rules.isNotEmpty,
            user_id: webix.rules.isNotEmpty
        },
        elements: [
            {view: "textarea", name: "text", label: "Название"},
            {view: "textarea", name: "description", height: 100, label: "Описание"},
            {
                view: "multicombo", name: "tags", label: "Метки",
                options: tags_set
            },
            {
                margin: 10,
                cols: [
                    {
                        name: "user_id", view: "combo", options: users_set, label: "Назначить"
                    },
                    {
                        view: "richselect", name: "color", label: "Приоритет",
                        options: {
                            body: {
                                data: colors_set,
                                css: "webix_kanban_colorpicker",
                                template: "<span class='webix_kanban_color_item' style='background-color: #color#'></span>#value#"
                            }
                        }
                    },
                    {
                        view: "richselect", name: "$list", label: "Статус",
                        options: [
                            {id: "0", value: "Новые"},
                            {id: "1", value: "В работе"},
                            {id: "2", value: "На проверку"},
                            {id: "3", value: "Выполнено"}
                        ]
                    }
                ]
            },
            {
                view: "label",
                label: "Подзадачи"
            },
            {
                view:"datatable",
                height:280,
                footer:true,
                //autoheight: true,
                columns:[
                    { id:"check", header:{ content:"masterCheckbox" }, template:"{common.checkbox()}", width:50},
                    {
                        id:"value",
                        sort:"string",
                        header:"Значение",
                        fillspace:true,
                        footer:{
                            cols: [
                                {view: "button", id: "dltSubtaskBtn", width: 111, value: "Удалить"},
                                {view: "button", id: "addSubtaskBtn", width: 111, value: "Добавить"}
                            ]
                        }
                    }
                ],
                data: [
                    { check:0, value:"Допилить базу данных"},
                    { check:1, value:"Реализовать подзадачи на фронтенде"},
                    { check:0, value:"Связать бэк с фронтом"},
                ]
            },
        ]
    },
    userList: true, // настроить вывод должности?
    cardActions: true,
    //comments:{currentUser:9}, // задать пользователя текущей сессии
    tags: tags_set,
    users: users_set,
    colors: colors_set,
    data: kanban_data
};