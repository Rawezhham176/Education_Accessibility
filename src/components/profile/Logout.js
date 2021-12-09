import { useState, useEffect } from 'react'
import '../../styles/profile/login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../context/AuthContext'
import { Alert, Form } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom'


const Logout = ({ display }) => {
    const [dis, setdis] = useState('')

    const { logout } = useAuth()

    const [Error, setError] = useState("")
    const [Loading, setLoading] = useState(false);


    const navigator = useNavigate()


     async function handleLogOut(e){
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
         await logout()
         navigator('/')
        } catch {
            return setError("Logout failed")
        }
    }
   

    useEffect(() => {
        setdis(display)
    }, [display])

    return (
        <>
        <Form className='logout' onSubmit={handleLogOut} style={{display: dis}}>
        <div>
            {Error && <Alert variant='danger'>{Error}</Alert>}
            <FontAwesomeIcon icon={faTimes} className='signoutClose' onClick={() => setdis('none')}/>
            <h1 style={{color: 'white'}} className='logout_h'>SIGN OUT</h1>
            <button type='submit' disabled={Loading} >SIGN OUT</button>
        </div>
        </Form>
        </>
    )
}

export default Logout
