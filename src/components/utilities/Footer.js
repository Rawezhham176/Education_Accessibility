import React from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import '../../styles/homepage/footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <Router>
                <ul>
                    <li><Link to='/' className='footer_link'>HOME</Link></li>
                    <li><Link to='/' className='footer_link'>ABOUT US</Link></li>
                    <li><Link to='/' className='footer_link'>CONTACT</Link></li>
                </ul>
                </Router>
                <p className='footer_p'>worbenes Immes Immun­defekt­syndrom“, 
            deutsch: erworbenes Immun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 Milun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 </p>
            </footer>
        </div>
    )
}

export default Footer
