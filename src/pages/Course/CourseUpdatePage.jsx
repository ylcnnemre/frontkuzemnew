import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import UpdateCourseForm from '../../Components/Course/UpdateCourse/UpdateCourseForm'

const CourseUpdatePage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Kurs Düzenleme' >
                <UpdateCourseForm />
            </TablePageContainer>
        </div>
    )
}

export default CourseUpdatePage