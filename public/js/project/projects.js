import {projects_data} from '/public/js/data.js';
export let projects = {
    rows:[
        {
            view:"toolbar",
            padding:{left:10},
            margin:-4,
            elements:[
                {view:"label", label:"Проекты"},
                {view:"icon", id:"addProjectBtn", icon:"mdi mdi-plus-circle-outline"},
                {view:"icon", icon:"mdi mdi-sort", popup:"sort_Popup"}
            ]
        },
        // список проектов
        {
            view:"list",
            id:"listProject",
            template:function(obj){
                return "<div class='listBlock'><div class='listName'>" + obj.id + ". " + obj.name + "</div> <div class='listDate'>" + webix.i18n.dateFormatStr(obj.date) + "</div></div> <div class='listBlock'> <div class='listGroup'><div class='listGroupIcon mdi mdi-account-group'></div>" + obj.group + "</div> <div class='listIcon webix_kanban_icon kbi-cogs '></div></div>"
            },
            type: {
                height:80
            },
            select:true,
            data: projects_data
        }
    ]
};