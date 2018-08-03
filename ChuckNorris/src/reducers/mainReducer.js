import * as Types from '../constants/actionTypes';

const initialState = {
  jokes: [],
  jokeCount: '',
  firstName: '',
  lastName: '',
  jokeTypeOptions: [],
  jokeTypes: [],
  jokesLoading: false,
  jokeTypesLoading: false
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_JOKES_REQUEST:
      return {
        ...state,
        jokesLoading: true
      };
    case Types.GET_JOKE_TYPES_REQUEST:
      return {
        ...state,
        jokeTypeOptionsLoading: true
      };
    case Types.GET_JOKE_TYPES_SUCCESS:
      return {
        ...state,
        jokeTypeOptions: action.jokeTypes,
        jokeTypes: action.jokeTypes,
        jokeTypeOptionsLoading: false
      };
    case Types.GET_JOKES_SUCCESS:
      return {
        ...state,
        jokes: action.jokes,
       jokesLoading: false
      };
    case Types.CHANGE_JOKE_COUNT:
      let jokeCount = action.jokeCount;
      if (action.jokeCount < 0 || isNaN(action.jokeCount)) {
        jokeCount = 1;
      }
      return {
        ...state,
        jokeCount
      };
    case Types.CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      };
    case Types.CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName
      };
    case Types.CHANGE_JOKE_TYPES:
      let updatedJokeTypes = [...state.jokeTypes];
      let indexOfJokeType = updatedJokeTypes.indexOf(action.jokeType);
      if (indexOfJokeType >= 0) {
        updatedJokeTypes.splice(indexOfJokeType, 1);
      } else {
        updatedJokeTypes.push(action.jokeType)
      }
      if (updatedJokeTypes.length === 0) {
        updatedJokeTypes = state.jokeTypeOptions;
      }
      return {
        ...state,
        jokeTypes: updatedJokeTypes
      };
    default:
      return state;
  }
};

export default mainReducer;