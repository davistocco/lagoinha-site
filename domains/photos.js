import strapi from "../services/strapi";

const getPhotos = () => new Promise((resolve, reject) => {
    strapi.get('/photo?populate=img')
        .then(response => {
            const photos = response.data.data.attributes.img.data.map(image => ({
                url: process.env.NEXT_PUBLIC_STRAPI_URL + image.attributes.formats.medium.url
            }))

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