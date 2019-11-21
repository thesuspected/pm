import {groupForm} from "/public/js/group/groupForm.js";
export let groupWindow = {
    view:"window",
    id:"groups_window",
    width:500,
    move:true,
    position:"center",
    head:{
        view:"toolbar", padding:{left:17}, margin:-4, cols:[
            { view:"label", id:"titleG", label:"Добавить группу" },
            { view:"icon", icon:"mdi mdi-close", click:function(){
                    $$('groups_window').hide();
                }}
        ]
    },
    close:true,
    modal:true,
    body:groupForm
};