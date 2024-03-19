import { axiosInstance } from "./axiosInstance";

const getAllCourseByStatusApi = () => axiosInstance.post(`/Courses/GetAll`, {
    page: 0,
    pageSize: 10
})

const GetAllForRegisteredStudentAndTeacher = (data) => axiosInstance.post("/courses/GetAllForRegisteredStudentAndTeacher", data)


const getDetailCourseApi = (id) => axiosInstance.get(`/course/${id}`)

const updateCourseApi = (data) => axiosInstance.put("/course", data)

const createCourseApi = (data) => axiosInstance.post("/course/create", data, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

const addCourseAdministrators = (data) => axiosInstance.post("/CourseAdministrators/Add", data)

const deleteCourseApi = (data) => axiosInstance.delete("/course/delete", {
    data: {
        ...data
    }
})

const deleteCourseSendEmailApi = (id) => axiosInstance.post(`/course/${id}`)


const deleteDocumentApi = (data) => axiosInstance.delete("/course/document", {
    data: {
        ...data
    }
})

const addPhotoApi = (data) => axiosInstance.post("/course/photo", data, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})


const addDocumentApi = (data) => axiosInstance.post("/course/document", data, {
    headers: {
        "Content-Type": "multipart/form-data"
    }
})

const deletePhotoApi = (data) => axiosInstance.delete(`/course/photo`, {
    data: {
        ...data
    }
})
const updateCourseProgramApi = (data) => axiosInstance.post("/course/program", data)


const deleteAnnouncementApi = (data) => axiosInstance.delete("/course/announcement", {
    data: {
        ...data
    }
})


const createAnnouncementApi = (data) => axiosInstance.post("/course/announcement", data)

const updateAnnouncementApi = (data) => axiosInstance.put("/course/announcement", data)


export {
    getAllCourseByStatusApi,
    getDetailCourseApi,
    createCourseApi,
    updateCourseApi,
    deleteCourseApi,
    deleteCourseSendEmailApi,
    addDocumentApi,
    addPhotoApi,
    deleteDocumentApi,
    deletePhotoApi,
    updateCourseProgramApi,
    deleteAnnouncementApi,
    createAnnouncementApi,
    updateAnnouncementApi,
    addCourseAdministrators,
    GetAllForRegisteredStudentAndTeacher
}