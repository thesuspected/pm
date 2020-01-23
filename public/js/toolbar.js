export let toolbar = {
    view: "toolbar",
    id: "toolbar",
    height: 50,
    elements: [
        {view: "icon", id: "toggleIcon", icon: "mdi mdi-menu"},
        {
            view: "template",
            type: "clean",
            template: "<img src='./public/img/list.svg' class='icon' alt='logo'>",
            width: 40
        },
        {view: "label", label: "Project Manager"},
        {},
        {
            type: 'clean',
            id: "userBtn",
            template: function (obj) {
                if (obj.user === undefined) {
                    return null
                } else {
                    return "<div id='userPop' class='headUser'><img src='/public/img/employees/" + obj.imgSrc + "' class='headImg'><span class='headSpan'>" + obj.lastName + "</span></div>"
                }
            },
            tooltip: "Аккаунт"
        },
        {view: "icon", id: "themeBtn", icon: "mdi mdi-settings", tooltip: "Тема"}
    ]
};