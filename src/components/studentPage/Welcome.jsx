import React from 'react'
import { p2 } from '../../img'

const Welcome = () => {
    return (
        <div>
            <div className='welcome_box'>
                <div className='welcome_text'>
                    <h1 className='welcome_text_h'>Welcome Karisma</h1>
                    <p className='welcome_text_p'>
                        Acquired Immune Deficiency 
                        Syndrome, auch Acquired 
                        immuno­deficiency syndrome (englisch für
                        „erworbenes Immun­defekt­syndrom“, deutsch: 
                        erworbenes Immun­schwäche­syndeit Beginn 
                        der Epide­mie starben 35 Millionen Men­schen
                    </p>
                </div>
                <img src={p2} alt="professor" className='welcome_img'/>
            </div>
        </div>
    )
}

export default Welcome
