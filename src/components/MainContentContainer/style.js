import styled, { css }  from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  transition: all .3s;

  ${props => props.displaingMenu && css`
    padding-left: 260px;
  `}

  > * {
    width: 100vw;
  }

  > main {
    min-height: calc(100vh - 56px);
  }

  @media screen and (min-width: 860px) {
    > * {
      width: 100%;
    }
  }
  
`