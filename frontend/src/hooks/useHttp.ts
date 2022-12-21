import axios from "axios";

const useHttp = () => {
    const http = axios.create({
        baseURL: 'http://localhost:8000',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',            
        }
    });

    return http;
}

export default useHttp;