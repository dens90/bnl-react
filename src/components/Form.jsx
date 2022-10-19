import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div>
        <div className="form_wrapper">
          <div className="form-title_container">
            <h2>Registrati per ricevere informazioni sulle nostre offerte</h2>
          </div>
          <div className="form-container">
          <form className='form-data'>
               <div>
              <label htmlFor="name">
                <input type="text" placeholder='nome' />
              </label>
              <label htmlFor="lastname">
                <input type="text" placeholder='Cognome' />
              </label>
            </div>
            <div>
              <label htmlFor="cell">
                <input type="number" placeholder='Cellulare' />
              </label>
              <label htmlFor="email">
                <input type="email" placeholder='E-mail' />
              </label>
            </div> 
            <div>
              <label htmlFor="Date">
                <input type="data" placeholder='Data di nascita' />
              </label>
              <label htmlFor="Code">
                <input type="text" placeholder='Codice fiscale' />
              </label>
            </div>
            <div>
              
                <input type="radio" placeholder='name' />
              Accetto i termini e le condizioni
              
                <input type="radio" placeholder='name' />
              Voglio ricevere maggiori informazioni
            </div>   
              </form>
              </div>
              </div>
    </div>
  )
}

export default Form