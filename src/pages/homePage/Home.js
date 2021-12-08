import React from 'react'
import '../../styles/homePage/home.css'
import { Frontpage, Feedback, Donation, Planer, Nav, Footer } from '../../components'
import { AuthProvider } from '../../context/AuthContext'

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
