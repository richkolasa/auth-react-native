import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAd8iYHSmF__XJhLUkpmnGbDyp2e32zkhk',
      authDomain: 'authentication-cdf8e.firebaseapp.com',
      databaseURL: 'https://authentication-cdf8e.firebaseio.com',
      storageBucket: 'authentication-cdf8e.appspot.com',
      messagingSenderId: '557916415950'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
