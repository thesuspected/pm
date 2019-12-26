export const RefModel = {

    getPos: () => {
        return fetch('/positions', {method: 'GET'})
            .then(response => response.json())
    },

    getPriority: () => {
        return fetch('/priority', {method: 'GET'})
            .then(response => response.json())
    },

    getStatus: () => {
        return fetch('/status', {method: 'GET'})
            .then(response => response.json())
    },

    getTags: () => {
        return fetch('/tags', {method: 'GET'})
            .then(response => response.json())
    },
};