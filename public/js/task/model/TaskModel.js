export const TaskModel = {

    getAll: (Id) => {
        return fetch(`/projects/${Id}/tasks`, {method: 'GET'})
            .then(response => response.json())
    },

    // get: (Id) => {
    //     return fetch(`/project/${Id}`, {method: 'GET'})
    //         .then(response => response.json())
    // },
    //
    // getFk: (Id) => {
    //     return fetch(`/projectFk/${Id}`, {method: 'GET'})
    //         .then(response => response.json())
    // },
    //
    // create: (project) => {
    //     return fetch('/project', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project)})
    //         .then(response => response.json())
    // },
    //
    // delete: (Id) => {
    //     return fetch(`/project/${Id}`, {method: 'DELETE'})
    //         .then(response => response.json())
    // },
    //
    // update: (project) => {
    //     return fetch(`/project/${project.id}`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project)})
    //         .then(response => response.json())
    // }
}