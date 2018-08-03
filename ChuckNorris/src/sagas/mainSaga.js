import {all, call, put, takeEvery, select} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import axiosUtils from '../utils/axiosUtils';
import * as Types from '../constants/actionTypes';

const getJokeCountFromState = (state) => state.main.jokeCount;
const getFirstNameFromState = (state) => state.main.firstName;
const getLastNameFromState = (state) => state.main.lastName;
const getJokeTypesFromState = (state) => state.main.jokeTypes;

function* getJokes() {

  const jokeCountFromState = yield select(getJokeCountFromState);
  const firstNameFromState = yield select(getFirstNameFromState);
  const lastNameFromState = yield select(getLastNameFromState);
  const jokeTypesFromState = yield select(getJokeTypesFromState);

  try {
    let jokeCount = jokeCountFromState;
    if (jokeCountFromState === '' || jokeCountFromState < 0) {
      jokeCount = 1
    }
    let firstName = firstNameFromState;
    let lastName = lastNameFromState;
    if (firstNameFromState === '' && lastNameFromState === '') {
      firstName = 'Chuck';
      lastName = 'Norris';
    }
    const endpoint = 'http://api.icndb.com/jokes/random/' + jokeCount + '?escape=javascript&firstName=' + firstName + '&lastName=' + lastName + '&limitTo=' + jokeTypesFromState;
    const jokes = yield call(axiosUtils.get, endpoint);
    yield call(delay, 500);
    yield put({type: Types.GET_JOKES_SUCCESS, jokes: jokes.value});
  } catch (err) {
    yield put({type: Types.GET_JOKES_FAILURE, err});
  }
}

function* getJokeTypes() {
  try {
    const endpoint = 'http://api.icndb.com/categories';
    const jokeTypes = yield call(axiosUtils.get, endpoint);
    yield call(delay, 1300);
    yield put({type: Types.GET_JOKE_TYPES_SUCCESS, jokeTypes: jokeTypes.value});
  } catch (e) {
    yield put({type: Types.GET_JOKE_TYPES_FAILURE});
  }
}

export default function* () {
  yield all([
    takeEvery(Types.GET_JOKES_REQUEST, getJokes),
    takeEvery(Types.GET_JOKE_TYPES_REQUEST, getJokeTypes)
  ])
}