import React from 'react'
import { NavLink} from "react-router-dom";

const login = () => {
    return (
      <article className='form'>
        <form>
          <div >
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
            />
          </div>
          <div >
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'

            />
          </div>
          <div >
            <label htmlFor='age'>Age : </label>
            <input
              type='number'
              id='age'
              name='age'
            />
          </div>
          <NavLink to="/dashboard" >
              <h6 className='btnCpy'>login</h6>
            </NavLink>
        </form>
      </article>
    )
}

export default login
