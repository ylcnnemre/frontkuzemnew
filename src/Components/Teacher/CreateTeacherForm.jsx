import React, { FC, useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { Col, FormFeedback, Input, Label, Row, Form } from 'reactstrap'
import { toast } from 'react-toastify'
import { GetAllBranch, getAllBranch } from '../../api/Branch'
import { UserContext } from '../../context/user'
import { createUserApi } from '../../api/UserApi'
import { Select } from 'antd'
import "./index.scss"
const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());

const CreateTeacherForm = () => {
    const [state, dispatch] = useContext(UserContext)
    const [branches, setBranch] = useState([])
    const formik = useFormik({
        initialValues: {
            birthDate: "",
            email: "",
            gender: "erkek",
            adress: "",
            firstName: "",
            phone: "",
            lastName: "",
            tc: "",
            branch: []
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            adress: yup.string().required(),
            phone: yup.string()
                .matches(/^(\d{11})$/, "Geçerli bir Türkiye telefon numarası girin") // Türkiye telefon numarası formatı (Başında 0 ve 10 rakam)
                .required("Telefon numarası boş bırakılamaz"),
            /* branch: yup.string().required("Branş seçimi zorunludur"), */
            tc: yup
                .string()
                .length(11, "T.C. Kimlik Numarası 11 haneli olmalıdır.")
                .matches(/^[0-9]+$/, "T.C. Kimlik Numarası sadece rakamlardan oluşmalıdır.")
                .required("T.C. Kimlik Numarası boş bırakılamaz."),
            birthDate: yup.date().max(eighteenYearsAgo, 'You must be at least 18 years old.').min(eightyYearsAgo, 'You must be at most 80 years old.').required("Doğum Tarihi Seçiniz"),
            branch: yup.array().min(1, "En az bir adet seçmelisiniz")
        }),
        onSubmit: async (value, { resetForm }) => {
            try {
                const { birthDate, ...rest } = value
                console.log("vale => ", value)
                await createUserApi({
                    ...rest,
                    RoleId: 2,
                    birthDate: new Date(birthDate).toUTCString(),
                    branches: value.branch.map(el => {
                        return {
                            branchId: el
                        }
                    })
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

    const fetchBranches = async () => {
        try {
            const branches = await getAllBranch({
                page: 0,
                pageSize: 100
            });
            console.log("branch => ", branches.data)
            setBranch(branches.data.items);
        } catch (err) {
            console.error("Error fetching branches:", err);
        }
    };


    useEffect(() => {
        fetchBranches()
    }, [])

    return (
        <div className='' >
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <Label htmlFor="firstnameInput" className="form-label">
                                İsim
                            </Label>
                            <Input type="text" className="form-control" id="firstName" name='firstName'
                                placeholder='isim'
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
                                placeholder="Soyisim" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}
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
                            <Input type="text" className="form-control "
                                placeholder='Tc No'
                                name='tc'
                                value={formik.values.tc}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                invalid={
                                    formik.touched.tc && formik.errors.tc ? true : false
                                }
                            />
                            {formik.touched.tc && formik.errors.tc ? (
                                <FormFeedback type="invalid"><div>{formik.errors.tc}</div></FormFeedback>
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
                            <Select
                                mode='multiple'
                                className='branch_select'
                                allowClear
                                style={{ width: "100%" }}
                                options={branches.map(el => {
                                    return {
                                        value: el.id,
                                        label: el.name
                                    }
                                })}
                                onChange={(value) => {
                                    formik.setFieldValue('branch', value); // Formik değerini güncelle
                                }}
                                onBlur={formik.handleBlur}
                                value={formik.values.branch}
                            />
                            {formik.touched.branch && formik.errors.branch ? (
                                <div className="invalid-feedback d-block">
                                    {formik.errors.branch}
                                </div>
                            ) : null}
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="mb-3">
                            <Label htmlFor="emailInput" className="form-label">
                                Adress
                            </Label>
                            <Input className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.adress} type='textarea' name='adress' style={{ resize: "none" }} />
                            {formik.touched.adress && formik.errors.adress ? (
                                <div className="invalid-feedback d-block">
                                    {formik.errors.adress}
                                </div>
                            ) : null}
                        </div>
                    </Col>
                    {/*   <Col lg={6}>
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
                    </Col> */}

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