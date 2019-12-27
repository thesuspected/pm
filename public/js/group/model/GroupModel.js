export const GroupModel = {

    getAll: () => {
        return fetch('/groups', {method: 'GET'})
            .then(response => response.json())
    },

    get: (Id) => {
        return fetch(`/groups/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getFk: (Id) => {
        return fetch(`/groupsFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    create: (group) => {
        return fetch('/groups', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(group)})
            .then(response => response.json())
    },

    delete: (Id) => {
        return fetch(`/groups/${Id}`, {method: 'DELETE'})
            .then(response => response.json())
    },

    update: (group) => {
        return fetch(`/groups/${group.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(group)})
            .then(response => response.json())
    }
}