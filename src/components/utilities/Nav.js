import React from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import '../../styles/nav.css'

const nav = () => {
    return (
        <header>
            <div className='logo'>Logo</div>
        <div className='nav'>
                   <Router>
             <ul className='nav-list'>
                 <li>
                     <Link to='/' className='list_link'>HOME</Link>
                     </li>
                 <li>
                     <Link to='/' className='list_link'>ABOUT US</Link>
                     </li>
                 <li>
                     <Link to='/' className='list_link'>CONTACT</Link>
                     </li>
             </ul>
             </Router>
        </div>
                     <div className='avatar'><FontAwesomeIcon icon={faUserAlt} /></div>
        </header>
    )
}

export default nav