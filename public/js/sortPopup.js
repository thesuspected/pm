import {sort_data} from '/public/js/data.js';
export let sortPopup = {
    view: "popup",
    id: "sort_Popup",
    width: 150,
    body: {
        view: "list",
        id: "sortPopup_List",
        data: sort_data,
        template: "#name#",
        autoheight: true,
        select: true,
        // on: {
        //     onSelectChange: function () {
        //         let value = this.getSelectedItem().value;
        //         sortProject(value);
        //     }
        // }
    }
};