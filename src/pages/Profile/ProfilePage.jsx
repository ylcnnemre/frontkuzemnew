import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import ProfileForm from '../../Components/Profile/ProfileDashboard'

const ProfilePage = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Profil' >
                <ProfileForm />
            </TablePageContainer>
        </div>
    )
}

export default ProfilePage