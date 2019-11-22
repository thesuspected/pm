import {projectPopup_data,} from '/public/js/data.js';

export let projectPopup = {
    view: "popup",
    id: "project_Popup",
    width: 150,
    body: {
        view: "menu",
        id: "projectPopup_List",
        data: projectPopup_data,
        layout: "y",
        template: "#name#",
        autoheight: true,
    }
};