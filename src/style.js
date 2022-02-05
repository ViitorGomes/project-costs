import styled from 'styled-components';
import Transitions from './components/style/animations/Transition/style';

export const App = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${props => props.theme.background.bg2};
  transition: background-color ease-in ${Transitions._300ms};
  overflow-x: hidden;

`