import {projectGroup_data} from '/public/js/data.js';
export let projectForm = {
    view:"form",
    id:"project_Form",
    rules:{
        "name":webix.rules.isNotEmpty
    },
    elements:[
        { view:"text", label:"Название", labelPosition:"top", name:"name"},
        { margin:10, cols: [
                { view:"datepicker", value: new Date(), label: "Дата", labelPosition:"top", name:"date" },
                { view:"select", margin:20, label:"Пр. группа", options:projectGroup_data, labelPosition:"top", name:"group"}
            ]},
        { margin:10, cols:[
                { view:"button", id:"dltProjectFormBtn", width:111, value:"Удалить"},
                {},
                { view:"button", id:"saveProjectFormBtn", width:111, value:"Сохранить", css:"webix_primary"},
            ]}
    ]
};