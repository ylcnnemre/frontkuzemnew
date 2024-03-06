import React, { useEffect, useMemo, useState } from 'react'
import "./courseDetail.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from 'react-router-dom'
import { getDetailCourseApi } from '../../api/Course'
import { toast } from 'react-toastify'
import { Button, Col, Row } from 'reactstrap'
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

const CourseDetailDashboard = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [courseDetailData, setCourseDetailData] = useState()
    const navigate = useNavigate()
    const DetailCourseRequest = async () => {
        try {
            setLoading(true)

            let response = await getDetailCourseApi(id)
            console.log("response ==>", response.data)
            setCourseDetailData(response.data)
        }
        catch (err) {
            toast.error(err.response.data.message, {
                autoClose: 1500
            })
            navigate("/panel/kurslar")
        }
        finally {
            setLoading(false)
        }
    }

    const photoList = useMemo(() => {
        return courseDetailData?.files.filter(el => el.type == "photo")
    }, [courseDetailData?.files])

    const timeDetail = useMemo(() => {
        if (courseDetailData) {
            return {
                startDate: new Date(courseDetailData?.startDate).toLocaleDateString(),
                endDate: new Date(courseDetailData.endDate).toLocaleDateString()
            }
        }
    }, [courseDetailData?.startDate, courseDetailData?.endDate])

    useEffect(() => {
        DetailCourseRequest()
    }, [])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
    };

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
                            {courseDetailData?.title}
                        </h3>
                        <div>
                            <Button className='me-4' >
                                Kayıt ol
                            </Button>
                            <Button color='warning' onClick={() => {
                                navigate(`/panel/kurs/duzenle/${id}`)
                            }} >
                                Düzenle
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<IoTimeOutline />} title='Başlangıç' value={timeDetail?.startDate ?? ""} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<IoMdTime />} title='Bitiş' value={timeDetail?.endDate ?? ""} />
                </Col>
                <Col sm={4} >
                    <DetailInfoWidget icon={<IoIosPeople />} title='Kontenjan' value={courseDetailData?.quota} />
                </Col>
                <Col sm={6} >
                    <DetailInfoWidget icon={<VscSymbolField />} title='Branş' value={courseDetailData?.branch.name} />
                </Col>
                <Col sm={6} >
                    <DetailInfoWidget icon={<FaChalkboardTeacher />} title='Eğitmen' value={courseDetailData?.teacher ? `${courseDetailData?.teacher?.name} ${courseDetailData?.teacher?.surname}` : "Seçilmedi"} />
                </Col>
                <Col sm={12} >
                    <DetailInfoWidget icon={<TbFileDescription />} title='Açıklama' value={courseDetailData?.description} />
                </Col>

            </Row>
            <Row className='mt-5 mb-4' >
                <h5 className='course_photo_title'>
                    Fotoğraflar
                </h5>
                <Col  >
                    <Swiper slidesPerView={4} grid={{ rows: 1 }} spaceBetween={30} pagination={{ clickable: true }} modules={[Grid]} >
                        {
                            photoList?.map((el) => {
                                return (
                                    <SwiperSlide >
                                        <div>
                                            <img src={`${process.env.REACT_APP_BASEURL}${el.path}`} className="img-fluid  course_detail_photo_item " alt="" />

                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    {/* <Slider {...settings}>
                        {
                            photoList?.map((el, index) => {
                                return (
                                    <>
                                        <div className='slick_slide_item' key={`${index}`} >
                                            <img src={`${process.env.REACT_APP_BASEURL}${el.path}`} className='img-fluid' alt="" />
                                        </div>

                                    </>
                                )
                            })
                        }
                    </Slider> */}
                </Col>

            </Row>
            <Row>
                <Col lg={12} >
                    <h5 className='course_schedule_title' >
                        Kurs Programı
                    </h5>
                </Col>
                {
                    courseDetailData?.schedules?.map((el, index) => {
                        return (
                            <Col lg={4} >
                                <div className='schedule_card' key={`${index}`} >
                                    <p className='schedule_card_day'>
                                        Gün : <span style={{ color: "#FFCE02" }} >{el.day}</span>
                                    </p>
                                    <div className='schedule_card_time'  >
                                        <p>
                                            Başlangıç : <span style={{ color: "#FFCE02" }}>{el.startTime}</span>
                                        </p>
                                        <p>
                                            Bitiş : <span style={{ color: "#FFCE02" }}>{el.endTime}</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }

            </Row>
        </div>
    )
}

export default CourseDetailDashboard