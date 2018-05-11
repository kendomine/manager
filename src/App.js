import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router'

class App extends Component {

  componentWillMount() {
  	const config = {
      apiKey: 'AIzaSyDDu1UroAot8YLtAO0pnUi54g5scAfm4ng',
      authDomain: 'manager-d8c00.firebaseapp.com',
      databaseURL: 'https://manager-d8c00.firebaseio.com',
      projectId: 'manager-d8c00',
      storageBucket: 'manager-d8c00.appspot.com',
      messagingSenderId: '533826474106'
    };

    firebase.initializeApp(config);
  }
  render() {
  	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  	return (
  	  <Provider store={store}>
  	    <Router />
  	  </Provider>
  	);
  }
}

export default App; 