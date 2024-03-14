import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import MyCourseDashboard from '../../Components/Course/MyCourse/MyCourseDashboard'

const MyCoursePage = () => {
    return (
        <div className='page-content' >
            <TablePageContainer title='Kurslarım' >
                <MyCourseDashboard />
            </TablePageContainer>
        </div>
    )
}

export default MyCoursePage