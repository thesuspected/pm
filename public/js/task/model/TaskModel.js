export const TaskModel = {

    getAll: (Id) => {
        return fetch(`/projects/${Id}/tasks`, {method: 'GET'})
            .then(response => response.json())
    },

    get: (Id, project) => {
        return fetch(`/projects/${project}/tasks/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getFk: (Id, project) => {
        return fetch(`/projects/${project}/tasksFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

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
    },

    createTag: (tag, project) => {
        return fetch(`/projects/${project}/tasks/${tag.id}/tags/${tag.value}`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(tag)})
            .then(response => response.json())
    },

    deleteTag: (tag, project) => {
        return fetch(`/projects/${project}/tasks/${tag.id}/tags/${tag.value}`, {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(tag)})
            .then(response => response.json())
    },

    getAllSub: (Id) => {
        return fetch(`/tasks/${Id}/sub`, {method: 'GET'})
            .then(response => response.json())
    },

    createSub: (sub) => {
        return fetch(`/tasks/${sub.task}/sub`, {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(sub)})
            .then(response => response.json())
    },

    updateSub: (sub) => {
        return fetch(`/tasks/${sub.task}/sub/${sub.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(sub)})
            .then(response => response.json())
    },

    deleteSub: (sub) => {
        return fetch(`/tasks/${sub.task}/sub/${sub.id}`, {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(sub)})
            .then(response => response.json())
    },
}