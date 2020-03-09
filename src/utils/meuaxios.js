import axios_instance from 'axios';

const axios = axios_instance.create({
    baseURL: "http://localhost:38000"
})

axios.interceptors.request.use(request => {
    console.log(request);
    return request;
})

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
})

export default axios;