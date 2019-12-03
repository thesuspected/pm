export const ProjectModel = {

    getAll: () => {
        return fetch('/project', {method: 'GET'})
            .then(response => response.json())
    },

    create: (project) => {
        return fetch('/project', {method: 'PUT', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project)})
            .then(response => response.json())
    },
}