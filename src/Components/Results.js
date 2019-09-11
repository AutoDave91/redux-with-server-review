import React from 'react';
import store from '../redux/store';
import {Link} from 'react-router-dom';
import Axios from 'axios';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      salutation: '',
      body: ''
    }
  }
  componentDidMount() {

    Axios.get('/api/letters').then( response =>
      this.setState({
        salutation: response.data.salutation,
        body: response.data.body
      })
    )
  }
  render() {
    return (
      <div>
        <button onClick={() => this.props.history.goBack()}>Back</button>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <h2>{this.state.salutation}</h2>
        <h3>{this.state.body}</h3>
      </div>
    )
  }
}