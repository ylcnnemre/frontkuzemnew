import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import TeacherTable from "./TeacherTable"
const TeacherDashboard = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Eğitmenler' >
                <TeacherTable />
            </TablePageContainer>
        </div>


    )
}

export default TeacherDashboard