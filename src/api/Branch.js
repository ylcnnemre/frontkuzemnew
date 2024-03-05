import useFetch from "../hooks/useFetch";
import { axiosInstance } from "./axiosInstance";

const GetAllBranch = () => useFetch("/branch/all")
const getAllBranch = () => axiosInstance.get("/branch/all")

const createBranch = (data) => axiosInstance.post("/branch/create", data)

const updateBranchApi = (data)=> axiosInstance.put("/branch", data)

const deleteBranchApi = (id) => axiosInstance.delete(`/branch/${id}`)
export {
    GetAllBranch,
    createBranch,
    getAllBranch,
    updateBranchApi,
    deleteBranchApi
}