import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import CreateCourseForm from '../../Components/Course/CreateCourse/CreateCourseForm'

const CreateCoursePage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Kurs Ekleme' >
                <CreateCourseForm />
            </TablePageContainer>
        </div>
    )
}

export default CreateCoursePage