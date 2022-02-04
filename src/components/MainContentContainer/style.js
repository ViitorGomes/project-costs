import styled, { css }  from "styled-components";
import { FlexContainer } from '../Container/style';
import Transitions from '../style/animations/Transition/style'

export const ContentContainer = styled(FlexContainer)`
  width: 100%;
  transition: all ${Transitions._300ms};

  ${props => props.displaingMenu && css`
    padding-left: 260px;
  `}

  > * {
    width: 100vw;
  }

  > main {
    height: calc(100vh - 56px);
  }

  @media screen and (min-width: 760px) {
    > * {
      width: 100%;
    }
  }
  
`