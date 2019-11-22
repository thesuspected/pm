import {users_set} from '/public/js/data.js';

export let employees = {
    gravity: 0.37,
    rows: [
        {
            view: "toolbar",
            padding: {left: 10},
            margin: -4,
            elements: [
                {view: "label", label: "Все сотрудники"},
                {view: "icon", id: "addEmployeeBtn", icon: "mdi mdi-plus-circle-outline"},
                {view: "text", placeholder: "поиск...", id: "search", hidden: true},
                {view: "icon", id: "openSearchBtn", icon: "mdi mdi-magnify"},
                {view: "icon", id: "closeSearchBtn", icon: "mdi mdi-close", hidden: true}
            ]
        },
        {
            view: "list",
            id: "listEmployees",
            css: "listEmployees",
            template: function (obj) {
                return "<img class='listImg pad' src='" + obj.image + "'></img><div class='listBlock'><div class='listName pad'>" + obj.value + "</div></div> <div class='listBlock'> <div class='listPos pad'>" + obj.position + "</div></div>"
            },
            type: {
                height: 80
            },
            select: true,
            data: users_set
        }
    ]
};