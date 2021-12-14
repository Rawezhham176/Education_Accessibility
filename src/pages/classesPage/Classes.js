import React from 'react'
import Nav from '../../components/studentPage/Nav'
import { CurrentLesson, ClassMates, Teachers, PreviousLesson, SchedualToday } from '../../components'

const classes = () => {
    return (
        <div>
            <Nav />
            <CurrentLesson />
            <ClassMates />
            <Teachers />
            <PreviousLesson />
            < SchedualToday />
        </div>
    )
}

export default classes
