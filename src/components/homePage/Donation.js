import React from 'react'
import '../../styles/homePage/donation.css'

const Donation = () => {
    return (
        <div>
            <form>
                <h1 className='header'>Donation</h1>

                <label class="custom-field">
                <input type="email" placeholder="&nbsp;"/>
                <span class="placeholder">Enter Email</span>
               
  {/* <span class="error-message" aria-live="polite">The email is invalid</span> */}
            </label>

            <label class="custom-field" >
                <input type="tel" placeholder="&nbsp;"/>
                <span class="placeholder">Enter Phonenumber</span>
                
            </label>
            <label class="custom-field" >
                <input type="number" placeholder="&nbsp;"/>
                <span class="placeholder">Enter Amount</span>
                
            </label>
            <input type="submit" className="submit" value="Submit"/>
            {/* <label class="custom-field_textArea" >
                <textarea cols="30" rows="10" placeholder="&nbsp;"> </textarea>
                <span class="placeholder">Enter Email</span>
                
            </label> */}
            </form>
        </div>
    )
}

export default Donation
