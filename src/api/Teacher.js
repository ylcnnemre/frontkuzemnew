
import { axiosInstance } from "./axiosInstance"
import useFetch from "../hooks/useFetch"

const GetTeacherListApi = (role) => useFetch(`/user/all/${role}`)

const getTeacherListApi = (id) => axiosInstance.get(`/user/teacher/branch/${id}`)

export {
    GetTeacherListApi,
    getTeacherListApi
}