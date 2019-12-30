export const TaskModel = {

    getAll: (Id) => {
        return fetch(`/projects/${Id}/tasks`, {method: 'GET'})
            .then(response => response.json())
    },

    // get: (Id) => {
    //     return fetch(`/project/${Id}`, {method: 'GET'})
    //         .then(response => response.json())
    // },

    // getFk: (Id) => {
    //     return fetch(`/projectFk/${Id}`, {method: 'GET'})
    //         .then(response => response.json())
    // },

    create: (task) => {
        return fetch(`/projects/${task.project}/tasks/`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task)})
            .then(response => response.json())
    },

    delete: (Id, project) => {
        return fetch(`/projects/${project}/tasks/${Id}`, {method: 'DELETE'})
            .then(response => response.json())
    },

    update: (task) => {
        return fetch(`/projects/${task.project}/tasks/${task.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(task)})
            .then(response => response.json())
    },

    getTags: (Id, project) => {
        return fetch(`/projects/${project}/tasks/${Id}/tags`, {method: 'GET'})
            .then(response => response.json())
    }
}