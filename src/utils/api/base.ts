import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getState, setState } from "../../stores/AuthStore";

export const api = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL
})

api.interceptors.request.use(
    async config => {
        const authToken = getState().token;

        config.headers.Authorization = `Bearer ${authToken}`;
        config.headers.Accept = "application/json";
        config.headers["Content-Type"] = ["application/json"];

        return config;
    },
    error => Promise.reject(error)
)

api.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    if (error instanceof AxiosError && error.response?.status === 401) {
        const originalRequest = error.config as InternalAxiosRequestConfig;
        const refreshToken = getState().refreshToken;

        if (refreshToken) {
            try {
                const response = await api.post("/auth/refreshtoken", {
                    refreshToken
                });

                const { bearer, refresh } = response.data;

                setState(({
                    token: bearer,
                    refreshToken: refresh
                }));

                api.defaults.headers["Authorization"] = `Bearer ${bearer}`;

                return api(originalRequest);

            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
})