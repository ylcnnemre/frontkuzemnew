import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PropagateLoader } from 'react-spinners'
import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as yup from "yup"
import { Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import { cityList } from "../../constants/cityList"
import { getUserByIdApi, updateUserApi } from '../../../api/UserApi'


const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());

const EditStudentInfoTab = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [region, setRegion] = useState([])


    const setStudentProfileData = async (data) => {
        try {
            console.log("dataa ==> ", data)
            const { profileImg, birthDate, branch, ...rest } = data
            Object.entries(rest).map(([key, val]) => {
                if (key != "address") {
                    formik.setFieldValue(key, val)
                }
                else {
                    const address = val
                    formik.setFieldValue("city", address.city)
                    formik.setFieldValue("postalCode", address.postalCode)
                    if (address.city !== "") {
                        setRegion(cityList.find(item => item.state == address.city)?.region)
                        formik.setFieldValue("region", address.region)
                    }
                }
            })
            const formatBirthDate = new Date(birthDate).toISOString().split('T')[0];
            formik.setFieldValue('birthDate', formatBirthDate);
            formik.setFieldValue("branch", branch?.name)
        }
        catch (err) {
            toast.error(err.response.data.message)
        }
    }

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
                const { birthDate,...rest } = value
                console.log("vall =>", value)
                let response = await updateUserApi({
                    ...rest,
                    birthDate : new Date(birthDate).toUTCString()
                })
                toast.success("güncelleme başarılı", {
                    autoClose: 1000
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

    const apiRequest = async () => {
        try {
            setLoading(true)
            const responseStudent = await getUserByIdApi(id)
            console.log("responseStudent ==>", responseStudent)
            setStudentProfileData(responseStudent.data)
        }
        catch (err) {
            toast.error(err.response.data.message, {
                autoClose: 1000
            })
            navigate("/egitmen")
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        apiRequest()
    }, [id])

    const postalCodeDisableControl = useMemo(() => {
        return formik.values.city == "" || formik.values.region == ""
    }, [formik.values.city, formik.values.region])


    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} >
                <PropagateLoader color="#36d7b7" />
            </div>
        )
    }

    return (
        <Form onSubmit={formik.handleSubmit}  >
            <Row>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="firstnameInput" className="form-label">
                            İsim
                        </Label>
                        <Input type="text" className="form-control" id="firstName" name='firstName'
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
                        <Input type="text" className="form-control" id="lastName"
                            placeholder="Soyadı" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}
                            invalid={
                                formik.touched.lastName && formik.errors.lastName ? true : false
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
                <Col lg={4}>
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
                <Col lg={4}>
                    <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label ">Email</Label>
                        <Input type="email" className="form-control disabled-input"
                            name='email'
                            value={formik.values.email}
                        />
                    </div>
                </Col>

                <Col lg={4}>
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
                            className="btn btn-warning">
                            Güncelle
                        </button>
                        <button type="submit"
                            className="btn btn-danger">
                            Bu Öğrenciyi sil
                        </button>
                    </div>
                </Col>



            </Row>
        </Form>
    )
}

export default EditStudentInfoTab