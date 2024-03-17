import React from 'react'
import { Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap'
import * as yup from "yup"
import { toast } from 'react-toastify';
import { UserOperationClaimApi, createUserApi } from '../../api/UserApi';
import { useFormik } from 'formik';

const today = new Date();
const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
const eightyYearsAgo = new Date(today.getFullYear() - 80, today.getMonth(), today.getDate());

const testv = {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "tc": "string",
    "gender": "string",
    "adress": "string",
    "phone": "string",
    "birthDate": "2024-03-17T10:07:16.934Z"
}
const CreateStudentForm = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            tc: "",
            email: "",
            phone: "",
            birthDate: "",
            gender: "erkek",
            adress: ""
        },
        validationSchema: yup.object({
            email: yup.string().email().required(),
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            phone: yup.string()
                .matches(/^(\d{11})$/, "Geçerli bir Türkiye telefon numarası girin") // Türkiye telefon numarası formatı (Başında 0 ve 10 rakam)
                .required("Telefon numarası boş bırakılamaz"),
            tc: yup
                .string()
                .length(11, "T.C. Kimlik Numarası 11 haneli olmalıdır.")
                .matches(/^[0-9]+$/, "T.C. Kimlik Numarası sadece rakamlardan oluşmalıdır.")
                .required("T.C. Kimlik Numarası boş bırakılamaz."),
            birthDate: yup.date().max(eighteenYearsAgo, 'You must be at least 18 years old.').min(eightyYearsAgo, 'You must be at most 80 years old.').required("Doğum Tarihi Seçiniz"),
            adress: yup.string().required().max(1000)
        }),
        onSubmit: async (value, { resetForm }) => {
            try {
                const { birthDate, ...rest } = value
                console.log("valuee ==>", value)
                const response = await createUserApi({
                    ...rest,
                    birthDate : new Date(birthDate).toUTCString()
                })
                console.log("resp ?=>",response.data)
                await UserOperationClaimApi({
                    id : response.data.data.userOperationClaimId,
                    userId : response.data.data.userId,
                    operationClaimId : 3
                })
                console.log("response ==>", response)
                toast.success("Öğrenci kayıt edildi", {
                    autoClose: 1000
                })
               /*  resetForm() */
            }
            catch (err) {
                console.log("err =>", err)
                toast.error(err.message, {
                    autoClose: 1500
                })
            }

        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <Col lg={6}>
                    <div className="mb-3">
                        <Label htmlFor="firstnameInput" className="form-label">
                            İsim
                        </Label>
                        <Input type="text" className="form-control" id="name" name='firstName'
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
                <Col lg={4}>
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
                <Col lg={4}>
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

                <Col lg={4}>
                    <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                            Cinsiyet
                        </Label>
                        <select className='form-control' value={formik.values.gender} name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} >
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
                    <div className="mb-3">
                        <Label htmlFor="adress" className="form-label">
                            Address
                        </Label>
                        <Input type="textarea" className="form-control "
                            style={{ resize: "none" }}
                            placeholder='Adres'
                            name='adress'
                            value={formik.values.adress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            invalid={
                                formik.touched.adress && formik.errors.adress ? true : false
                            }
                        />
                        {formik.touched.adress && formik.errors.adress ? (
                            <FormFeedback type="invalid"><div>{formik.errors.adress}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="hstack gap-2 justify-content-end">
                        <button type="submit"
                            className="btn btn-primary">
                            Onayla
                        </button>
                    </div>
                </Col>



            </Row>
        </Form>
    )
}

export default CreateStudentForm