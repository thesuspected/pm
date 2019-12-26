export const EmployeeModel = {

    getAll: () => {
        return fetch('/employee', {method: 'GET'})
            .then(response => response.json())
    },

    get: (Id) => {
        return fetch(`/employee/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getFk: (Id) => {
        return fetch(`/employeeFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getByGroup: (Id) => {
        return fetch(`/employeeByGroup/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getByGroupFk: (Id) => {
        return fetch(`/employeeByGroupFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    updateGroup: (employee) => {
        return fetch(`/employeeUpdateGroup/${employee.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(employee)})
            .then(response => response.json())
    },

    deleteFromGroup: (Id) => {
        return fetch(`/employeeDeleteGroup/${Id}`, {method: 'POST'})
            .then(response => response.json())
    },

    create: (employee) => {
        return fetch('/employee', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(employee)})
            .then(response => response.json())
    },

    delete: (Id) => {
        return fetch(`/employee/${Id}`, {method: 'DELETE'})
            .then(response => response.json())
    },

    update: (employee) => {
        return fetch(`/employee/${employee.group}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(employee)})
            .then(response => response.json())
    }
}