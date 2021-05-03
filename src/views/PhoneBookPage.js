// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Container from '../components/Container';
// import TodoList from '../components/ContactList';
// import TodoEditor from '../components/TodoEditor';
// import Filter from '../components/Filter';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';
//========== ============
import 'modern-normalize/modern-normalize.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../components/Container';
import Spinner from '../components/Spinner';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import Logo from '../components/Logo';
import { connect } from 'react-redux';
import { phoneBookOperations, phoneBookSelectors } from '../redux/phoneBook';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class PhoneBookPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        <div style={barStyles}>
          <Logo />

          <ContactForm />

          <Filter />
        </div>
        {this.props.isLoadingContacts && <Spinner />}

        <ContactList />
      </Container>
    );
  }
}

PhoneBookPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => ({
  items: phoneBookSelectors.getAllItems(state),
  isLoadingContacts: phoneBookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBookPage);
