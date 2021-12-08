import React from 'react'
import '../../styles/homePage/home.css'
import front_img from '../../img/siuu.jpg'

const Frontpage = () => {
    return (
        <div>
            <div className='front'>
            <img src={front_img} className='front_img' />
            <h1 className='front_header'>We Need <span>Education</span></h1>
            <p className='front_p'>
            Acquired Immune Deficiency Syndrome, 
            auch Acquired immuno­deficiency syndrome 
            (englisch für „erworbenes Immun­defekt­syndrom“, 
            deutsch: erworbenes Immun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 Millionen Men­schen</p>
        </div>
        </div>
    )
}

export default Frontpage
