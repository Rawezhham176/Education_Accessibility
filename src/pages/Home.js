import React from 'react'
import front_img from '../img/siuu.jpg'
import plan from '../img/plan.png'

import p1 from '../img/p1.jpg'
import p2 from '../img/A1_Visa.jpg'
import p3 from '../img/siuuuu.jpg'
import p4 from '../img/ye.jpg'
import p5 from '../img/images.jfif'
import '../styles/home.css'

const Home = () => {
    return (
        <>
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

        <div className='plan_sec'>
            <img src={plan} className='plan_img'/>
            <div className='plan_text'>
                <div className='plan_t'>
                <h1 className='plan_h'>Individual Plan for each one...</h1>
                <p className='plan_p'>mmuno­deficiency syndrome 
            (englisch für „erworbenes Immun­defekt­syndrom“, 
            deutsch: erworbenes Immes Immun­defekt­syndrom“, 
            deutsch: erworbenes Immun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 Milun­schwäche­syndeit Beginn 
            der Epide­mie starben 35 Millionen Me</p>
            </div>
            </div>
        </div>

        <div className='feedback'>
                <h1 className='feedback_h1'>Acquired Immune Deficiency Syndrome,
                    auch Acquired immuno­deficiency syndrome</h1>
                <div className='feedback_people'>
                    <div>
                        <img src={p1} className='p1' />
                    </div>
                </div>
                <h1 className='feedback_h2'>Acquired Immune Deficiency Syndrome,
                auch Acquired immuno­deficiency syndrome</h1>
        </div>
        </>
    )
}

export default Home
