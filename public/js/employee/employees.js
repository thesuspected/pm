
export let employees = {
    gravity: 0.37,
    rows: [
        {
            view: "toolbar",
            padding: {left: 10},
            margin: -4,
            elements: [
                {view: "label", label: "Все сотрудники"},
                {view: "icon", id: "addEmployeeBtn", icon: "mdi mdi-plus-circle-outline", tooltip:"Добавить сотрудника"},
                {view: "text", placeholder: "поиск...", id: "search", hidden: true},
                {view: "icon", id: "openSearchBtn", icon: "mdi mdi-magnify", tooltip:"Поиск"},
                {view: "icon", id: "closeSearchBtn", icon: "mdi mdi-close", hidden: true}
            ]
        },
        {
            view: "list",
            id: "listEmployees",
            css: "listEmployees",
            template: function (obj) {
                return "<img class='listImg pad' src='./public/img/employees/" + obj.imgSrc + "'></img><div class='listBlock2'><div class='listName pad'>" + obj.lastName + " " + obj.firstName + " " + obj.patronymic + "</div></div> <div class='listBlock2'> <div class='listPos pad'>" + obj.position + "</div></div>"
            },
            type: {
                height: 80
            },
            select: true,
            drag:"source"
        }
    ]
};