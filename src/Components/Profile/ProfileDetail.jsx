import React, { FC, useEffect, useMemo, useState } from 'react'
import { Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as yup from "yup"
import { updateUserApi } from '../../api/UserApi';
import { cityList } from '../constants/cityList';


const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());

const ProfileDetail = ({ setUser, user }) => {
    const [region, setRegion] = useState([])

    const getUserProfileData = async () => {
        try {

            Object.entries(user).map(([key, val]) => {
                if (key != "adress") {
                    formik.setFieldValue(key, val)
                }
            })
            console.log("user =)> ", user)
            const birthDate = new Date(user.birthDate).toISOString().split('T')[0];
            formik.setFieldValue('birthDate', birthDate);
        }
        catch (err) {
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        getUserProfileData()
    }, [user])


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
            name: yup.string().required(),
            surname: yup.string().required(),
            phone: yup.string(),
            birthDate: yup.date().max(eighteenYearsAgo, 'You must be at least 18 years old.').min(eightyYearsAgo, 'You must be at most 80 years old.').required("Doğum Tarihi Seçiniz"),

        }),
        onSubmit: async (value, { resetForm }) => {
            try {

                let data = await updateUserApi(value)
                setUser({
                    ...user,
                    firstName: value.firstName,
                    lastName: value.lastName,
                    birthDate: value.birthDate,
                    gender: value.gender
                })
                toast.success("Güncelleme Başarılı", {
                    autoClose: 1000
                })
                
            }
            catch (err) {
                toast.error(err.response.data.message, {
                    autoClose: 1000
                })
            }


        }
    })


    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row style={{ marginTop: "15px" }} >
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="firstnameInput" className="form-label">
                            İsim
                        </Label>
                        <Input disabled type="text" className="form-control" id="name" name='name'
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
                        <Input disabled type="text" className="form-control" id="surname"
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
                            Doğum Tarihi
                        </Label>
                        <Input
                            disabled
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
                        <Input type="email" disabled className="form-control disabled-input"
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
                        <select disabled className='form-control' value={formik.values.gender} name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} >
                            <option value="erkek">
                                Erkek
                            </option>
                            <option value="kadın">
                                Kadın
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
    )
}

export default ProfileDetail


