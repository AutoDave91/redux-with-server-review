import React from 'react';
import store, {UPDATE_SALUTATION} from '../redux/store';
import {Link} from 'react-router-dom';

export default function Step1() {
  function handleChange(e) {
    store.dispatch({
      type: UPDATE_SALUTATION,
      payload: e.target.value
    });
  }
  return (
    <div>
      <h1>Create Salutation:</h1>
      <input
        type='text'
        onChange={handleChange}
      />
      <Link to='/step2'>
        <button>Continue to Step 2</button>
      </Link>
    </div>
  )
}