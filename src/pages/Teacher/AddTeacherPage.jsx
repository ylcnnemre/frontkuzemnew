import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import CreateTeacherForm from '../../Components/Teacher/CreateTeacherForm'

const AddTeacherPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Eğitmen Ekle' >
                <CreateTeacherForm />
            </TablePageContainer>
        </div>
    )
}

export default AddTeacherPage