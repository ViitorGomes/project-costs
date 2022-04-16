import styled from 'styled-components';

export const App = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${props => props.theme.background.bg2};
  transition: background-color ease-in .3s;
  overflow-x: hidden;
`