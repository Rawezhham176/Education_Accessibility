import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Login from '../profile/Login'

import '../../styles/homePage/nav.css'

const Nav = () => {

    const [showLogin, setshowLogin] = useState("none")

    return (
        <header>
            <div className='logo'>Logo</div>
        <div className='nav'>
             <ul className='nav-list'>
                 <li>
                     <Link to='/home' className='list_link'>HOME</Link>
                     </li>
                 <li>
                     <Link to='/' className='list_link'>ABOUT US</Link>
                     </li>
                 <li>
                     <Link to='/' className='list_link'>CONTACT</Link>
                     </li>
             </ul>
        </div>
                     <div className='avatar' onClick={() => showLogin === 'none' ? setshowLogin('block') : setshowLogin('none')} ><FontAwesomeIcon icon={faUserAlt} /></div>
                     <Login display={showLogin}/>
        </header>
    )
}

export default Nav