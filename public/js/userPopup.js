export let userPopup = {
    view: "popup",
    id: "user_Popup",
    width: 140,
    body: {
        view: "menu",
        id: "userMenu",
        data: [
            {view: "button", id:"profile", value: "Профиль", icon: "mdi mdi-account"},
            {view: "button", id:"logout", value: "Выйти", icon: "mdi mdi-logout"}
        ],
        layout: "y",
        autoheight: true
    }
};