export const GroupModel = {

    getAll: () => {
        return fetch('/group', {method: 'GET'})
            .then(response => response.json())
    },

    get: (Id) => {
        return fetch(`/group/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getFk: (Id) => {
        return fetch(`/groupFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    create: (group) => {
        return fetch('/group', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(group)})
            .then(response => response.json())
    },

    delete: (Id) => {
        return fetch(`/group/${Id}`, {method: 'DELETE'})
            .then(response => response.json())
    },

    update: (group) => {
        return fetch(`/group/${group.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(group)})
            .then(response => response.json())
    }
}