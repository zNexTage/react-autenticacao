import axios from "axios";
import useUserSession from "./useUserSession";

const useHttp = () => {
    const { getToken } = useUserSession();

    const http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
    });

    // add a request interceptor
    http.interceptors.request.use((config) => {
        // do something before request is sent

        const token = getToken();

        if (token) {
            // add authentication token to axios headers.
            config.headers = {
                ...config.headers,
                'Authorization': `Bearer ${token}`
            }
        }

        return config;
    }, (error) => { // called when request fail
        console.log(`Interceptor fail: ${error}`);

        return Promise.reject(error);
    })

    return http;
}

export default useHttp;