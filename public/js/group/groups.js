import {groups_data} from '/public/js/data.js';

export let groups = {
    rows: [
        {
            view: "toolbar",
            padding: {left: 10},
            margin: -4,
            elements: [
                {view: "label", label: "Группы"},
                {view: "icon", id: "addGroupBtn", icon: "mdi mdi-plus-circle-outline"},
                {view: "icon", icon: "mdi mdi-sort", popup: "sort_Popup"}
            ]
        },
        {
            view: "list",
            id: "listGroup",
            template: function (obj) {
                return "<div class='listBlock'><div class='listName'>" + obj.id + ". " + obj.name + "</div> <div class='listDate'>" + webix.i18n.dateFormatStr(obj.date) + "</div></div> <div class='listBlock'> <div class='listGroup'><div class='listGroupIcon mdi mdi-human-greeting'></div>" + obj.lead + "</div> <div class='listIcon webix_kanban_icon kbi-cogs '></div></div>"
            },
            type: {
                height: 80
            },
            select: true,
            data: groups_data
        }
    ]
};