import {users_set} from '/public/js/data.js';

export let groupTable = {
    view: "datatable",
    id: "groupsTable",
    columns: [
        {id: "id", header: "№", adjust:true},
        {id: "image", header: "<div class='dataIcon mdi mdi-account-circle'></div>", template: "<img src='/public/img/employees/#imgSrc#' class='dataImg'>", width: 50},
        {id: "lastName", header: "Фамилия", adjust:true},
        {id: "firstName", header: "Имя", adjust:true},
        {id: "patronymic", header: "Отчество", fillspace:true},
        {id: "position", header: "Должность", adjust:true},
        {id: "date", header: "Дата рожд.", template: function (obj) {return "<div>" + webix.i18n.dateFormatStr(new Date(obj.date)) + "</div>"}, width:105},
        {id: "email", header: "Почта", adjust:true},
    ],
    select: true,
    drag:"move"
    //data: users_set
};