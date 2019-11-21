import {users_set} from '/public/js/data.js';
export let groupTable = {
    view:"datatable",
    id:"groupsTable",
    columns:[
        { id:"id", header:"№",  width:30},
        { id:"image", header:"<div class='dataIcon mdi mdi-account-circle'></div>", template:"<img src='#image#' class='dataImg'></img>", width: 50},
        { id:"value", header:"ФИО", fillspace:true},
        { id:"position", header:"Должность", width: 160},
        { id:"date", header:"Дата рождения", template:function(obj){return "<div>" + webix.i18n.dateFormatStr(obj.date) + "</div>"}, width: 100},
        { id:"mail", header:"Почта", width: 200},
    ],
    select: true,
    data:users_set
};