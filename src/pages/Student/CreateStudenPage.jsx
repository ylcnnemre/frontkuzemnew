import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import CreateStudentForm from '../../Components/Student/CreateStudentForm'

const CreateStudenPage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Öğrenci Ekleme' >
                <CreateStudentForm />
            </TablePageContainer>
        </div>
    )
}

export default CreateStudenPage