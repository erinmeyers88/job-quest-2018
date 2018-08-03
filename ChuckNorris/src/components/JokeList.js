import React from 'react';
import StyledJokeList from './StyledJokeList';
import StyledJoke from './StyledJoke';

const JokeList = ({jokes}) => <StyledJokeList>
  {jokes.map(({joke}) => <StyledJoke key={joke}>{joke}</StyledJoke>)}
</StyledJokeList>;

export default JokeList;