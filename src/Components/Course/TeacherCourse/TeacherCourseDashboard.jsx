import React, { useContext, useEffect, useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { UserContext } from '../../../context/user'
import TeacherCourseTable from './TeacherCourseTable'
import { PropagateLoader } from 'react-spinners'
import { getUserByIdApi } from '../../../api/UserApi'
import { toast } from 'react-toastify'
import { GetAllForRegisteredTeacher } from '../../../api/Course'
import TeacherOnlineCourseTab from './TeacherOnlineCourseTab'

const TeacherCourseDashboard = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [userData, setUserData] = useState()
    const [meetinAlert, setMeetingAlert] = useState(false)
    const getUserCourse = async () => {
        try {
            const response = await GetAllForRegisteredTeacher({
                page: 0,
                pageSize: 5
            })
            setUserData(response.data.items)
        }
        catch (err) {
            toast.error(err.message, {
                autoClose: 1000
            })
        }
        finally {

        }
    }

    useEffect(() => {
        getUserCourse()
    }, [])


    if (!userData) {
        return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "30px" }} >
            <PropagateLoader color='#9FD4CD' />
        </div>
    }


    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink className={`${activeTab == 1 && "active"}`} onClick={() => setActiveTab(1)} >
                        Kurslar
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`${activeTab == 2 && "active"}`} onClick={() => { setActiveTab(2) }} >
                        Canlı Yayın
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`${activeTab == 3 && "active"}`} onClick={() => { setActiveTab(3) }} >
                        Sertifikalarım
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} style={{ paddingTop: "20px" }}>
                <TabPane tabId={1}  >
                    <TeacherCourseTable userData={userData} setMeetingAlert={setMeetingAlert} />
                </TabPane>
                <TabPane tabId={2} >
                    <TeacherOnlineCourseTab meetingAlert={meetinAlert} />
                </TabPane>
                <TabPane tabId={3} >
                    sertifika

                </TabPane>
            </TabContent>
        </>
    )
}

export default TeacherCourseDashboard