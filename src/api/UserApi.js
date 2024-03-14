import useFetch from "../hooks/useFetch";
import { axiosInstance } from "./axiosInstance";


const createUserApi = (data) => axiosInstance.post("/user/register", data)

const loginApi = async (data) => axiosInstance.post("/auth/login", data)

const getUserByIdApi = async (id) => axiosInstance.get(`/user/${id}`)

const updateUserApi = async (data) => axiosInstance.put("/user/update", data)

const GetAdminListApi = () => useFetch("/user/all/admin")

const getStudentListApi = () => axiosInstance.get("/user/all/student")

const uploadProfileImgApi = async (data) => axiosInstance.post("/user/upload/profile", data)

export {
    loginApi,
    createUserApi,
    getUserByIdApi,
    updateUserApi,
    GetAdminListApi,
    getStudentListApi,
    uploadProfileImgApi
}