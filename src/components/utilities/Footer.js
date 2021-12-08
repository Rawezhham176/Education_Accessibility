import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/homePage/footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <ul>
                    <li><Link to='/home' className='footer_link'>HOME</Link></li>
                    <li><Link to='/' className='footer_link'>ABOUT US</Link></li>
                    <li><Link to='/' className='footer_link'>CONTACT</Link></li>
                </ul>
                <p className='footer_p'>worbenes Immes Immun­defekt­syndrom“, 
            deutsch: erworbenes Immun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 Milun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 </p>
            <p style={{marginTop: 20}}>Copyright &copy; 2021</p>
            </footer>
        </div>
    )
}

export default Footer
