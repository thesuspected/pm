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

    // create: (group) => {
    //     return fetch('/group', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(group)})
    //         .then(response => response.json())
    // },
    //
    // delete: (Id) => {
    //     return fetch(`/group/${Id}`, {method: 'DELETE'})
    //         .then(response => response.json())
    // },
    //
    // update: (group) => {
    //     return fetch(`/group/${group.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(group)})
    //         .then(response => response.json())
    // }
}