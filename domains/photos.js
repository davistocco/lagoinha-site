const getPhotos = () => new Promise((resolve, reject) => {
    const urls = [
        '/images/pray-carousel/IMG_01.jpg',
        '/images/pray-carousel/IMG_02.jpg',
        '/images/pray-carousel/IMG_03.jpg',
        '/images/pray-carousel/IMG_04.jpg',
        '/images/pray-carousel/IMG_05.jpg',
        '/images/pray-carousel/IMG_06.jpg',
        '/images/pray-carousel/IMG_07.jpg',
        '/images/pray-carousel/IMG_08.jpg',
        '/images/pray-carousel/IMG_09.jpg',
        '/images/pray-carousel/IMG_10.jpg',
        '/images/pray-carousel/IMG_11.jpg',
        '/images/pray-carousel/IMG_12.jpg',
        '/images/pray-carousel/IMG_13.jpg',
        '/images/pray-carousel/IMG_14.jpg',
        '/images/pray-carousel/IMG_15.jpg',
        '/images/pray-carousel/IMG_16.jpg',
        '/images/pray-carousel/IMG_17.jpg',
        '/images/pray-carousel/IMG_18.jpg',
        '/images/pray-carousel/IMG_19.jpg',
        '/images/pray-carousel/IMG_20.jpg',
        '/images/pray-carousel/IMG_21.jpg',
    ];
    resolve(urls.map(url => ({ url })));
});

export { getPhotos }