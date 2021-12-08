import React from 'react'
import plan from '../../img/plan.png'
import '../../styles/homePage/home.css'

const Planer = () => {
    return (
        <div>
            <div className='plan_sec'>
                <img src={plan} className='plan_img' alt='plan for study'/>
                <div className='plan_text'>
                    <div className='plan_t'>
                        <h1 className='plan_h'>Individual Plan for each one...</h1>
                        <p className='plan_p'>mmuno­deficiency syndrome 
                                              (englisch für „erworbenes Immun­defekt­syndrom“, 
                                              deutsch: erworbenes Immes Immun­defekt­syndrom“, 
                                              deutsch: erworbenes Immun­schwäche­syndeit Beginn 
                                              der Epide­mie starben 35 Milun­schwäche­syndeit Beginn 
                                              der Epide­mie starben 35 Millionen Me.
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Planer
