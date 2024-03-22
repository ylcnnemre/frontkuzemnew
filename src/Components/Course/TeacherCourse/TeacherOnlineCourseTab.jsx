import React, { useEffect, useMemo, useState } from 'react'
import { getAllOnlineEducationDetailApi } from '../../../api/Teacher'
import { toast } from 'react-toastify'
import { GetAllForRegisteredTeacher } from '../../../api/Course'
import { Collapse } from 'antd'
import { SlArrowDown } from 'react-icons/sl'
import { Col, Row, Label, Button } from 'reactstrap'
import { MdOutlineRefresh } from "react-icons/md";
import { PropagateLoader } from 'react-spinners'

const TeacherOnlineCourseTab = ({ meetingAlert }) => {
    const [educationLink, setEducationLink] = useState([])
    const [loading, setLoading] = useState(false)
    const getOnlineEducationLink = async () => {
        try {
            setLoading(true)
            const courseList = await GetAllForRegisteredTeacher({
                page: 0,
                pageSize: 500
            })
            console.log("courseList => ", courseList)
            if (courseList.data.items) {
                let courseIdList = courseList.data.items.map(el => el.id)
                const response = await Promise.all(courseIdList.map(el => getAllOnlineEducationDetailApi(el, {
                    page: 0,
                    pageSize: 10
                })))
                const finalData = response.map(el => {
                    if (el.data.items.length !== 0) {
                        return el.data.items
                    }
                }).filter(el => el !== undefined)
                const result = finalData.flatMap(el => el).filter(el => el.course !== null).sort((a,b)=> b.id - a.id)
                setEducationLink(result)
                /*  console.log("testar => ",testarr)
                 const result = finalData.map(item => {
                     let courseInfo = item.filter(el => el.course !== null)
                     console.log("courseInfo > ", courseInfo)
                     console.log("first => ", courseInfo[0])
                     return {
                         course: {
                             ...courseInfo[0].course
                         },
                         userId: courseInfo[0].userId,
                         meeting: item.map(el => {
                             const { course, courseId, ...rest } = el
                             return {
                                 ...rest
                             }
                         })
                     }
                 }) */

                /* finalData.map(item => {
                    return {

                    }
                }) */

                /*  setEducationLink(response.data.items) */
            }

        }
        catch (err) {
            toast.error(err.message, {
                autoClose: 1000
            })
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        console.log("selamasd")
        getOnlineEducationLink()

    }, [meetingAlert])


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
            educationLink.map((el, index) => {
                return (
                    <Collapse key={`${index}`} style={{ marginTop: "20px" }} expandIcon={({ isActive }) => {
                        return null
                    }} >
                        <Collapse.Panel header={customHeader(el.course.name, el.startTime, el.teacherMeetingUrl)} key="1">
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
                                <Col lg={6}  >
                                    <div className='course_card_item mb-4 mr-4'>
                                        <Label className='course_card_item_title'>
                                            Kurs Süresi
                                        </Label>
                                        <p style={{ fontSize: "16px" }} >
                                            {el.duration}
                                        </p>
                                    </div>

                                </Col>

                                <Col lg={12}>
                                    <div className='course_card_item' >
                                        <Label className='course_card_item_title' >
                                            Katılım Linki
                                        </Label>
                                        <div>
                                            {
                                                el.teacherMeetingUrl == "Beklemede" ? (
                                                    <p>
                                                        Link Henüz Oluşmadı
                                                    </p>
                                                ) : (
                                                    <a target='_blank' className='teacher_course_join_link' href={el.teacherMeetingUrl} >
                                                        {
                                                            el.teacherMeetingUrl == "Beklemede" ? "Link Henüz oluşmadı" : "Katılmak için Tıklayınız"
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
                    getOnlineEducationLink()
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

export default TeacherOnlineCourseTab