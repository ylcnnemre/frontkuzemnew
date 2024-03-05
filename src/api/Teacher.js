
import { axiosInstance } from "./axiosInstance"
import useFetch from "../hooks/useFetch"

const GetTeacherListApi = (role) => useFetch(`/user/all/${role}`)



export {
    GetTeacherListApi
}