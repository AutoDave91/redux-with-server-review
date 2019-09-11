import React from 'react';
import store from '../redux/store';
import {Link} from 'react-router-dom';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      salutation: '',
      body: ''
    }
  }
  componentDidMount() {
    const reduxSalutation = store.getState().salutation;
    const reduxBody = store.getState().body;

    this.setState({
      salutation: reduxSalutation,
      body: reduxBody
    })
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