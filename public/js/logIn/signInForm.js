export let signIn = {
    header: "Вход",
    body: {
        view: 'form',
        id: 'signInForm',
        elements:[
            {
                cols: [
                    {view: 'icon', icon: 'mdi mdi-account'},
                    {view: 'text', id: 'login', name: 'user', placeholder: 'Логин'}
                ]
            },
            {
                cols: [
                    {view: 'icon', icon: 'mdi mdi-lock'},
                    {view: 'text', type: 'password', id: 'password', name: 'pass', placeholder: 'Пароль'}
                ]
            },
            {
                margin: 10,
                cols: [
                    {view: 'button', id: 'forgot', value: 'Забыли пароль?', css:'forgotPass', gravity: 1.5},
                    {view: 'button', id: 'enter', value: 'Войти', css: 'webix_primary'}
                ]
            }
        ],
        rules:{
            "user":webix.rules.isNotEmpty,
            "pass":webix.rules.isNotEmpty
        }
    }
};