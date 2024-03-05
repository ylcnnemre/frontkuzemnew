import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import CreateAdminForm from '../../Components/Admin/CreateAdminForm'

const CreateAdminPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Admin Ekleme' >
                <CreateAdminForm />
            </TablePageContainer>
        </div>
    )
}

export default CreateAdminPage