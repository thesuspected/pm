export let toolbar = {
    view: "toolbar",
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
        {type: 'clean', template: "<div id='userPop' class='headUser'><img src='/public/img/employees/1.png' class='headImg'><span class='headSpan'>Мищенко А.</span></div>", tooltip: "Аккаунт"},
        //{view: "icon", icon: "mdi mdi-bell", badge: 3},
        {view: "icon", id: "themeBtn", icon: "mdi mdi-settings", tooltip: "Тема"}
    ]
};