export let themePopup = {
    view: "popup",
    id: "theme_Popup",
    width: 145,
    body: {
        rows: [
            { view: "switch", label:"Тема", id:"theme", labelWidth:60, labelAlign: 'center', onLabel: "Dark", offLabel:"Light", value: 0 },
            { view: "switch", label:"Тени", id:"shadow", labelWidth:60, labelAlign: 'center', onLabel: "On", offLabel:"Off", value: 0 }
        ]
    }
};