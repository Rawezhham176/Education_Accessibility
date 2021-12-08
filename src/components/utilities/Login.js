import { useState, useEffect, useRef } from 'react'
import '../../styles/homePage/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../context/AuthContext'
import { Alert, Form } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

const Login = ({ display }) => {
    const [signUp, setsignUp] = useState('none');
    const [signIn, setsignIn] = useState('none');
    const [dis, setdis] = useState('')
    const refEmailSignIn = useRef(null)
    const refPasswordSignIn = useRef(null)
    const refEmailSignUp = useRef(null)
    const refPasswordSignUp = useRef(null)
    const refPhoneNumberSignUp = useRef(null)
    const refConfirmPasswordSignUp = useRef(null)
    const refNameSignUp = useRef(null)

    const { signup} = useAuth()
    const { login } = useAuth()

    const [Error, setError] = useState("")
    const [Loading, setLoading] = useState(false);
    const [Height] = useState(550);


    const navigator = useNavigate()

    async function handleSignUp(e){
        e.preventDefault()

        if(refPasswordSignUp.current.value !== refConfirmPasswordSignUp.current.value) {
            return setError("Password do not match!")
        }

        try {
            setError("")
            setLoading(true)
         await signup(refEmailSignUp.current.value,refPasswordSignUp.current.value,
             refNameSignUp.current.value,refPhoneNumberSignUp.current.value
         )
        } catch {
            return setError("SignUp failed")
        }
    }

     async function handleSignIn(e){
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
         await login(refEmailSignIn.current.value,refPasswordSignIn.current.value)
         navigator('/studentpage')
        } catch {
            return setError("SignIn failed")
        }
    }
   

    useEffect(() => {
        setdis(display)
    }, [display])

    return (
        <>
        <div className='login' style={{display: dis}}>
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setdis('none')}/>
            <button onClick={() => signIn === 'none' ? setsignIn('block') && display === 'none' : setsignIn('none')}>Sign In</button><br />
            <button onClick={() => signUp === 'none' ? setsignUp('block') && display === 'none' : setsignUp('none')}>I'm New</button>
        </div>


        <Form className='signIn' onSubmit={handleSignIn} style={{display: signIn}}>
        <div>
            {Error && <Alert variant='danger'>{Error}</Alert>}
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setsignIn('none')}/>
            <h1 style={{color: 'white'}}>Sign In</h1>
            <input type="text" placeholder='Email' ref={refEmailSignIn} required/>
            <input type="password" min={6} max={20} placeholder='Password' ref={refPasswordSignIn} required/><br />
            <button type='submit' disabled={Loading} >SIGN IN</button>
        </div>
        </Form>

        <Form className='signUp' onSubmit={handleSignUp} style={{display: signUp, height: Height}} >
         <div>
             {Error && <Alert variant='warning' className='alert'>{Error}</Alert>}
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setsignUp('none')}/>
            <h1 style={{color: 'white'}}>Sign Up</h1>
            <input type="text" placeholder='Full Name' ref={refNameSignUp} required/>
            <input type="tel" min={6} max={20} placeholder='phonenumber' ref={refPhoneNumberSignUp}/>
            <input name='email' type="text" placeholder='Email' ref={refEmailSignUp} required/>
            <input name='password' type="password" min={6} max={20} placeholder='Password' ref={refPasswordSignUp} required/>
            <input type="password" min={6} max={20} placeholder='Password again' ref={refConfirmPasswordSignUp} required/>
            <button type='submit' disabled={Loading} >SIGN UP</button>
        </div>
        </Form>

        </>
    )
}

export default Login
