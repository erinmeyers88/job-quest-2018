import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getJokes, changeJokeCount, changeFirstName, changeLastName, getJokeTypes, changeJokeTypes} from '../actions';
import App from '../components/App';

class AppContainer extends Component {

  componentDidMount() {
    this.props.getJokeTypes();
  }

  render() {
    return <App {...this.props}/>;
  }

}

const mapStateToProps = (state) => ({
  jokes: state.main.jokes,
  jokeCount: state.main.jokeCount,
  firstName: state.main.firstName,
  lastName: state.main.lastName,
  jokeTypeOptions: state.main.jokeTypeOptions,
  jokeTypes: state.main.jokeTypes,
  jokesLoading: state.main.jokesLoading,
  jokeTypeOptionsLoading: state.main.jokeTypeOptionsLoading
});

const mapDispatchToProps = {
  getJokes,
  changeJokeCount,
  changeFirstName,
  changeLastName,
  getJokeTypes,
  changeJokeTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);