// import 'modern-normalize/modern-normalize.css';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Container from './components/Container';
// import Spinner from '../src/components/Spinner';
// import ContactList from './components/ContactList';
// import ContactForm from './components/ContactForm';
// import Filter from './components/Filter';
// import Logo from './components/Logo';
// import { connect } from 'react-redux';
// import {
//   phoneBookOperations,
//   phoneBookSelectors,
// } from '../src/redux/phoneBook';
//====== =======
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import PhoneBookPage from './views/PhoneBookPage';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import Container from './components/Container';
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={PhoneBookPage} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
