import React, { Component } from 'react';
import { Route } from  'react-router';
import NavBar from './NavBar';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import Callback from './Callback';
import SecuredRoute from './routes/SecuredRoute';
import NewQuestion from './components/NewQuestion';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component={NewQuestion} />
      </div>
    );
  }
}

export default App;