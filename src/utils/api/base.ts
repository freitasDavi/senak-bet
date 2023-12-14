import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { getState, setState } from "../../stores/AuthStore";

export const api = axios.create({
    baseURL: "http://localhost:8080/api"
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
        const refreshTokenSalvo = getState().refreshToken;

        if (refreshTokenSalvo) {
            console.log(refreshTokenSalvo);
            try {
                // const response = await api.post("/auth/refreshtoken", {
                //     refreshToken: refreshTokenSalvo
                // });

                const { accessToken, refreshToken } = response.data;

                setState(({
                    token: accessToken,
                    refreshToken: refreshToken
                }));

                api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;

                return api(originalRequest);

            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
})