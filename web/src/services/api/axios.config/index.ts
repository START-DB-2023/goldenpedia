import axios from 'axios';
import { responseInterceptor } from './ResponseInterceptor';
import { errorInterceptor } from './ErrorInterceptor';

const Api = axios.create({
    baseURL: 'http://localhost:8080'
});

Api.interceptors.response.use(
    response => responseInterceptor(response),
    error => errorInterceptor(error)
);

export { Api };