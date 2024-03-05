import React, { FC, useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Col, FormFeedback, Input, Label, Row, Form } from 'reactstrap'
import { toast } from 'react-toastify'
import { GetAllBranch } from '../../api/Branch'
import { UserContext } from '../../context/user'
import { createUserApi } from '../../api/UserApi'

const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());

const CreateTeacherForm = () => {
    const { data, isLoading } = GetAllBranch()
    const [state, dispatch] = useContext(UserContext)
    console.log("sta =>", state)
    const formik = useFormik({
        initialValues: {
            birthDate: "",
            email: "",
            gender: "erkek",
            name: "",
            phone: "",
            surname: "",
            tcNo: "",
            branch: ""
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            name: yup.string().required(),
            surname: yup.string().required(),
            phone: yup.string()
                .matches(/^(\d{10})$/, "Geçerli bir Türkiye telefon numarası girin") // Türkiye telefon numarası formatı (Başında 0 ve 10 rakam)
                .required("Telefon numarası boş bırakılamaz"),
            branch: yup.string().required("Branş seçimi zorunludur"),
            tcNo: yup
                .string()
                .length(11, "T.C. Kimlik Numarası 11 haneli olmalıdır.")
                .matches(/^[0-9]+$/, "T.C. Kimlik Numarası sadece rakamlardan oluşmalıdır.")
                .required("T.C. Kimlik Numarası boş bırakılamaz."),
            birthDate: yup.date().max(eighteenYearsAgo, 'You must be at least 18 years old.').min(eightyYearsAgo, 'You must be at most 80 years old.').required("Doğum Tarihi Seçiniz"),

        }),
        onSubmit: async (value, { resetForm }) => {
            try {
                const { gender, ...rest } = value
                await createUserApi({
                    ...rest,
                    gender: gender,
                    role: "teacher",
                    userId: state._id
                })
                toast.success("Öğretmen kayıt edildi", {
                    autoClose: 1500
                })
                resetForm()
            }
            catch (err) {
                console.log("err =>", err)
                toast.error(err.response.data.message, {
                    autoClose: 1500
                })
            }

        }
    })
    console.log("formik ==>=", formik.errors)
    return (
        <div className='' >
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="firstnameInput" className="form-label">
                                İsim
                            </Label>
                            <Input type="text" className="form-control" id="name" name='name'
                                placeholder='isim'
                                value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                invalid={
                                    formik.touched.name && formik.errors.name ? true : false
                                }
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <FormFeedback type="invalid"><div>{formik.errors.name}</div></FormFeedback>
                            ) : null}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="lastnameInput" className="form-label">
                                Soyisim
                            </Label>
                            <Input type="text" className="form-control" id="surname"
                                placeholder="Soyisim" name='surname' value={formik.values.surname} onChange={formik.handleChange} onBlur={formik.handleBlur}
                                invalid={
                                    formik.touched.surname && formik.errors.name ? true : false
                                }
                            />
                            {formik.touched.surname && formik.errors.surname ? (
                                <FormFeedback type="invalid"><div>{formik.errors.surname}</div></FormFeedback>
                            ) : null}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="phonenumberInput" className="form-label">
                                Tc No
                            </Label>
                            <Input type="text" className="form-control "
                                placeholder='Tc No'
                                name='tcNo'
                                value={formik.values.tcNo}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                invalid={
                                    formik.touched.tcNo && formik.errors.tcNo ? true : false
                                }
                            />
                            {formik.touched.tcNo && formik.errors.tcNo ? (
                                <FormFeedback type="invalid"><div>{formik.errors.tcNo}</div></FormFeedback>
                            ) : null}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="phonenumberInput" className="form-label">
                                Doğum Tarihi
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
                            {formik.touched.birthDate && formik.errors.birthDate ? (
                                <FormFeedback type="invalid"><div>{formik.errors.birthDate}</div></FormFeedback>
                            ) : null}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="phonenumberInput" className="form-label">
                                Telefon
                            </Label>
                            <Input type="text" className="form-control"
                                placeholder='Phone'
                                onChange={formik.handleChange}
                                id="phone"
                                onBlur={formik.handleBlur}
                                name='phone'
                                invalid={
                                    formik.touched.phone && formik.errors.phone ? true : false
                                }
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <FormFeedback type="invalid"><div>{formik.errors.phone}</div></FormFeedback>
                            ) : null}
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label ">Email</Label>
                            <Input type="email" className="form-control"
                                name='email'
                                placeholder='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                invalid={
                                    formik.touched.email && formik.errors.email ? true : false
                                }
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <FormFeedback type="invalid"><div>{formik.errors.email}</div></FormFeedback>
                            ) : null}
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
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">
                                Branş
                            </Label>
                            <select className={`form-control ${formik.touched.branch && formik.errors.branch ? 'is-invalid' : ''} `} value={formik.values.branch} onChange={formik.handleChange} onBlur={formik.handleBlur} name="branch" id="branch">
                                <option value="">
                                    Seçim Yapınız
                                </option>
                                {
                                    data?.map((el, index) => {
                                        return (
                                            <option key={`${index}`} value={el.name}>
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

                    <Col lg={12}>
                        <div className="hstack gap-2 justify-content-end">
                            <button type="submit"
                                className="btn btn-primary">
                                Ekle
                            </button>
                        </div>
                    </Col>



                </Row>
            </Form>
        </div>

    )
}

export default CreateTeacherForm