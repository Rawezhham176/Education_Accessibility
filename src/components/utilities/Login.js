import { useState, useEffect } from 'react'
import '../../styles/less/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

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
            <button onClick={() => signIn == 'none' ? setsignIn('block') && display == 'none' : setsignIn('none')}>Sign In</button><br />
            <button onClick={() => signUp == 'none' ? setsignUp('block') && display == 'none' : setsignUp('none')}>I am New</button>
        </div>

        <div className='signIn' style={{display: signIn}}>
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setsignIn('none')}/>
            <h1 style={{color: 'white'}}>Sign In</h1>
            <input type="text" placeholder='Email'/>
            <input type="password" min={6} max={20} placeholder='Password'/>
        </div>

         <div className='signUp' style={{display: signUp}}>
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setsignUp('none')}/>
            <h1 style={{color: 'white'}}>Sign Up</h1>
            <input type="text" placeholder='Full Name'/>
            <input type="tel" min={6} max={20} placeholder='phonenumber'/>
            <input type="text" placeholder='Email'/>
            <input type="password" min={6} max={20} placeholder='Password'/>
        </div>
        </>
    )
}

export default Login
