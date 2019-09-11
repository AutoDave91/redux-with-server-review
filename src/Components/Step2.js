import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import store, {UPDATE_BODY} from '../redux/store';

export default function Step2(props) {
  function handleChange(e) {
    store.dispatch({
      type: UPDATE_BODY,
      payload: e.target.value
    });
  }
  const reduxSalutation = store.getState().salutation;
  const reduxBody = store.getState().body;

  return (
    <div>
      <button onClick={() => props.history.goBack()}>Back</button>
      <h1>Create Body:</h1>
      <textarea
        onChange={handleChange} 
      />
      <Link to='/results' onClick={()=>axios.post('/api/letters', {reduxSalutation, reduxBody})}>
        <button>See Results</button>
      </Link>
    </div>
  )

}