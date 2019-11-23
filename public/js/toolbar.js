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
        {view: "icon", icon: "mdi mdi-account-circle", tooltip:"аккаунт"},
        {view: "icon", icon: "mdi mdi-bell", badge: 3},
        {view: "icon", icon: "mdi mdi-settings"}
    ]
};