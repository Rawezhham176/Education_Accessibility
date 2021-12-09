import { useState, useEffect, useRef } from 'react'
import '../../styles/profile/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../context/AuthContext'
import { Alert, Form } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

const Login = ({ display }) => {
    const [dis, setdis] = useState('')
    const refEmailSignUp = useRef(null)
    const refPasswordSignUp = useRef(null)
    const refPhoneNumberSignUp = useRef(null)
    const refConfirmPasswordSignUp = useRef(null)
    const refNameSignUp = useRef(null)

    const { signup } = useAuth()

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
             refNameSignUp.current.value,refPhoneNumberSignUp.current.value)
         navigator('/studentpage')    
        } catch {
            return setError("SignUp failed")
        }
    }

    useEffect(() => {
        setdis(display)
    }, [display])

    return (
        <>
        <Form className='signUp' onSubmit={handleSignUp} style={{display: dis, height: Height}} >
         <div>
             {Error && <Alert variant='warning' className='alert'>{Error}</Alert>}
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setdis('none')}/>
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
