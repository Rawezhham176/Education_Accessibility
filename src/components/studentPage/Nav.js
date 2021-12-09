import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Logout from '../profile/Logout'

import '../../styles/homePage/nav.css'
import { useState } from 'react'


const Nav = () => {
    const [showLogOut, setshowLogOut] = useState("none")

    return (
        <header>
            <div className='logo'>Logo</div>
        <div className='nav'>
             <ul className='nav-list'>
                 <li>
                     <Link to='/home' className='list_link'>HOME</Link>
                     </li>
                 <li>
                     <Link to='/classes' className='list_link'>CLASSES</Link>
                     </li>
                 <li>
                     <Link to='/teachers' className='list_link'>TEACHERS</Link>
                 </li>
                 <li>
                     <Link to='/exams' className='list_link'>EXAMS</Link>
                 </li>
                 <li>
                     <Link to='/myroom' className='list_link'>MY ROOM</Link>
                 </li>
             </ul>
        </div>
            <div className='avatar' onClick={() => showLogOut === 'none' ? setshowLogOut('block') : setshowLogOut('none')} ><FontAwesomeIcon icon={faUserAlt} /></div>
            <Logout display={showLogOut}/>
        </header>
    )
}

export default Nav