import React, { FC, useEffect, useMemo, useState } from 'react'
import { Button, Col, Form, FormFeedback, Input, Label, Nav, Row, TabContent, TabPane } from 'reactstrap'
import "./index.scss"


const AddCourseDetailTab = ({ formik }) => {

    const years = useMemo(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        const yearArray = [];
        for (let year = currentYear; year >= startYear; year--) {
            yearArray.push(year);
        }
        return yearArray;
    }, []);

    return (
        <Form onSubmit={formik.handleSubmit} >
            <Row>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            İsim
                        </Label>
                        <Input placeholder='isim' type="text" className="form-control" id="name" name='name'
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

                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Kontenjan
                        </Label>
                        <Input
                            value={formik.values.limit}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            placeholder='Kontenjan'
                            name='limit'
                            invalid={formik.touched.limit && formik.errors.limit ? true : false}
                            type='number' />
                        {formik.touched.limit && formik.errors.limit ? (
                            <FormFeedback type="invalid"><div>{formik.errors.limit}</div></FormFeedback>
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

                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Dönem
                        </Label>
                        <select onChange={formik.handleChange} className={`form-control ${formik.touched.semester && formik.errors.semester ? 'is-invalid' : ''} `} value={formik.values.semester} onBlur={formik.handleBlur} name="semester" id="semester">
                            <option value="2024 yaz">
                                2024 yaz
                            </option>
                            {/*  {
                                                semesterList.map((el, index) => {
                                                    return (
                                                        <option key={`${index}`} value={el._id}  >
                                                            {el.name}
                                                        </option>
                                                    )
                                                })
                                            } */}
                        </select>
                        {formik.touched.semester && formik.errors.semester ? (
                            <FormFeedback type="invalid"><div>{formik.errors.semester}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Aktiflik
                        </Label>
                        <select onChange={formik.handleChange} className={`form-control ${formik.touched.type && formik.errors.type ? 'is-invalid' : ''} `} value={formik.values.type} onBlur={formik.handleBlur} name="type" id="type">
                            <option value="">
                                Seçim Yapınız
                            </option>
                            {
                                ["aktif", "pasif"].map((el, index) => {
                                    return (
                                        <option value={el} key={`${index}`} >
                                            {el}
                                        </option>
                                    )
                                })

                            }
                        </select>
                        {formik.touched.type && formik.errors.type ? (
                            <FormFeedback type="invalid"><div>{formik.errors.type}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Cinsiyet
                        </Label>
                        <select onChange={formik.handleChange} className={`form-control ${formik.touched.genderType && formik.errors.genderType ? 'is-invalid' : ''} `} value={formik.values.genderType} onBlur={formik.handleBlur} name="genderType" id="genderType">
                            <option value="">
                                Seçim Yapınız
                            </option>
                            {
                                ["erkek", "kadın", "hepsi"].map((el, index) => {
                                    return (
                                        <option value={el} key={`${index}`} >
                                            {el}
                                        </option>
                                    )
                                })

                            }
                        </select>
                        {formik.touched.genderType && formik.errors.genderType ? (
                            <FormFeedback type="invalid"><div>{formik.errors.genderType}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Yaş Şartı (Başlangıç Yılı)
                        </Label>
                        <select onChange={formik.handleChange} className={`form-control ${formik.touched.startYear && formik.errors.startYear ? 'is-invalid' : ''} `} value={formik.values.startYear} onBlur={formik.handleBlur} name="startYear" id="startYear">
                            <option value="">
                                Seçim Yapınız
                            </option>
                            {
                                years.map((el, index) => {
                                    return (
                                        <option value={el} key={`${index}`} >
                                            {el}
                                        </option>
                                    )
                                })

                            }
                        </select>
                        {formik.touched.startYear && formik.errors.startYear ? (
                            <FormFeedback type="invalid"><div>{formik.errors.startYear}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={4}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Yaş Şartı (Bitiş Yılı)
                        </Label>
                        <select onChange={formik.handleChange} className={`form-control ${formik.touched.endYear && formik.errors.endYear ? 'is-invalid' : ''} `} value={formik.values.endYear} onBlur={formik.handleBlur} name="endYear" id="endYear">
                            <option value="">
                                Seçim Yapınız
                            </option>
                            {
                                years.map((el, index) => {
                                    return (
                                        <option value={el} key={`${index}`} >
                                            {el}
                                        </option>
                                    )
                                })

                            }
                        </select>
                        {formik.touched.endYear && formik.errors.endYear ? (
                            <FormFeedback type="invalid"><div>{formik.errors.endYear}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <Col lg={12}>
                    <div className="mb-3">
                        <Label className="form-label">
                            Açıklama
                        </Label>
                        <Input value={formik.values.description}
                            onBlur={formik.handleBlur}
                            invalid={formik.touched.description && formik.errors.description ? true : false}
                            onChange={formik.handleChange}
                            name='description' id='description' type='textarea'
                            rows={2} style={{ resize: "none" }} />

                        {formik.touched.description && formik.errors.description ? (
                            <FormFeedback type="invalid"><div>{formik.errors.description}</div></FormFeedback>
                        ) : null}
                    </div>
                </Col>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
                    <Button style={{ padding: "7px 40px" }}  onClick={()=>{
                        formik.handleSubmit()
                    }} >
                        Kaydet
                    </Button>
                </div>
            </Row>

        </Form>
    )
}

export default AddCourseDetailTab