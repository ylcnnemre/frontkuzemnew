import React from 'react'
import TablePageContainer from '../../Components/Common/TablePageContainer'
import BranchTable from '../../Components/Branch/BranchTable'

const BranchDashboard = () => {
    return (
        <div className='page-content'>
            <TablePageContainer title='Branş' >
                <BranchTable />
            </TablePageContainer>
        </div>
    )
}

export default BranchDashboard