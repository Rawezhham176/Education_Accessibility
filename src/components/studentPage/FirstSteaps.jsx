import React from 'react'
import { Link } from 'react-router-dom'

const FirstSteaps = () => {
    return (
        <div>
           <div className='first_steps_box'>
               <h1 className='first_steps_h'>First Steps</h1>
               <div className='first_steps_button'>
               <button>See The full Schedual of your class</button>
               <button>Meet your classmates</button>
               </div>
               <p className='first_steps_p'>Make an appointment with your <Link to='/yourmentor' className='first_page_mentor'>Mentor</Link></p>
           </div>
        </div>
    )
}

export default FirstSteaps
