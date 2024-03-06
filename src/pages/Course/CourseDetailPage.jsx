import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import CourseDetailDashboard from '../../Components/Course/CourseDetailDashboard'

const CourseDetailPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Kurs Detay' >
                <CourseDetailDashboard />
            </TablePageContainer>
        </div>
    )
}

export default CourseDetailPage