import useFetch from "../hooks/useFetch";
import { axiosInstance } from "./axiosInstance";

const GetAllBranch = () => useFetch("/branch/all")
const getAllBranch = (data) => axiosInstance.post("/branches/getAll",data)

const createBranch = (data) => axiosInstance.post("/branches/add", data)

const updateBranchApi = (data)=> axiosInstance.put("/branches/update", data)

const deleteBranchApi = (id) => axiosInstance.delete(`/branches/delete`,{
    data : {
        id : id
    }
})
export {
    GetAllBranch,
    createBranch,
    getAllBranch,
    updateBranchApi,
    deleteBranchApi
}