import {employeeForm} from "/public/js/employee/employeeForm.js";

export let employeeWindow = webix.ui({
    view: "window",
    id: "employees_window",
    width: 400,
    move: true,
    position: "center",
    head: {
        view: "toolbar", padding: {left: 17}, margin: -4, cols: [
            {view: "label", id: "titleE", label: "Нанять сотрудника"},
            {view: "icon", id: "closeEmployeeFormBtn", icon: "mdi mdi-close"}
        ]
    },
    close: true,
    modal: true,
    body: employeeForm
});