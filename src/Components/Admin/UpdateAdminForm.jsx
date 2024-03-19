import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Permission } from '../constants/permission';
import { PropagateLoader } from 'react-spinners';
import { useFormik } from 'formik';
import * as yup from "yup"
import { toast } from 'react-toastify';
import { getUserByIdApi, updateUserApi } from '../../api/UserApi';
import { cityList } from '../constants/cityList';
import Select from "react-select"
import { Col, Form, FormFeedback, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());

const UpdateAdminForm = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [region, setRegion] = useState([])
    const [activeTab, setActiveTab] = useState(1)
    const permissionOptions = useMemo(() => {
        return [
            {
                label: "Öğrenci Düzenle",
                value: Permission.STUDENT_EDIT,
            },
            {
                label: "Öğrenci Silme",
                value: Permission.STUDENT_DELETE
            },
            {
                label: "Öğrenci Ekle",
                value: Permission.STUDENT_ADD
            },
            {
                label: "Eğitmen Düzenleme",
                value: Permission.TEACHER_EDIT
            },
            {
                label: "Eğitmen Silme",
                value: Permission.TEACHER_DELETE
            },
            {
                label: "Eğitmen Ekle",
                value: Permission.TEACHER_ADD
            },
            {
                label: "Kurs Düzenle",
                value: Permission.COURSE_EDIT
            },
            {
                label: "Kurs Sil",
                value: Permission.COURSE_DELETE
            },
            {
                label: "Kurs Ekle",
                value: Permission.COURSE_ADD
            },
            {
                label: "Branş Düzenle",
                value: Permission.BRANCH_EDIT
            },
            {
                label: "Branş Ekle",
                value: Permission.BRANCH_ADD
            },
            {
                label: "Branş Sil",
                value: Permission.BRANCH_DELETE
            },
            {
                label: "Dönem Ekle",
                value: Permission.SEMESTER_ADD
            },
            {
                label: "Dönem Düzenle",
                value: Permission.SEMESTER_EDIT,
            },
            {
                label: "Dönem Sil",
                value: Permission.SEMESTER_DELETE
            }
        ]

    }, [])
    const setAdminProfileData = async (data) => {
        try {
            const { profileImg, birthDate, branch, permission, ...rest } = data
            Object.entries(rest).map(([key, val]) => {
                if (key != "address") {
                    formik.setFieldValue(key, val)
                }
            })
            console.log("data => ", data)
            const formatBirthDate = new Date(birthDate).toISOString().split('T')[0];
            formik.setFieldValue('birthDate', formatBirthDate);

        }
        catch (err) {
            toast.error(err.message, {
                autoClose: 1000
            })
        }
    }
    const apiRequest = async () => {
        try {
            setLoading(true)
            const responseAdmin = await getUserByIdApi(id)
            console.log("responsead ==>", responseAdmin)
            setAdminProfileData(responseAdmin.data)
        }
        catch (err) {
            toast.error(err.message, {
                autoClose: 1000
            })
            /* navigate("/egitmen") */
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        apiRequest()
    }, [id])


    const formik = useFormik({
        initialValues: {
            _id: "",
            birthDate: "",
            email: "",
            gender: "erkek",
            firstName: "",
            phone: "",
            lastName: "",
            tc: "",
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            phone: yup.string(),
            birthDate: yup.date().max(eighteenYearsAgo, 'You must be at least 18 years old.').min(eightyYearsAgo, 'You must be at most 80 years old.').required("Doğum Tarihi Seçiniz"),

        }),
        onSubmit: async (value) => {
            try {
                const { city, region, postalCode, email, phone, tc: tcNo, role, courses, permission, ...rest } = value
                console.log("vall =>", value)
                let response = await updateUserApi({
                    ...rest,
                    permission: permission.map(el => el.value),
                    address: {
                        city,
                        region,
                        postalCode,
                        additionalInfo: ""
                    }
                })
                toast.success("güncelleme başarılı", {
                    autoClose: 1500
                })
            }
            catch (err) {
                console.log("err =>>", err)
                toast.error(err.response.data.message, {
                    autoClose: 1500
                })
            }
        }
    })




    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} >
                <PropagateLoader color="#36d7b7" />
            </div>
        )
    }

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={`${activeTab == 1 && "active"}`}
                        onClick={() => {
                            setActiveTab(1)
                        }}
                    >
                        Bilgiler
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={`${activeTab == 2 && "active"}`}
                        onClick={() => {
                            setActiveTab(2)
                        }}
                    >
                        İşlemler
                    </NavLink>
                </NavItem>

            </Nav>
            <TabContent activeTab={activeTab} style={{ paddingTop: "20px" }} >
                <TabPane tabId={1} >
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="firstnameInput" className="form-label">
                                        İsim
                                    </Label>
                                    <Input type="text" className="form-control" id="name" name='name'
                                        value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                        invalid={
                                            formik.touched.firstName && formik.errors.firstName ? true : false
                                        }
                                    />
                                    {formik.touched.firstName && formik.errors.firstName ? (
                                        <FormFeedback type="invalid"><div>{formik.errors.firstName}</div></FormFeedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="lastnameInput" className="form-label">
                                        Soyisim
                                    </Label>
                                    <Input type="text" className="form-control" id="surname"
                                        placeholder="Soyadı" name='surname' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                        invalid={
                                            formik.touched.lastName && formik.errors.firstName ? true : false
                                        }
                                    />
                                    {formik.touched.lastName && formik.errors.lastName ? (
                                        <FormFeedback type="invalid"><div>{formik.errors.lastName}</div></FormFeedback>
                                    ) : null}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="phonenumberInput" className="form-label">
                                        Tc No
                                    </Label>
                                    <Input type="text" className="form-control disabled-input"
                                        value={formik.values.tc}
                                        disabled
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="phonenumberInput" className="form-label">
                                        Doğum tarihi
                                    </Label>
                                    <Input
                                        name="birthDate"
                                        type="date"
                                        placeholde1r="Doğum Tarihi"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.birthDate}
                                        invalid={
                                            formik.touched.birthDate && formik.errors.birthDate ? true : false
                                        }
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="phonenumberInput" className="form-label">
                                        Telefon
                                    </Label>
                                    <Input type="text" className="form-control disabled-input"
                                        disabled
                                        id="phone"
                                        name='phone'
                                        value={formik.values.phone}
                                    />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="emailInput" className="form-label ">Email</Label>
                                    <Input type="email" className="form-control disabled-input"
                                        name='email'
                                        value={formik.values.email}
                                    />
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="mb-3">
                                    <Label htmlFor="emailInput" className="form-label">
                                        Cinsiyet
                                    </Label>
                                    <select className='form-control' value={formik.values.gender} name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} >
                                        <option value="erkek">
                                            erkek
                                        </option>
                                        <option value="kadın">
                                            kadın
                                        </option>
                                    </select>
                                </div>
                            </Col>

                            <Col lg={12}>
                                <div className="hstack gap-2 justify-content-end">
                                    <button type="submit"
                                        className="btn btn-primary">
                                        Güncelle
                                    </button>

                                </div>
                            </Col>



                        </Row>
                    </Form>
                </TabPane>
            </TabContent>

        </>

    )
}

export default UpdateAdminForm


