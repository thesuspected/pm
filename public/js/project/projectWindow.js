import {projectForm} from "/public/js/project/projectForm.js";

export let projectWindow = {
    view: "window",
    id: "project_window",
    width: 400,
    move: true,
    position: "center",
    head: {
        view: "toolbar", padding: {left: 17}, margin: -4, cols: [
            {view: "label", id: "titleP", label: "Изменить проект"},
            {view: "icon", id: "closeProjectFormBtn", icon: "mdi mdi-close"}
        ]
    },
    close: true,
    modal: true,
    body: projectForm
};