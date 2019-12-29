export let tasks = {
    type:"wide",
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
                {
                    view: "list",
                    id:"spisok",
                    select:true,
                    drag:"move",
                    type:{
                        templateStart:"<div webix_l_id='#id#' class='kanban_item webix_list_item'>",
                        template: function (obj) {
                            return "<div class=\"webix_kanban_body\">"+ obj.name+" <div class=\"webix_kanban_user_avatar\" webix_icon_id=\"$avatar\"><span class=\"webix_icon webix_kanban_icon kbi-account\" title=\"\"></span></div></div><div class='block'><div class='listGroup'><div class='listGroupIcon'></div>" + obj.name + "</div> <div class='listIcon kanban_icon webix_kanban_icon kbi-cogs '></div></div></div>"
                        },
                        templateEnd:"</div>"
                    },
                    data:[
                        {id: 1, name:'11'},
                        {id: 2, name:'22'},
                        {id: 3, name:'33'},
                        {id: 4, name:'44'},
                    ]
                }
            ]
        },
        {
            header: "<span class='webix_icon mdi mdi-briefcase-outline'></span>В работе",
            body: {
                view: "list",
                id:"spisok",
                select:true,
                drag:"move",
                type:{
                    templateStart:"<div webix_l_id='#id#' class='kanban_item webix_list_item'>",
                    template: function (obj) {
                        return "<div class=\"webix_kanban_body\">"+ obj.name+" <div class=\"webix_kanban_user_avatar\" webix_icon_id=\"$avatar\"><span class=\"webix_icon webix_kanban_icon kbi-account\" title=\"\"></span></div></div><div class='block'><div class='listGroup'><div class='listGroupIcon'></div>" + obj.name + "</div> <div class='listIcon kanban_icon webix_kanban_icon kbi-cogs '></div></div></div>"
                    },
                    templateEnd:"</div>"
                },
                data:[
                    {id: 1, name:'11'},
                    {id: 2, name:'22'},
                    {id: 3, name:'33'},
                    {id: 4, name:'44'},
                ]
            }
        },
        {
            header: "<span class='webix_icon mdi mdi-alert-rhombus-outline'></span>На проверку",
            body: {
                view: "list",
                id:"spisok",
                select:true,
                drag:"move",
                type:{
                    templateStart:"<div webix_l_id='#id#' class='kanban_item webix_list_item'>",
                    template: function (obj) {
                        return "<div class=\"webix_kanban_body\">"+ obj.name+" <div class=\"webix_kanban_user_avatar\" webix_icon_id=\"$avatar\"><span class=\"webix_icon webix_kanban_icon kbi-account\" title=\"\"></span></div></div><div class='block'><div class='listGroup'><div class='listGroupIcon'></div>" + obj.name + "</div> <div class='listIcon kanban_icon webix_kanban_icon kbi-cogs '></div></div></div>"
                    },
                    templateEnd:"</div>"
                },
                data:[
                    {id: 1, name:'11'},
                    {id: 2, name:'22'},
                    {id: 3, name:'33'},
                    {id: 4, name:'44'},
                ]
            }
        },
        {
            header: "<span class='webix_icon mdi mdi-check'></span>Выполнено",
            body: {
                view: "list",
                id:"spisok",
                select:true,
                drag:"move",
                type:{
                    templateStart:"<div webix_l_id='#id#' class='kanban_item webix_list_item'>",
                    template: function (obj) {
                        return "<div class=\"webix_kanban_body\">"+ obj.name+" <div class=\"webix_kanban_user_avatar\" webix_icon_id=\"$avatar\"><span class=\"webix_icon webix_kanban_icon kbi-account\" title=\"\"></span></div></div><div class='block'><div class='listGroup'><div class='listGroupIcon'></div>" + obj.name + "</div> <div class='listIcon kanban_icon webix_kanban_icon kbi-cogs '></div></div></div>"
                    },
                    templateEnd:"</div>"
                },
                data:[
                    {id: 1, name:'11'},
                    {id: 2, name:'22'},
                    {id: 3, name:'33'},
                    {id: 4, name:'44'},
                ]
            }
        }
    ]
};