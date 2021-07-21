import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Activate from './containers/Activate';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';
import Account from './containers/Account';
import CreateTweet from './containers/CreateTweet';

import Layout from './hocs/Layout';

import { Provider } from 'react-redux';
import store from './store';

import { load_user } from './actions/auth';

function App() {
  load_user();

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/activate/:uid/:token" component={Activate}/>
            <Route exact path="/reset-password" component={ResetPassword} />
            <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
            <Route exact path="/account/:id" component={Account} />
            <Route exact path="/create_tweet" component={CreateTweet} />
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
