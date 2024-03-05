import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import AdminTable from '../../Components/Admin/AdminTable'

const AdminDashboard = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Admin' >
                <AdminTable />
            </TablePageContainer>
        </div>
    )
}

export default AdminDashboard