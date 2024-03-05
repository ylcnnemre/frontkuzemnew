import { axiosInstance } from "./axiosInstance"

const getAllSemesterApi = () => axiosInstance.get("/semester/all")
const createSemesterApi = (body) => axiosInstance.post("/semester", body)
const updateSemesterApi = (body) => axiosInstance.put("/semester", body)
export {
    getAllSemesterApi,
    updateSemesterApi,
    createSemesterApi
}