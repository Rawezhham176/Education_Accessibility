import React from 'react'
import { StudentNav, StudentFrontpage, StudentPlan, StudentWelcome, StudentFirstSteps } from '../../components'

const StudentPage = () => {
    return (
        <div>
            <StudentNav />
            <StudentFrontpage />
            <StudentPlan />
            <StudentFirstSteps />
            <StudentWelcome />
        </div>
    )
}

export default StudentPage
