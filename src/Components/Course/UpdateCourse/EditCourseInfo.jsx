import { useFormik } from 'formik';
import React, { FC, useEffect, useState } from 'react'
import { Button, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import * as yup from "yup"
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAllBranch } from '../../../api/Branch';
import { updateCourseApi } from '../../../api/Course';
import { getTeacherListApi } from '../../../api/Teacher';
import { getAllSemesterApi } from '../../../api/SemesterApi';


const EditCourseInfo = ({ data }) => {
    console.log("editInf ==>", data)
    const { id } = useParams()
    const [branchList, setBranchList] = useState([])
    const [teacherList, setTeacherList] = useState([])
    const [semesterList, setSemesterList] = useState([])
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            branch: "meta",
            quota: 0,
            teacher: "",
            startDate: "",
            endDate: "",
            active: "",
            semester: "",
        },
        validationSchema: yup.object({
            title: yup.string().required("Bu alan boş bırakılamaz"),
            description: yup.string().required(),
            branch: yup.string().required(),
            semester: yup.string().required(),
            active: yup.string().required(),
            startDate: yup
                .date()
                .required()
                .test('start-date', 'Başlangıç tarihi bitiş tarihinden önce olmalıdır', function (value) {
                    const endDate = this.parent.endDate;  // Değişiklik burada
                    return !endDate || value < endDate;
                }),
            endDate: yup
                .date()
                .required()
                .test('end-date', 'Bitiş tarihi başlangıç tarihinden sonra olmalıdır', function (value) {
                    const startDate = this.parent.startDate;  // Değişiklik burada
                    return !startDate || value > startDate;
                }),
            quota: yup.number().min(1).required(),
            teacher: yup.string().required()
        }),
        onSubmit: async (value, { resetForm }) => {
            try {
                const response = await updateCourseApi({
                    ...value,
                    courseId: id
                })
                toast.success("Kurs Güncellendi", {
                    autoClose: 1000
                })
            }
            catch (err) {
                err.response.data.message.forEach((el) => {
                    toast.error(el, {
                        autoClose: 1500
                    })
                })

            }

        },

    })


    const changeBranch = (e) => {
        if (e.target.value == "") {
            setTeacherList([])
            formik.handleChange(e)
        } else {
            formik.handleChange(e)
            getTeacherListById(e.target.value)
        }
    }

    const getBranchList = async () => {
        try {
            const branches = await getAllBranch()
            setBranchList(branches.data.map(item => {
                return {
                    id: item._id,
                    name: item.name
                }
            }))
        }
        catch (err) {
            toast.error(`${err.message}`, {
                autoClose: 1500
            })
        }
    }

    const getTeacherListById = async (id) => {
        try {
            const dataList = await getTeacherListApi(id)
            console.log("dataList ==>", dataList)
            setTeacherList(dataList.data)
        }
        catch (err) {
            toast.error(err.message, {
                autoClose: 1500
            })
        }
    }


    const detailCourseApiRequest = async () => {
        try {
            let teacherList = await getTeacherListApi(data.branch._id)
            setTeacherList(teacherList.data)
            let startDate = new Date(data.startDate).toISOString().split('T')[0];
            let endDate = new Date(data.endDate).toISOString().split("T")[0]
            formik.setFieldValue("title", data.title)
            formik.setFieldValue("branch", data.branch._id)
            formik.setFieldValue("teacher", data.teacher?._id)
            formik.setFieldValue("quota", data.quota)
            formik.setFieldValue("description", data.description)
            formik.setFieldValue("startDate", startDate)
            formik.setFieldValue("endDate", endDate)
            formik.setFieldValue("semester", data.semester._id)
            formik.setFieldValue("active", data.active)
        }
        catch (err) {
            console.log("err ==>", err)
            /* navigate("/kurs") */
            toast.error(err.response?.data.message, {
                autoClose: 1500
            })
        }
    }

    const getSemesterAll = async () => {
        try {
            const response = await getAllSemesterApi()
            setSemesterList(response.data)
        }
        catch (err) {
            toast.error(err.message, {
                autoClose: 1000
            })
        }
    }

    useEffect(() => {
        getBranchList()
        detailCourseApiRequest()
        getSemesterAll()
    }, [data])
    return (
        <Form onSubmit={formik.handleSubmit} >
            <Row>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            İsim
                        </Label>
                        <Input placeholder='isim' type="text" className="form-control" id="title" name='title'
                            value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur}
                            invalid={
                                formik.touched.title && formik.errors.title ? true : false
                            }
                        />
                        {formik.touched.title && formik.errors.title ? (
                            <FormFeedback type="invalid"><div>{formik.errors.title}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Branş
                        </Label>
                        <select className={`form-control ${formik.touched.branch && formik.errors.branch ? 'is-invalid' : ''} `} value={formik.values.branch} onChange={changeBranch} onBlur={formik.handleBlur} name="branch" id="branch">
                            <option value="">
                                Seçim Yapınız
                            </option>
                            {
                                branchList.map((el, index) => {
                                    return (
                                        <option key={`${index}`} value={el.id}  >
                                            {el.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {formik.touched.branch && formik.errors.branch ? (
                            <FormFeedback type="invalid"><div>{formik.errors.branch}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Eğitmen
                        </Label>
                        <select className={`form-control ${formik.touched.teacher && formik.errors.teacher ? 'is-invalid' : ''} `} value={formik.values.teacher} onChange={formik.handleChange} onBlur={formik.handleBlur} name="teacher" id="teacher">
                            <option value="">
                                Eğitmen Seçiniz
                            </option>
                            {
                                teacherList.map((item, index) => {
                                    return (
                                        <option key={`${index}`} value={item._id}>
                                            {`${item.name} ${item.surname} `}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {formik.touched.teacher && formik.errors.teacher ? (
                            <FormFeedback type="invalid"><div>{formik.errors.teacher}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Kontenjan
                        </Label>
                        <Input
                            value={formik.values.quota}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder='Kontenjan'
                            name='quota'
                            invalid={formik.touched.quota && formik.errors.quota ? true : false}
                            type='number' />
                        {formik.touched.quota && formik.errors.quota ? (
                            <FormFeedback type="invalid"><div>{formik.errors.quota}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Başlangıç tarihi
                        </Label>

                        <Input
                            name="startDate"
                            type="date"
                            placeholde1r="Başlangıç Tarihi"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.startDate}
                            invalid={
                                formik.touched.startDate && formik.errors.endDate ? true : false
                            }
                        />

                        {formik.touched.startDate && formik.errors.startDate ? (
                            <FormFeedback type="invalid"><div>{formik.errors.startDate}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Bitiş tarihi
                        </Label>
                        <Input
                            name="endDate"
                            type="date"
                            placeholde1r="Bitiş tarihi"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.endDate}
                            invalid={
                                formik.touched.endDate && formik.errors.endDate ? true : false
                            }
                        />

                        {formik.touched.endDate && formik.errors.endDate ? (
                            <FormFeedback type="invalid"><div>{formik.errors.endDate}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Dönem
                        </Label>
                        <select className={`form-control ${formik.touched.semester && formik.errors.semester ? 'is-invalid' : ''} `} value={formik.values.semester} onChange={formik.handleChange} onBlur={formik.handleBlur} name="semester" id="semester">
                            <option value="">
                                Dönem Seçiniz
                            </option>
                            {
                                semesterList.map((item, index) => {
                                    return (
                                        <option key={`${index}`} value={item._id}>
                                            {item.name}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {formik.touched.semester && formik.errors.semester ? (
                            <FormFeedback type="invalid"><div>{formik.errors.semester}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Aktiflik
                        </Label>
                        <select className={`form-control ${formik.touched.active && formik.errors.active ? 'is-invalid' : ''} `} value={formik.values.active} onChange={formik.handleChange} onBlur={formik.handleBlur} name="active" id="active">
                            <option value="">
                                Seçim yapınız
                            </option>
                            {
                                ["aktif", "pasif"].map((item, index) => {
                                    return (
                                        <option key={`${index}`} value={item}>
                                            {item}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        {formik.touched.active && formik.errors.active ? (
                            <FormFeedback type="invalid"><div>{formik.errors.active}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={10}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Açıklama
                        </Label>
                        <Input value={formik.values.description}
                            onBlur={formik.handleBlur}
                            invalid={formik.touched.description && formik.errors.description ? true : false}
                            onChange={formik.handleChange}
                            className="form-control"
                            name='description' id='description' type='textarea'
                            rows={2} style={{ resize: "none" }} />

                        {formik.touched.description && formik.errors.description ? (
                            <FormFeedback type="invalid"><div>{formik.errors.description}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={2}>
                    <div style={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Button style={{ padding: "7px 40px" }} type="submit">
                            Güncelle
                        </Button>
                    </div>
                </Col>

            </Row>

        </Form>
    )
}

export default EditCourseInfo