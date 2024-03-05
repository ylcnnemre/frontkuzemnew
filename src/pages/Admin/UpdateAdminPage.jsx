import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import UpdateAdminForm from '../../Components/Admin/UpdateAdminForm'

const UpdateAdminPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Admin Güncelle'>
                <UpdateAdminForm />
            </TablePageContainer>
        </div>
    )
}

export default UpdateAdminPage