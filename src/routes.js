import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Step1 from './Components/Step1';
import Step2 from './Components/Step2';
import Results from './Components/Results';

export default (
  <Switch>
    <Route component={Step1} exact path='/' />
    <Route component={Step2} exact path='/step2' />
    <Route component={Results} exact path='/results' />
  </Switch>
)