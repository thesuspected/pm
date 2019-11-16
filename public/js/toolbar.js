export let toolbar = {
    view:"toolbar",
    height:50,
    elements:[
        { view:"icon", icon:"mdi mdi-menu", click: function(){$$("sidebar").toggle()} },
        { view:"template", type:"clean", template:"<img src='./public/img/list.svg' class='icon' alt='logo'>", width:40},
        { view:"label", label:"Project Manager"},
        {},
        { view:"icon", icon:"mdi mdi-account-circle"},
        { view:"icon", icon:"mdi mdi-bell", badge:3 },
        { view:"icon", icon:"mdi mdi-settings" }
    ]
};