import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import StudentCourseMainPage from '../../Components/Course/StudentCourse/StudentCourseMainPage'

const StudentCourseDashboard = () => {
  return (
    <div className='page-content' >
      <TablePageContainer title='Kurslarım' >
        <StudentCourseMainPage />
      </TablePageContainer>
    </div>
  )
}

export default StudentCourseDashboard