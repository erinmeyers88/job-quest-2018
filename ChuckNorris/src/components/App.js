import React from 'react';
import StyledButton from './StyledButton';
import StyledInputSection from './StyledInputSection';
import StyledInput from './StyledInput';
import StyledHeader from './StyledHeader';
import StyledImage from './StyledImage';
import StyledLabel from './StyledLabel';
import StyledLoader from './StyledLoader';
import JokeList from './JokeList';
import Chuck from '../chuck.png';

const App = ({jokeCount, changeJokeCount, firstName, changeFirstName, lastName, changeLastName, jokeTypeOptions, jokeTypes, changeJokeTypes, getJokes, jokes, jokesLoading, jokeTypeOptionsLoading}) =>
  <div style={{height: '100%'}}>
    {!jokeTypeOptionsLoading && <StyledHeader>
      <StyledImage src={Chuck} id="chuck" isSpinning={jokesLoading}/>

      <StyledInputSection>
        <StyledInput id="jokeCount" placeholder="How many jokes?" value={jokeCount}
                     onChange={(e) => changeJokeCount(e.target.value)}/>
        <StyledInput id="firstName" placeholder="First Name" value={firstName}
                     onChange={(e) => changeFirstName(e.target.value)}/>
        <StyledInput id="lastName" placeholder="Last Name" value={lastName}
                     onChange={(e) => changeLastName(e.target.value)}/>
        {
          jokeTypeOptions.map(type => <React.Fragment key={type}>
            <StyledInput type="checkbox" value={type} checked={jokeTypes.indexOf(type) >= 0}
                         onChange={(e) => changeJokeTypes(e.target.value)}/>
            <StyledLabel>{type.charAt(0).toUpperCase() + type.substr(1)} Jokes</StyledLabel>
          </React.Fragment>)
        }
      </StyledInputSection>

      <StyledButton
        onClick={
          (e) => {
            e.preventDefault();
            getJokes();
          }
        }>Get Jokes</StyledButton>

    </StyledHeader>}
    {!jokeTypeOptionsLoading && <JokeList jokes={jokes}/>}
    {jokeTypeOptionsLoading && <StyledLoader>
      <StyledImage src={Chuck} id="chuck" isSpinning/>
    </StyledLoader>}

  </div>;

export default App;
