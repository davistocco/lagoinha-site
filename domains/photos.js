import strapi from "../services/strapi";

const getPhotos = () => new Promise((resolve, reject) => {
    strapi.get('/photo?populate=img')
        .then(response => {
            const photos = response?.data?.data?.attributes?.img?.data?.map(image => ({
                url: image.attributes.url
            })) ?? [];

            resolve(photos);
        })
        .catch(error => {
            console.error(error);
            reject(error);
        })
});

export {
    getPhotos
}