import styled from 'styled-components'
import { FlexContainer, MainContainer } from '../../components/Container/style'
import { SettingsNavegation } from './SettingsNavegation/style'

export const SettingsMainContainer = styled(MainContainer)`

    > ${FlexContainer} {
        
        > * {
            width: 100%;
        }

        @media screen and (min-width: 760px) {
            flex-flow: row;

            > *:last-child {
                flex-basis: calc(100% - 416px);
            }

            ${SettingsNavegation} {
                flex-basis: 360px;
            }
        }
    }

`