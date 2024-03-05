import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import UpdateStudentForm from '../../Components/Student/EditStudent/UpdateStudentForm'

const UpdateStudentPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Öğrenci Güncelleme' >
                <UpdateStudentForm />
            </TablePageContainer>
        </div>
    )
}

export default UpdateStudentPage