import React, { useMemo, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { Button, Col, FormFeedback, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { createCourseDatesApi } from '../../../api/bbb';
import { Card, Collapse, DatePicker } from 'antd';
import moment from 'moment';
import "./index.scss"
import * as yup from "yup"
import { SlArrowDown } from "react-icons/sl";
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

const TeacherCourseTable = ({ userData, setMeetingAlert }) => {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState("");
    const [createCourseDateModal, setCreateCourseDateModal] = useState({
        courseId: 0,
        show: false,
        duration: 0,
        startTime: ""
    })

    const formik = useFormik({
        initialValues: {
            startDate: "",
            duration: 0
        },
        validationSchema: yup.object({
            startDate: yup.date()
                .required('Başlangıç tarihi zorunludur.')
                .min(new Date(), 'Başlangıç tarihi geçmiş bir tarih olamaz.'),
            duration: yup.number().required("bu alan zorunludur").min(1, "Minimum 1 dakika olmalı").max(60, "Maksimum 60 dakika olmalı")
        }),
        onSubmit: async (value) => {
            try {
                const utcDate = moment.utc(value.startDate).format();
                const response = await createCourseDatesApi({
                    courseId: createCourseDateModal.courseId,
                    duration: value.duration,
                    startTime: utcDate
                })
                setCreateCourseDateModal({
                    show: false,
                    courseId: "",
                    duration: "",
                    startTime: ""
                })
                setMeetingAlert((el) => !el)
                console.log("respone => ", response)
                toast.success("Canlı Kurs Kaydı yapıldı", {
                    autoClose: 1000
                })
            }
            catch (err) {
                toast.error("Bir hata oluştu", {
                    autoClose: 1000
                })
            }


        }
    })

    const customHeader = (title) => {
        return (
            <div style={{ padding: "10px" }} >
                <span style={{ textTransform: "capitalize" }}>{title}</span>
                <span style={{ float: 'right' }}>
                    <SlArrowDown />
                </span>
            </div>
        );
    }

    const convertTrFormat = (date) => {
        const tarih = new Date(date)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        const turkishDate = new Intl.DateTimeFormat('tr-TR', options).format(tarih);

        return turkishDate
    }


    return (
        <>
            <Modal isOpen={createCourseDateModal.show} >
                <ModalHeader>
                    Canlı Kurs Kaydı Oluştur
                </ModalHeader>
                <ModalBody>
                    <div className='course_date_time' >
                        <Label>
                            Başlangıç Zamanı
                        </Label>
                        <DatePicker
                            onBlur={formik.handleBlur}
                            showTime

                            allowClear={false}
                            onChange={(e) => {
                                const startDateValue = e.toISOString();
                                formik.setFieldValue("startDate", startDateValue);
                                formik.setFieldTouched("startDate", true); // Form alanının dokunulduğunu işaretleme
                                formik.setFieldError("startDate", "")
                            }}
                        />
                        {formik.touched.startDate && formik.errors.startDate ? (
                            <div style={{ color: "#F38972", marginTop: "5px" }} >
                                {formik.errors.startDate}
                            </div>

                        ) : null}
                    </div>
                    <Label htmlFor="phonenumberInput" className="form-label">
                        Süre
                    </Label>
                    <Input
                        name="duration"
                        type="number"
                        placeholde1r="Süre"
                        value={formik.values.duration}
                        onBlur={formik.handleBlur}
                        invalid={
                            formik.touched.duration && formik.errors.duration ? true : false
                        }
                        onChange={(e) => {
                            formik.setFieldValue("duration", e.target.value)
                        }}
                    />
                    {formik.touched.duration && formik.errors.duration ? (
                        <FormFeedback type="invalid"><div>{formik.errors.duration}</div></FormFeedback>
                    ) : null}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => {
                        formik.handleSubmit()
                        /* createCourse() */
                    }} >
                        Onayla
                    </Button>
                    <Button className="btn btn-danger" onClick={() => {
                        setCreateCourseDateModal({
                            courseId: "",
                            duration: 0,
                            show: false,
                            startTime: ""
                        })
                    }} >
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>
            {
                userData.map(el => {
                    return (
                        <Collapse style={{ marginTop: "30px" }} expandIcon={({ isActive }) => {
                            return null
                        }} >
                            <Collapse.Panel header={customHeader(el.name)} key="1">
                                <Row>
                                    <Col lg={4}   >
                                        <div className='course_card_item' >
                                            <Label className='course_card_item_title'>
                                                Açıklama
                                            </Label>
                                            <p>
                                                {el.description}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={4} >
                                        <div className='course_card_item' >
                                            <Label className='course_card_item_title'>
                                                Kurs Başlangıç Tarihi
                                            </Label>
                                            <p>
                                                {convertTrFormat(el.startDate)}
                                            </p>
                                        </div>

                                    </Col>
                                    <Col lg={4} >
                                        <div className='course_card_item'  >
                                            <Label className='course_card_item_title' >
                                                Kurs Bitiş Tarihi
                                            </Label>
                                            <p>
                                                {convertTrFormat(el.endDate)}
                                            </p>
                                        </div>

                                    </Col>
                                    <Col lg={4} >
                                        <div className='course_card_item mt-3'  >
                                            <Label className='course_card_item_title' >
                                                Dönem
                                            </Label>
                                            <p>
                                                {el.semester}
                                            </p>
                                        </div>
                                    </Col>
                                    <Col lg={4} >
                                        <div className='course_card_item mt-3'  >
                                            <Label className='course_card_item_title' >
                                                Kontenjan
                                            </Label>
                                            <p>
                                                {el.limit}
                                            </p>
                                        </div>

                                    </Col>
                                    <Col lg={4} >
                                        <div className='create_courseDate_container mt-3'>
                                            <Button onClick={() => {
                                                setCreateCourseDateModal({
                                                    ...createCourseDateModal,
                                                    courseId: el.id,
                                                    show: true
                                                })
                                            }}   >
                                                Canlı Kurs Kaydı Oluştur
                                            </Button>
                                        </div>

                                    </Col>
                                </Row>
                            </Collapse.Panel>
                        </Collapse>
                    )
                })
            }


            {/* <Row className="mb-2">
                <Col lg={2}>
                    <Input
                        width={"%50"}
                        type="text"
                        placeholder="Arama yap..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Col>
            </Row> */}

            {/* <DataTable
                data={filteredData}
                columns={columns}
                pagination

                noDataComponent={
                    <Card className="w-100 p-5">
                        <center>
                            <h2>Herhangi bir veri bulunamadı.</h2>
                        </center>
                    </Card>
                }
                paginationComponentOptions={{
                    rowsPerPageText: "Satır Sayısı",
                    rangeSeparatorText: "-",
                }}
            /> */}
        </>
    )
}

export default TeacherCourseTable