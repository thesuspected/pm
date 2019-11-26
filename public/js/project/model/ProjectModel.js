export const ProjectModel = {

    getAll: () => {
        return fetch('/project', {method: 'GET'})
            .then(response => response.json())
    },
}