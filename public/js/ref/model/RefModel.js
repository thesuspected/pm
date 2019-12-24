export const RefModel = {

    getPos: () => {
        return fetch('/positions', {method: 'GET'})
            .then(response => response.json())
    }
};