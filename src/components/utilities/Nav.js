import { useState } from 'react'
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Login from './Login'

import '../../styles/nav.css'

const Nav = () => {

    const [showLogin, setshowLogin] = useState("none")

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
                     <div className='avatar' onClick={() => showLogin == 'none' ? setshowLogin('block') : setshowLogin('none')} ><FontAwesomeIcon icon={faUserAlt} /></div>
                     <Login display={showLogin}/>
        </header>
    )
}

export default Nav