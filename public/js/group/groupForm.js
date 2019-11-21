import {users_set} from '/public/js/data.js';
export let groupForm = {
    view:"form",
    id:"groups_Form",
    rules:{
        "name":webix.rules.isNotEmpty
    },
    elements:[
        { view:"text", label:"Название", labelPosition:"top", name:"name"},
        { margin:10, cols: [
                { view:"datepicker", value: new Date(), label: "Дата", labelPosition:"top", name:"date" },
                { view:"select", margin:20, label:"Руководитель", options:users_set, labelPosition:"top", name:"lead"}
            ]},
        {
            view:"multicombo", name:"tags", label:"Сотрудники", labelPosition:"top",
            options:users_set
        },
        { margin:10, cols:[
                { view:"button", id:"dltGroupFormBtn", width:111, value:"Удалить" },
                {},
                { view:"button", value:"Сохранить", width:111, css:"webix_primary" },
            ]}
    ]
};