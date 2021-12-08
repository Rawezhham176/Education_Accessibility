import React from 'react'
import '../../styles/homePage/home.css'
import { Frontpage, Feedback, Donation, Planer, Nav } from '../../components'

const Home = () => {
    return (
        <>
        <Nav />
        <Frontpage />
        <Planer />
        <Feedback />
        <Donation />
        </>
    )
}

export default Home
