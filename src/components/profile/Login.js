import { useState, useEffect } from 'react'
import '../../styles/profile/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Signup from './Signup'
import Signin from './Signin'

const Login = ({ display }) => {
    const [signUp, setsignUp] = useState('none');
    const [signIn, setsignIn] = useState('none');
    const [dis, setdis] = useState('')
   
    useEffect(() => {
        setdis(display)
    }, [display])

    return (
        <>
        <div className='login' style={{display: dis}}>
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setdis('none')}/>
            <button onClick={() => signIn == 'none' ? setsignIn('block') && setdis('none') : setsignIn('none')}>Sign In</button><br />
            <button onClick={() => signUp == 'none' ? setsignUp('block') && setdis('none') : setsignUp('none')}>I'm New</button>
        </div>

        <Signup display={signUp} />
        <Signin display={signIn} />
        </>
    )
}

export default Login
