import React, { useContext, useEffect, useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { UserContext } from '../../../context/user'
import MyCourseTable from './MyCourseTable'
import { PropagateLoader } from 'react-spinners'
import { getUserByIdApi } from '../../../api/UserApi'
import { toast } from 'react-toastify'
import { GetAllForRegisteredStudentAndTeacher } from '../../../api/Course'

const MyCourseDashboard = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [state, dispatch] = useContext(UserContext)
    const [userData, setUserData] = useState()

    const getUserCourse = async () => {
        try {
            const response = await GetAllForRegisteredStudentAndTeacher({
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
        return <PropagateLoader />
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
                        Sınavlarım
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
                    <MyCourseTable userData={userData} />
                </TabPane>
                <TabPane tabId={2} >
                    asd
                </TabPane>
                <TabPane tabId={3} >
                    sertifika

                </TabPane>
            </TabContent>
        </>
    )
}

export default MyCourseDashboard