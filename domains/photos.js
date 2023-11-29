const getPhotos = () => new Promise((resolve, reject) => {
    const urls = [
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaA_I0mGpUhilP8ccSNGEoMP6JHMAOST6BE1yuLnTURFgOevswYTlPxH7OU65j62ma8UmCVuNbFk_S6yrYr1us3tS3JuVQ=w1366-h619',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaDQeQQUvK5-RE0rJ5YeCoHrHDF8PiYqK4gVE3Q29d2ulrCgSenYVmumhECPlijQHKmF8lIUg8qUQfCXVcUAsYl_RrmSKQ=w1366-h619',
        'https://lh3.googleusercontent.com/u/0/drive-viewer/AK7aPaAb5A4tYKZAlUUEpJ9UMGWe-m3Eux2gPhXRBPK6DAvaVgHy6KolTOalTRfOfHiQEv2AwKRvJoNP8x1JQcsEDOqiHm5TCg=w1366-h619',
    ];
    return urls.map(url => ({ url }));
});

export {
    getPhotos
}