import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import SemesterTable from '../../Components/Semester/SemesterTable'

const SemesterDashboard = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Dönemler'>
                <SemesterTable />
            </TablePageContainer>
        </div>
    )
}

export default SemesterDashboard