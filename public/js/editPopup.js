import {projectPopup_data,} from '/public/js/data.js';

export let editPopup = {
    view: "popup",
    id: "edit_Popup",
    width: 150,
    body: {
        view: "menu",
        id: "editPopup_List",
        data: projectPopup_data,
        layout: "y",
        template: "#name#",
        autoheight: true,
    }
};