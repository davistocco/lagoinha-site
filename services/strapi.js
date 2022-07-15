import axios from "axios"

const config = {
    url: process.env.NEXT_PUBLIC_STRAPI_URL + '/api',
    token: process.env.NEXT_PUBLIC_STRAPI_TOKEN
}

const strapi = axios.create({
    baseURL: config.url,
    headers: {
        'Authorization': 'Bearer ' + config.token
    }
})

export default strapi;