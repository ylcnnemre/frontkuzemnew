import React, { useState } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import StudentCourseTable from './StudentCourseTable'
import StudentOnlineMeeting from './StudentOnlineMeeting'

const StudentCourseMainPage = () => {
  const [activeTab, setActiveTab] = useState(1)
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
          <StudentCourseTable />
        </TabPane>
        <TabPane tabId={2} >
          <StudentOnlineMeeting />
        </TabPane>
        <TabPane tabId={3} >
          sertifika

        </TabPane>
      </TabContent>
    </>
  )
}

export default StudentCourseMainPage