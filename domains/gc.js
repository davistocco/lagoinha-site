import strapi from "../services/strapi"

const getGcs = () => new Promise((resolve, reject) => {
    strapi.get('/gcs')
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        })
});

export {
    getGcs
}