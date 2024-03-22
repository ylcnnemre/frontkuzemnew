import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import TeacherCourseDashboard from '../../Components/Course/TeacherCourse/TeacherCourseDashboard'

const TeacherCoursePage = () => {
    return (
        <div className='page-content' >
            <TablePageContainer title='Kurslarım' >
                <TeacherCourseDashboard />
            </TablePageContainer>
        </div>
    )
}

export default TeacherCoursePage