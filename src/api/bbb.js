import { axiosInstance } from "./axiosInstance";


const createCourseDatesApi = (data) => axiosInstance.post("/coursedates/add", data)


export {
    createCourseDatesApi
}