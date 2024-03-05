import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import EditStudentInfoTab from './EditStudentInfoTab'
const UpdateStudentForm = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink className={`${activeTab == 1 && "active"}`} onClick={() => setActiveTab(1)} >
                        Bilgiler
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`${activeTab == 2 && "active"}`} onClick={() => { setActiveTab(2) }} >
                        Aldığı Kurslar
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={`${activeTab == 3 && "active"}`} onClick={() => { setActiveTab(3) }} >
                        Sertifikalar
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} style={{ paddingTop: "20px" }}>
                <TabPane tabId={1}  >
                    <EditStudentInfoTab />
                </TabPane>
                <TabPane tabId={2} >
                  {/*   <EditStudentCourseInfo /> */}

                </TabPane>
                <TabPane tabId={3} >
                    sertifika

                </TabPane>
            </TabContent>
        </>
    )
}

export default UpdateStudentForm