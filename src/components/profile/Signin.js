import { useState, useEffect, useRef } from 'react'
import '../../styles/profile/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../context/AuthContext'
import { Alert, Form } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'

const Signin = ({ display }) => {
    const [dis, setdis] = useState('')
    const refEmailSignIn = useRef(null)
    const refPasswordSignIn = useRef(null)

    const { login } = useAuth()

    const [Error, setError] = useState("")
    const [Loading, setLoading] = useState(false);


    const navigator = useNavigate()


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
        <Form className='signIn' onSubmit={handleSignIn} style={{display: dis}}>
        <div>
            {Error && <Alert variant='danger'>{Error}</Alert>}
            <FontAwesomeIcon icon={faTimes} className='signinClose' onClick={() => setdis('none')}/>
            <h1 style={{color: 'white'}}>Sign In</h1>
            <input type="text" placeholder='Email' ref={refEmailSignIn} required/>
            <input type="password" min={6} max={20} placeholder='Password' ref={refPasswordSignIn} required/><br />
            <button type='submit' disabled={Loading} >SIGN IN</button>
        </div>
        </Form>
        </>
    )
}

export default Signin
