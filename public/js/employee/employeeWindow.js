import {employeeForm} from "/public/js/employee/employeeForm.js";
export let employeeWindow = webix.ui({
    view:"window",
    id:"employees_window",
    width:400,
    move:true,
    position:"center",
    head:{
        view:"toolbar", padding:{left:17}, margin:-4, cols:[
            { view:"label", id:"titleP", label: "Нанять сотрудника" },
            { view:"icon", icon:"mdi mdi-close", click:function(){
                    $$('employees_window').hide();
                }}
        ]
    },
    close:true,
    modal:true,
    body:employeeForm
});