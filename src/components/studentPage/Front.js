import React from 'react'
import '../../styles/studentPage/home.css'
import { classRoom } from '../../img'

const FrontPage = () => {
    return (
        <div>
            <div className='front'>
                <div className='front_text'>
                <h1 className='front_header'><span>Youth Academy</span></h1>
                <p className='front_p'>
                    Acquired Immune Deficiency Syndrome, 
                    auch Acquired immuno­deficiency syndrome 
                    (englisch für „erworbenes Immun­defekt­syndrom“, 
                    deutsch: erworbenes Immun­enes Immun­defekt­syndrom“, 
                    deutsch: erworbenes Immun­schwäche­syndeit Beginn 
                    der Epide­mie starben 35 Millschwäche­syndeit Beginn 
                    der Epide­mie starben 35 Millionen Men­schen</p>
                    </div>
                <img src={classRoom} className='classRoom' alt='Class Room' />
            </div>
        </div>
    )
}

export default FrontPage
