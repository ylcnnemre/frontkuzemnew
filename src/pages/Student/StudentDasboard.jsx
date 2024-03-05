import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import StudentTable from '../../Components/Student/StudentTable'

const StudentDasboard = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Öğrenciler'>
                <StudentTable />
            </TablePageContainer>
        </div>
    )
}

export default StudentDasboard