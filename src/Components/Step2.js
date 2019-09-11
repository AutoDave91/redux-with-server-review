import React from 'react';
import store, {UPDATE_BODY} from '../redux/store';
import {Link} from 'react-router-dom';

export default function Step2(props) {
  function handleChange(e) {
    store.dispatch({
      type: UPDATE_BODY,
      payload: e.target.value
    });
  }
  return (
    <div>
      <button onClick={() => props.history.goBack()}>Back</button>
      <h1>Create Body:</h1>
      <textarea
        onChange={handleChange} 
      />
      <Link to='/results'>
        <button>See Results</button>
      </Link>
    </div>
  )

}