const getPhotos = () => new Promise((resolve, reject) => {
    const urls = [
        '/images/pray-carousel/IMG_01.jpg',
    ];
    resolve(urls.map(url => ({ url })));
});

export { getPhotos }