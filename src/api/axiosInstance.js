import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//const baseURL = "http://3.126.250.198:8000//api";
const baseURL = "https://localhost:7006/api";

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use((config) => {
    /* const token = localStorage.getItem("authToken");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    } */

    //console.log(config)
    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 401) {
            if (window.location.pathname !== "/giris") {
                window.location.href = "/giris"
            }
            localStorage.removeItem("authToken");
        }

        /* try {
            const message = error?.response?.data?.message;
            toast.error(
                Array.isArray(message)
                    ? message[0]
                    : message || "Bir şeyler yanlış gitti. Lütfen tekrar deneyin."
            );
        } catch (e) {
            toast.error("Bir şeyler yanlış gitti. Lütfen tekrar deneyin.");
        } */
        else {
            return Promise.reject(error)
        }

    }
);

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

export { axiosInstance, fetcher };
