import styled, {keyframes} from 'styled-components';

const rotate360 = keyframes`
from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const StyledImage = styled.img`
height: 150px;
justify-self: start;
animation: ${props => props.isSpinning ? `${rotate360} infinite 1.5s linear` : ''}
`;

export default StyledImage;