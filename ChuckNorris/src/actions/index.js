import * as Types from '../constants/actionTypes';

export const getJokes = () => ({type: Types.GET_JOKES_REQUEST});
export const getJokeTypes = () => ({type: Types.GET_JOKE_TYPES_REQUEST});
export const changeJokeCount = (jokeCount) => ({type: Types.CHANGE_JOKE_COUNT, jokeCount});
export const changeFirstName = (firstName) => ({type: Types.CHANGE_FIRST_NAME, firstName});
export const changeLastName = (lastName) => ({type: Types.CHANGE_LAST_NAME, lastName});
export const changeJokeTypes = (jokeType) => ({type: Types.CHANGE_JOKE_TYPES, jokeType});
