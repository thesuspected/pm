import {projectGroup_data, positions} from '/public/js/data.js';
export let employeeForm = {
    view:"form",
    id:"employees_Form",
    rules:{
        "name":webix.rules.isNotEmpty
    },
    elements:[
        // фото + фио, должность
        {
            margin:10,
            cols:[
                {
                    template:"Фото"
                },
                {
                    rows:[
                        { view:"text", label:"ФИО", labelPosition:"top", name:"name" },
                        { view:"datepicker", value: new Date(), label: "Дата", labelPosition:"top", name:"date" }

                    ]
                }
            ]
        },
        {
            margin:10,
            cols: [
                { view:"select", label:"Группа", options:projectGroup_data, labelPosition:"top", name:"group" },
                { view:"select", label:"Должность", options:positions, labelPosition:"top", name:"position" }
            ]
        },
        {
            margin:10,
            cols:[
                { view:"button", id:"dltProjectBtn", width:111, value:"Уволить" },
                {},
                { view:"button", value:"Нанять", width:111, css:"webix_primary"},
            ]
        }
    ]
};