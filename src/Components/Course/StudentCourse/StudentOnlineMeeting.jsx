import React, { useEffect, useState } from 'react'
import { CourseMeetingsForStudentApi, CourseRegisterStudentApi, GetAllForRegisteredTeacher, getAllForRegistredUser } from '../../../api/Course'
import { axiosInstance } from '../../../api/axiosInstance'
import { toast } from 'react-toastify'
import { MdOutlineRefresh } from 'react-icons/md'
import { Button, Col, Label, Row } from 'reactstrap'
import { PropagateLoader } from 'react-spinners'
import { Collapse } from 'antd'
import { SlArrowDown } from 'react-icons/sl'

const StudentOnlineMeeting = () => {
    const [loading, setLoading] = useState()
    const [studentOnlineMeetingList, setStudentOnlineMeetingList] = useState([])
    const getStudentCourse = async () => {
        try {
            setLoading(true)
            const response = await CourseRegisterStudentApi({
                page: 0,
                pageSize: 100
            })
            const courseIdList = response.data.items.map(el => el.courseId)
            let calendarList = await Promise.all(courseIdList.map(el => CourseMeetingsForStudentApi({
                page: 0,
                pageSize: 50
            }, el)))
            calendarList = calendarList.map(el => el.data.items).flatMap(item => item)

            let meetingList = await Promise.all(courseIdList.map(el => getAllForRegistredUser({
                page: 0,
                pageSize: 50
            }, el)))
            meetingList = meetingList.map(el => el.data.items).flatMap(item => item)
            let result = calendarList.map(item => {
                let selected = meetingList.find(x => x.courseDateId == item.id)
                if (selected) {
                    return {
                        ...item,
                        meetingUrl: selected.meetingUrl,
                        userId: selected.userId
                    }
                }

            }).filter(el => el !== undefined).sort((a, b) => b.id - a.id)
            console.log("result => ", result)
            setStudentOnlineMeetingList(result)
        }
        catch (err) {
            toast.error("Bir hata oluştu", {
                autoClose: 1000
            })
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getStudentCourse()
    }, [])

    const customHeader = (title, startTime, status) => {
        return (
            <div style={{ padding: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ textTransform: "capitalize", fontWeight: "bold", marginRight: "30px" }}>{title}</span>
                    <span>
                        {
                            status === "Beklemede" ? "Beklemede" : "Canlı Ders Aktif"
                        }
                    </span>
                </div>
                <div>
                    <SlArrowDown />
                </div>
            </div>
        );
    }

    const mainElement = () => {
        return (
            studentOnlineMeetingList.map((el, index) => {
                return (
                    <Collapse key={`${index}`} style={{ marginTop: "20px" }} expandIcon={({ isActive }) => {
                        return null
                    }} >
                        <Collapse.Panel header={customHeader(el.courseName, el.startTime, el.meetingUrl)} key="1">
                            <Row>
                                <Col lg={6} >
                                    <div className='course_card_item mb-4 mr-4' >
                                        <Label className='course_card_item_title'>
                                            Başlangıç Zamanı
                                        </Label>
                                        <p style={{ fontSize: "16px" }} >
                                            {new Date(el.startTime).toLocaleString()}
                                        </p>
                                    </div>

                                </Col>
                                {/* <Col lg={6}  >
                                    <div className='course_card_item mb-4 mr-4'>
                                        <Label className='course_card_item_title'>
                                            Kurs Süresi
                                        </Label>
                                        <p style={{ fontSize: "16px" }} >
                                            {el.duration}
                                        </p>
                                    </div>

                                </Col> */}

                                <Col lg={12}>
                                    <div className='course_card_item' >
                                        <Label className='course_card_item_title' >
                                            Katılım Linki
                                        </Label>
                                        <div>
                                            {
                                                el.meetingUrl == "Beklemede" ? (
                                                    <p>
                                                        Link Henüz Oluşmadı
                                                    </p>
                                                ) : (
                                                    <a target='_blank' className='teacher_course_join_link' href={el.meetingUrl} >
                                                        {
                                                            el.meetingUrl == "Beklemede" ? "Link Henüz oluşmadı" : "Katılmak için Tıklayınız"
                                                        }
                                                    </a>
                                                )
                                            }

                                        </div>
                                    </div>
                                </Col>
                            </Row>

                        </Collapse.Panel>
                    </Collapse>
                )
            })
        )



    }


    return (
        <div>
            <div className='teacher_online_course_refresh' >
                <Button onClick={() => {
                    getStudentCourse()
                }}>
                    <MdOutlineRefresh style={{ fontSize: "18px" }} />  Yenile
                </Button>
            </div>
            {
                loading ? (
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} >
                        <PropagateLoader color="#36d7b7" />
                    </div>
                ) : mainElement()
            }
        </div>
    )
}

export default StudentOnlineMeeting