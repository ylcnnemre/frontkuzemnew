import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import ActiveCourseTable from '../../Components/Course/ActiveCourseTable'

const ActiveCourseDashboard = () => {
    return (
        <div className='page-content' >
            <TablePageContainer title='Kurslar' >
                <ActiveCourseTable />
            </TablePageContainer>
        </div>
    )
}

export default ActiveCourseDashboard