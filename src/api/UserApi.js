
import useFetch from "../hooks/useFetch";
import { axiosInstance } from "./axiosInstance";


const createUserApi = (data) => axiosInstance.post("/users/add", data)

const loginApi = async (data) => axiosInstance.post("/auth/login", data)

const UserOperationClaimApi = (data) => axiosInstance.put("/UserOperationClaims/Update", data)

const getUserByIdApi = async (id) => axiosInstance.get(`/users/GetById/${id}`)

const updateUserApi = async (data) => axiosInstance.put("/users/update", data)

const GetAdminListApi = () => useFetch("/user/all/admin")

const getUserListApi = ({
    page,
    pageSize,
    roleId
  }) => axiosInstance.post(`/users/getAll?roleId=${roleId}`,{page,pageSize})

const getDynamicUserSearchApi=(body,query) => axiosInstance.post(`/users/getAllByDynamic?Page=${query.page}&PageSize=${query.pageSize}`,body)

const changePasswordApi =(data) => axiosInstance.put("/users/updatepassword",data)



const uploadProfileImgApi = async (data) => axiosInstance.post("/user/upload/profile", data)

export {
    loginApi,
    createUserApi,
    getUserByIdApi,
    updateUserApi,
    GetAdminListApi,
    getUserListApi,
    uploadProfileImgApi,
    UserOperationClaimApi,
    changePasswordApi,
    getDynamicUserSearchApi
}