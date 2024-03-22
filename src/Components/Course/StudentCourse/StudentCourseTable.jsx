import React, { useEffect, useState } from 'react'
import { CourseRegisterStudentApi } from '../../../api/Course'
import { Collapse } from 'antd'
import { Col, Label, Row } from 'reactstrap'
import { SlArrowDown } from 'react-icons/sl'

const StudentCourseTable = () => {
    const [studentCourseList, setStudentCourseList] = useState([])
    const getStudentCourse = async () => {
        try {
            const response = await CourseRegisterStudentApi({
                page: 0,
                pageSize: 100
            })

            setStudentCourseList(response.data.items)
        }
        catch (err) {

        }
    }

    useEffect(() => {
        getStudentCourse()
    }, [])

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
            {
                studentCourseList.map(el => {
                    return (
                        <Collapse style={{ marginTop: "30px" }} expandIcon={({ isActive }) => {
                            return null
                        }} >
                            <Collapse.Panel header={customHeader(el.courseName)} key="1">
                                <Row>
                                    
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
                                        <div className='course_card_item'  >
                                            <Label className='course_card_item_title' >
                                                Dönem
                                            </Label>
                                            <p>
                                                {el.semester}
                                            </p>
                                        </div>
                                    </Col>
                                    
                                    
                                </Row>
                            </Collapse.Panel>
                        </Collapse>
                    )
                })
            }
        </>
    )
}

export default StudentCourseTable