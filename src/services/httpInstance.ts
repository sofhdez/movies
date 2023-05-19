import axios from "axios";
import Config from "config";
import exp from "constants";

// Static config, only run once
const httpInstance = axios.create({
    baseURL: Config.API_URL,
});

// Dynamic config, run every time before request is sent
// Request interceptor for API calls
httpInstance.interceptors.request.use(
    async (config) => {
        const newConfig = { ...config };
        // newConfig.headers.Authorization = `Bearer ${jwtToken}`;
        // newConfig.headers["X-Version"] = "1.0.0";
        // newConfig.headers["X-Signature"] = demoToken;
        return newConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor for API calls
httpInstance.interceptors.response.use(
    (response) => {
        // To all responses, return only the data
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default httpInstance;