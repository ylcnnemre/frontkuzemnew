import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import { Steps } from 'antd'
import { toast } from 'react-toastify';
import { Button, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap';
import AddCourseDetailTab from "./AddCourseDetailTab"
import { createCourseApi } from '../../../api/Course';

const CreateCourseForm = () => {

    const [current, setCurrent] = useState(0);
    const [selectedDocumentFiles, setSelectedDocumentFiles] = useState([])
    const [selectedImageFiles, setSelectedFiles] = useState([]);
    const [programData, setProgramData] = useState({
        day: "Pazartesi",
        startTime: "12:00",
        endTime: "12:30",
        id: ""
    })
    const [programList, setProgramList] = useState([])
    const [programDateList, setProgramDateList] = useState([])

    const handleCourseImageChange = (e) => {
        const imageExtension = ["jpg", "jpeg", "png"]
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            const MAX_FILE_SIZE_BYTES = 30 * 1024 * 1024;
            let control = {
                fail: false,
                msg: ""
            }
            for (let item of filesArray) {
                let ext = item.name.split(".").pop()?.toLowerCase()
                if (!imageExtension.includes(ext)) {
                    control.fail = true
                    control.msg = "Dosya uzantısı jpg,jpeg ve png olmalı"
                    break
                }
                else if (item.size > MAX_FILE_SIZE_BYTES) {
                    control.fail = true
                    control.msg = "Dosya Boyutu maksimum 30mb olmalı"
                    break
                }
            }
            if (control.fail) {
                toast.error(control.msg, {
                    autoClose: 1000
                })
            }
            else {
                setSelectedFiles(filesArray);
            }

        }
    };

    const handleCourseDocument = (e) => {
        const documentExtension = ["pdf", "docx", "doc"]
        if (e.target.files) {
            const filesArray = Array.from(e.target.files)
            const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024;
            let control = {
                fail: false,
                msg: ""
            }
            for (let item of filesArray) {
                let ext = item.name.split(".").pop()?.toLowerCase()
                if (!documentExtension.includes(ext)) {
                    control.fail = true
                    control.msg = "Dosya uzantısı pdf,docx veya doc olmalı"
                    break
                }
                else if (item.size > MAX_FILE_SIZE_BYTES) {
                    control.fail = true
                    control.msg = "Dosya Boyutu maksimum 10mb olmalı"
                    break
                }
            }
            if (control.fail) {
                toast.error(control.msg, {
                    autoClose: 1000
                })
            }
            else {
                setSelectedDocumentFiles(filesArray)
            }
        }
    }

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            limit: 0,
            startDate: "",
            endDate: "",
            semester: "2024 yaz",
            type: "",
            genderType: "",
            startYear: 0,
            endYear: 0
        },
        validationSchema: yup.object({
            name: yup.string().required("Bu alan boş bırakılamaz"),
            description: yup.string().required(),
            semester: yup.string(),
            type: yup.string().required(),
            genderType: yup.string().required(),
            startDate: yup
                .date()
                .required()
                .test('start-date', 'Başlangıç tarihi bitiş tarihinden önce olmalıdır', function (value) {
                    const endDate = this.parent.endDate;  // Değişiklik burada
                    return !endDate || value < endDate;
                })/* .test("start-date", "Günümüzden ileri olmalı", function (value) {
                    return new Date() < value
                }) */,
            endDate: yup
                .date()
                .required()
                .test('end-date', 'Bitiş tarihi başlangıç tarihinden sonra olmalıdır', function (value) {
                    const startDate = this.parent.startDate;  // Değişiklik burada
                    return !startDate || value > startDate;
                }).test("end-date", "Günümüzden ileri bir tarih olmalı", function (value) {
                    return new Date() < value
                }),
            limit: yup.number().min(1).required(),
            startYear: yup.number()
                .required("Seçim yapınız")
                .min(1900, "Seçim yapınız")
                .test('start-year', 'Başlangıç yılı bitiş yılından küçük olmalıdır', function (value) {
                    const endYear = this.parent.endYear;
                    return !endYear || value <= endYear;
                }),
            endYear: yup.number()
                .required("Seçim yapınız")
                .min(1900, "Seçim yapınız")
                .test('end-year', 'Bitiş yılı başlangıç yılından büyük olmalıdır', function (value) {
                    const startYear = this.parent.startYear;
                    return !startYear || value >= startYear;
                })
        }),
        onSubmit: async (value, { resetForm }) => {
            try {
                const { startYear, endYear, startDate, endDate, ...rest } = value
                const response = await createCourseApi({
                    ...rest,
                    startDate: new Date(startDate).toUTCString(),
                    endDate: new Date(endDate).toUTCString(),
                    startYear : parseInt(startYear),
                    endYear : parseInt(endYear)
                })
                console.log("res=> ", response)
                toast.success("Kurs Kaydedildi", {
                    autoClose: 1500
                })
                resetForm()
            }
            catch (err) {
                toast.error("Bir hata oluştu", {
                    autoClose: 1500
                })
            }
            console.log("val => ", value)
        },

    })

    const ornke = {
        "name": "matematik",
        "semester": "sasdsadsad",
        "description": "string",
        "type": "online",
        "genderType": "string",
        "limit": 10,
        "startYear": 2000,
        "endYear": 2005,
        "startDate": "2024-03-20T10:08:40.190Z",
        "endDate": "2024-03-25T10:08:40.190Z"
    }

    return (
        <>
            <Steps
                current={current}
                onChange={onChange}
                /*         progressDot={true} */
                items={[
                    {
                        title: 'Bilgiler',
                    },
                    /* {
                        title: "Program"
                    },
                    {
                        title: 'Fotoğraflar',
                    },
                    {
                        title: 'Dökümanlar',
                    }, */
                ]}
            />
            <div style={{ marginTop: "40px" }} >
                {
                    current == 0 && (
                        <AddCourseDetailTab formik={formik} />
                    )
                }

            </div>
            {/* <div style={{ marginTop: "40px" }}>
                {
                    current == 0 && (
                        <AddCourseDetailTab formik={formik} />
                    )
                }
                {
                    current == 1 && (
                        <AddCourseProgram programDateList={programDateList} setProgramDateList={setProgramDateList} formik={formik} setCurrent={setCurrent} programData={programData} setProgramData={setProgramData} programList={programList} setProgramList={setProgramList} />
                    )
                }
                {
                    current == 2 && (
                        <AddCoursePhotoTab setCurrent={setCurrent} handleCourseImageChange={handleCourseImageChange} selectedImageFiles={selectedImageFiles} />
                    )
                }
                {
                    current == 3 && (
                        <AddCourseDocumentTab programList={programDateList} setCurrent={setCurrent} selectedImageFiles={selectedImageFiles} formik={formik} handleCourseDocument={handleCourseDocument} selectedDocumentFiles={selectedDocumentFiles} />
                    )
                }

            </div> */}



        </>
    )
}

export default CreateCourseForm