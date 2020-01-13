export let signUp = {
    header: "Регистрация",
    body: {
        view: 'form',
        id: 'signUpForm',
        elements:[
            {
                margin: 10,
                cols: [
                    {view: 'text', name:'lastName', placeholder: 'Фамилия'},
                    {view: 'text', name:'firstName', placeholder: 'Имя'}
                ]
            },
            {
                cols: [
                    {view: 'datepicker', name: 'date', placeholder: 'Дата рождения'}
                ]
            },
            {
                cols: [
                    {view: 'icon', icon: 'mdi mdi-email'},
                    {view: 'text', name: 'email', placeholder: 'Почта'}
                ]
            },
            {
                cols: [
                    {view: 'icon', icon: 'mdi mdi-account'},
                    {view: 'text', name: 'user', placeholder: 'Логин'}
                ]
            },
            {
                cols: [
                    {view: 'icon', icon: 'mdi mdi-lock'},
                    {view: 'text', type: 'password', name: 'pass', placeholder: 'Пароль', labelWidth: 130}
                ]
            },
            {
                cols: [
                    {view: 'icon', icon: 'mdi mdi-lock-plus'},
                    {view: 'text', type: 'password', name: 'pass2', placeholder: 'Пароль повторно', labelWidth: 130}
                ]
            },
            {
                margin: 10,
                cols: [
                    {view: 'button', id: 'enterReg', value: 'Регистрация', css: 'webix_primary'}
                ]
            }
        ],
        rules:{
            "lastName":webix.rules.isNotEmpty,
            "firstName":webix.rules.isNotEmpty,
            "date":webix.rules.isNotEmpty,
            "email":webix.rules.isEmail,
            "user":webix.rules.isNotEmpty,
            "pass":webix.rules.isNotEmpty,
            "pass2":webix.rules.isNotEmpty
        }
    }
};