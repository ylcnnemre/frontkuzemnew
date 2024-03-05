import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import UpdateTeacherForm from '../../Components/Teacher/UpdateTeacherForm'

const EditTeacherPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Eğitmen Güncelleme'>
                <UpdateTeacherForm />
            </TablePageContainer>
        </div>
    )
}

export default EditTeacherPage