export const EmployeeModel = {

    getAll: () => {
        return fetch('/employeess', {method: 'GET'})
            .then(response => response.json())
    },

    getEmp: () => {
        return fetch('/employeesEmp', {method: 'GET'})
            .then(response => response.json())
    },

    get: (Id) => {
        return fetch(`/employees/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getFk: (Id) => {
        return fetch(`/employeesFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getByGroup: (Id) => {
        return fetch(`/employeesByGroup/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getByGroupFk: (Id) => {
        return fetch(`/employeesByGroupFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    updateGroup: (employee) => {
        return fetch(`/employeesUpdateGroup/${employee.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(employee)})
            .then(response => response.json())
    },

    deleteFromGroup: (Id) => {
        return fetch(`/employeesDeleteGroup/${Id}`, {method: 'POST'})
            .then(response => response.json())
    },

    create: (employee) => {
        return fetch('/employees', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(employee)})
            .then(response => response.json())
    },

    delete: (Id) => {
        return fetch(`/employees/${Id}`, {method: 'DELETE'})
            .then(response => response.json())
    },

    update: (employee) => {
        return fetch(`/employees/${employee.group}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(employee)})
            .then(response => response.json())
    },

    login: (encoded) => {
        return fetch(`/login`, {method: 'POST', headers: {'Content-Type': 'text'}, body: encoded})

    },

    logout: () => {
        return fetch(`/logout`, {method: 'POST'})

    },
};