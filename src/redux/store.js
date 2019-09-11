import {createStore} from 'redux';

const initialState = {
  salutation: '',
  body: ''
}

export const UPDATE_SALUTATION = 'UPDATE_SALUTATION';
export const UPDATE_BODY = 'UPDATE_BODY';

function reducer(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case UPDATE_SALUTATION:
      return {
        ...state,
        salutation: action.payload
      }
    case UPDATE_BODY:
      return {
        ...state,
        body: action.payload
      }
    default: return state;
  }
}

export default createStore(reducer)