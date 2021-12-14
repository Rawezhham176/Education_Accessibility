import React from 'react'
import { CurrentClass } from '../../styles'

const CurrentLesson = () => {
    return (
        <div>
            <div className='current_box'>
                <div className='current_box_text'>
                    <h1 className='current_box_text_h'>Current Lesson</h1>
                    <h1 className='current_box_text_s'>07:45 Biology with Pr. Einstein</h1>
                    <p className='current_box_text_p'>  Acquired Immune Deficiency 
                        Syndrome, auch Acquired 
                        immuno­deficiency syndrome (englisch für
                        „erworbenes Immun­defekt­syndrom“, deutsch: 
                        erworbenes Immun­schwäche­syndeit Beginn 
                        der Epide­mie starben 35 Millionen Men­schen</p>
                </div>

                <button>JOIN US</button>

                <div className='current_box_stuffForWork'>
                    <h1>Stuff For Work</h1>
                        <a href="">Syndrome, auch Acquired 
                        immuno­deficiency syndrome (englisch für
                        „erworbenes Immun­defekt­syndrom“</a>
                        <a href="">  deutsch: 
                        erworbenes Immun­schwäche­syndeit Beginn 
                        der Epide­mie starben 35 Millionen Men­schen</a>
                </div>
            </div>
        </div>
    )
}

export default CurrentLesson
