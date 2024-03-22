import React, { useContext, useEffect, useMemo, useState } from 'react'
import "./courseDetail.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from 'react-router-dom'
import { CourseAdminListGetAll, addCourseAdministrators, getAllCourseByStatusApi, getDetailCourseApi, registerCourseApi } from '../../api/Course'
import { toast } from 'react-toastify'
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import { IoTimeOutline } from "react-icons/io5";
import { DetailInfoWidget } from './DetailInfoWidget'
import { IoMdTime } from 'react-icons/io';
import { IoIosPeople } from "react-icons/io";
import { VscSymbolField } from "react-icons/vsc";
import { FaChalkboardTeacher } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { TfiZoomIn } from 'react-icons/tfi';
import { CircleLoader } from 'react-spinners'
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import { BsGenderMale } from 'react-icons/bs';
import { CiCalendarDate } from 'react-icons/ci';
import { UserContext } from '../../context/user';
import { getUserListApi } from '../../api/UserApi';

const CourseDetailDashboard = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [courseDetailData, setCourseDetailData] = useState()
    const navigate = useNavigate()
    const [TeacherList, setTeacherList] = useState([])
    const [selectedTeacher, setSelectedTeacher] = useState()
    const [selectTeacherModal, setSelectTeacherModal] = useState({
        courseId: "",
        show: false,
        teacher: null
    })
    const [context, dispatch] = useContext(UserContext)
    console.log("con => ", context)
    const getCourseList = async () => {
        try {
            setLoading(true)
            const response = await getAllCourseByStatusApi({
                page : 0,
                pageSize : 100
            })
            setCourseDetailData(response.data.items.find(el => el.id == id))
        }
        catch (err) {
            toast.error(err.response.data.message, {
                autoClose: 1500
            })
        }
        finally {
            setLoading(false)
        }
    }

    const timeDetail = useMemo(() => {
        if (courseDetailData) {
            return {
                startDate: new Date(courseDetailData?.startDate).toLocaleDateString(),
                endDate: new Date(courseDetailData.endDate).toLocaleDateString()
            }
        }
    }, [courseDetailData?.startDate, courseDetailData?.endDate])

    const getTeacherList = async () => {
        const response = await getUserListApi({
            page: 0,
            pageSize: 10,
            roleId: 2
        })
        setTeacherList(response.data.items)
    }


    useEffect(() => {
        /* DetailCourseRequest() */
        getCourseList()
        getTeacherList()
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
    };

    const roleControl = useMemo(() => {
        let formatRole = context.role.replace(/\s+/g, '');
        return formatRole == "Admin" || formatRole == "SüperAdmin"
    }, [context])

    if (loading) {
        return <div style={{ width: "100%", textAlign: "center", display: "flex", justifyContent: "center" }}>
            <CircleLoader color='green' />
        </div>
    }




    return (
        <div>
            <Row className='gy-3'>
                <Col sm={12} >
                    <div className='course_detail_title_container'>
                        <h3 className='course_title'>
                            {courseDetailData?.name}
                        </h3>
                        <div>
                            {
                                context.role === "Öğrenci" && (
                                    <Button className='me-4' onClick={async () => {
                                        try {
                                            const response = await registerCourseApi({
                                                courseId: id,
                                                userId: context.userId
                                            })
                                            console.log("response => ", response)
                                            toast.success("Kursa Kayıt oldunuz")
                                        }
                                        catch (err) {
                                            console.log("err => ", err.response)
                                            toast.error(err.response.data.Detail, {
                                                autoClose: 1500
                                            })
                                        }
                                    }}    >
                                        Kayıt ol
                                    </Button>
                                )
                            }

                            {
                                roleControl && (
                                    <Button onClick={async () => {
                                        try {

                                            const response = await CourseAdminListGetAll({
                                                page: 0,
                                                pageSize: 10
                                            })

                                            const sorumluOgretmen = response.data.items.find(el => el.courseId == id)
                                            console.log("sorumlu =>", sorumluOgretmen)
                                            setSelectTeacherModal({
                                                courseId: id,
                                                show: true,
                                                teacher: sorumluOgretmen ? sorumluOgretmen.user : ""
                                            })
                                        }
                                        catch (err) {

                                        }
                                    }} >
                                        Yetkilendir
                                    </Button>
                                )
                            }
                            {
                                roleControl && (
                                    <Button color='warning' style={{ marginLeft: "20px" }} onClick={() => {
                                        navigate(`/panel/kurs/duzenle/${id}`)
                                    }} >
                                        Düzenle
                                    </Button>
                                )
                            }

                        </div>
                    </div>
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<CiCalendarDate />} title='Kurs Başlangıç' value={timeDetail?.startDate ?? ""} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<CiCalendarDate />} title='Kurs Bitişi' value={timeDetail?.endDate ?? ""} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<IoIosPeople />} title='Kontenjan' value={courseDetailData?.limit} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<BsGenderMale />} title='Cinsiyet Şartı' value={courseDetailData?.genderType} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<IoTimeOutline />} title='Yaş Şartı' value={courseDetailData?.startYear} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<IoMdTime />} title='Yaş Şartı' value={courseDetailData?.endYear} />
                </Col>
                {/*     <Col sm={6} >
                    <DetailInfoWidget icon={<FaChalkboardTeacher />} title='Eğitmen' value={courseDetailData?.teacher ? `${courseDetailData?.teacher?.name} ${courseDetailData?.teacher?.surname}` : "Seçilmedi"} />
                </Col> */}
                <Col sm={12} >
                    <DetailInfoWidget icon={<TbFileDescription />} title='Açıklama' value={courseDetailData?.description} />
                </Col>

            </Row>

            <Modal isOpen={selectTeacherModal.show} >
                <ModalHeader>
                    Eğitmen Seç
                </ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <Label htmlFor="emailInput" className="form-label">
                            Eğitmen
                        </Label>
                        <select className='form-control' defaultValue={selectTeacherModal?.teacher?.id} onChange={(e) => {
                            setSelectedTeacher(e.target.value)
                        }}   >
                            <option value=""   >
                                Eğitmen Seçiniz
                            </option>
                            {
                                TeacherList.map(el => {
                                    return (
                                        <option value={el.id}>
                                            {el.firstName} {el.lastName}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={async () => {
                        try {
                            const response = await addCourseAdministrators({
                                userId: selectedTeacher,
                                courseId: selectTeacherModal.courseId
                            })
                            toast.success("eğitmen kayıt edildi", {
                                autoClose: 1000
                            })
                            setSelectTeacherModal({
                                courseId: "",
                                show: false
                            })
                        }
                        catch (err) {
                            toast.error(err.response.data.Detail, {
                                autoClose: 1000
                            })
                        }
                    }} >
                        Kaydet
                    </Button>
                    <Button className='btn btn-danger' onClick={() => {
                        setSelectTeacherModal({
                            show: false,
                            courseId: ""
                        })
                    }} >
                        İptal
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CourseDetailDashboard