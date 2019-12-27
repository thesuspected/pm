export const ProjectModel = {

    getAll: () => {
        return fetch('/projects', {method: 'GET'})
            .then(response => response.json())
    },

    get: (Id) => {
        return fetch(`/projects/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    getFk: (Id) => {
        return fetch(`/projectsFk/${Id}`, {method: 'GET'})
            .then(response => response.json())
    },

    create: (project) => {
        return fetch('/projects', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project)})
            .then(response => response.json())
    },

    delete: (Id) => {
        return fetch(`/projects/${Id}`, {method: 'DELETE'})
            .then(response => response.json())
    },

    update: (project) => {
        return fetch(`/projects/${project.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project)})
            .then(response => response.json())
    }
}