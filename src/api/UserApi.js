import useFetch from "../hooks/useFetch";
import { axiosInstance } from "./axiosInstance";


const createUserApi = (data) => axiosInstance.post("/users/add", data)

const loginApi = async (data) => axiosInstance.post("/auth/login", data)

const UserOperationClaimApi = (data) => axiosInstance.put("/UserOperationClaims/Update", data)

const getUserByIdApi = async (id) => axiosInstance.get(`/users/GetById/${id}`)

const updateUserApi = async (data) => axiosInstance.put("/users/update", data)

const GetAdminListApi = () => useFetch("/user/all/admin")

const getStudentListApi = (data) => axiosInstance.post("/users/getAll",data)

const changePasswordApi =(data) => axiosInstance.put("/users/updatepassword",data)


const uploadProfileImgApi = async (data) => axiosInstance.post("/user/upload/profile", data)

export {
    loginApi,
    createUserApi,
    getUserByIdApi,
    updateUserApi,
    GetAdminListApi,
    getStudentListApi,
    uploadProfileImgApi,
    UserOperationClaimApi,
    changePasswordApi
}