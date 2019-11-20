export let sidebar = {
    view:"sidebar",
    id:"sidebar",
    collapsed:true,
    width: 150,
    data:[
        { id:"tasks", value:"Задачи", icon:"mdi mdi-calendar-check", click: () => {window.location.replace("/");} },
        { id:"employees", value:"Сотрудники", icon:"mdi mdi-account-group" , click: () => {window.location.replace("/employees");}}
    ]
};