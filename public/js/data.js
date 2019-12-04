let projects_data = [
    {name: "Webix", date: new Date(2019, 8, 14), group: "Developers", id: 1},
    {name: "Верстка проекта", date: new Date(2019, 6, 25), group: "Designers", id: 2},
    {name: "Базы данных", date: new Date(2019, 5, 1), group: "dbEngineers", id: 3},
];

let projectPopup_data = [
    {id: 1, name: "Редактировать", value: "edit"},
    {id: 2, name: "Удалить", value: "delete"}
];

let kanban_data = [
    {id: 1, status: "Новые", text: "Task 1", tags: [1, 2]},
    {id: 2, status: "В работе", text: "Task 2", tags: [1], color: 3, user_id: 4},
    {id: 3, status: "В работе", text: "Task 3", tags: [2, 4, 5], user_id: 6},
    {id: 4, status: "В работе", text: "Task 4", tags: [3], user_id: 5},
    {id: 5, status: "В работе", text: "Task 5", tags: [3, 4]},
    {id: 6, status: "Выполнено", text: "Task 6", tags: [4, 5, 6, 7], user_id: 2},
    {id: 7, status: "На проверку", text: "Task 7", tags: [1], user_id: 7},
    {id: 8, status: "На проверку", text: "Task 8", tags: [7], user_id: 4},
    {id: 9, status: "На проверку", text: "Task 9", tags: [6], user_id: 2},
    {id: 10, status: "На проверку", text: "Task 10", tags: [1], user_id: 1},
    {id: 11, status: "В работе", text: "Task 11", tags: [2], user_id: 8},
    {id: 12, status: "Выполнено", text: "Task 12", user_id: 8},
    {id: 13, status: "Новые", text: "Task 14", user_id: 8}
];

let sort_data = [
    {id: "1", name: "По порядку", value: "id"},
    {id: "2", name: "По имени", value: "name"},
    {id: "3", name: "По дате", value: "date"}
];

let imagePath = "https://docs.webix.com/samples/63_kanban/common/imgs/";
let users_set = [
    {
        id: 1,
        value: "Rick Lopes",
        position: "Руководитель отдела",
        image: imagePath + "1.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 2,
        value: "Martin Farrell",
        position: "Junior programmist",
        image: imagePath + "2.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 3,
        value: "Douglass Moore",
        position: "Менеджер",
        image: imagePath + "3.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 4,
        value: "Eric Doe",
        position: "Ведущий проекта",
        image: imagePath + "4.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 5,
        value: "Sophi Elliman",
        position: "Секретарь",
        image: imagePath + "5.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 6,
        value: "Anna O'Neal",
        position: "Аналитик",
        image: imagePath + "6.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 7,
        value: "Marcus Storm",
        position: "Тестировщик",
        image: imagePath + "7.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 8,
        value: "Nick Branson",
        position: "Дизайнер",
        image: imagePath + "8.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    },
    {
        id: 9,
        value: "CC",
        position: "Верстальщик",
        image: imagePath + "9.jpg",
        date: new Date(2019, 3, 1),
        mail: "exampleemail@gmail.com"
    }
];

let tags_set = [
    {id: 1, value: "webix"},
    {id: 2, value: "docs"},
    {id: 3, value: "hard"},
    {id: 4, value: "easy"},
    {id: 5, value: "go"},
    {id: 6, value: "database"},
    {id: 7, value: "need help"},
];

let colors_set = [
    {id: 2, value: "Стандартная", color: "#1CA1C1"},
    {id: 3, value: "Важная", color: "orange"},
    {id: 4, value: "Срочная", color: "red"},
];

let projectGroup_data = [
    {value: "Без группы"},
    {value: "Designers"},
    {value: "Developers"},
    {value: "dbEngineers"}
];

let groups_data = [
    {date: new Date(2019, 3, 1), name: "Не назначенные", lead: "", id: 1},
    {date: new Date(2019, 5, 24), name: "Developers", lead: "Rick Lopes", id: 2},
    {date: new Date(2019, 6, 25), name: "Designers", lead: "Sophi Elliman", id: 3},
    {date: new Date(2019, 8, 1), name: "dbEngineers", lead: "Marcus Storm", id: 4},
];

let positions = [
    {value: "Руководитель отдела"},
    {value: "Junior programmist"},
    {value: "Менеджер"},
    {value: "Ведущий проекта"},
    {value: "Секретарь"},
    {value: "Аналитик"},
    {value: "Тестировщик"},
    {value: "Дизайнер"},
    {value: "Верстальщик"}
]

export {
    projects_data,
    projectPopup_data,
    colors_set,
    kanban_data,
    projectGroup_data,
    sort_data,
    tags_set,
    users_set,
    groups_data,
    positions
};