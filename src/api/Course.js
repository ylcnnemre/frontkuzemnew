import { axiosInstance } from "./axiosInstance";

const getAllCourseByStatusApi = (data) => axiosInstance.post(`/Courses/GetAll`, data)

const GetAllForRegisteredTeacher = (data) => axiosInstance.post("/courses/GetAllForRegisteredTeacher", data)

const CourseAdminListGetAll = (data) => axiosInstance.post("/CourseAdministrators/GetAll", data)

const createCourseApi = (data) => axiosInstance.post("/courses/add", data)

const CourseRegisterStudentApi = (data) => axiosInstance.post("/courseRegisters/GetAllForStudent", data)

const CourseMeetingsForStudentApi = (data, courseId) => axiosInstance.post(`/courseDates/getAllCalendarForCourse?courseId=${courseId}`, data)

const getAllForRegistredUser = (data, courseId) => axiosInstance.post(`/OnlineCourseUrls/GetAllForRegistredUser?courseId=${courseId}`, data)

const getDetailCourseApi = (id) => axiosInstance.get(`/course/${id}`)

const updateCourseApi = (data) => axiosInstance.put("/course", data)

const registerCourseApi = (data) => axiosInstance.post("/CourseRegisters/Add", data)

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
    GetAllForRegisteredTeacher,
    CourseAdminListGetAll,
    registerCourseApi,
    CourseRegisterStudentApi,
    CourseMeetingsForStudentApi,
    getAllForRegistredUser
}