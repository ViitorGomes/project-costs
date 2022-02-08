import styled from 'styled-components'
import { FlexContainer, MainContainer } from '../../components/Container/style'
import { SettingsNavegation } from './SettingsNavegation/style'

export const SettingsMainContainer = styled(MainContainer)`

    > ${FlexContainer} {
        
        > * {
            width: 100%;
        }

        @media screen and (min-width: 960px) {
            flex-flow: row;

            > *:last-child {
                flex-basis: calc(100% - 396px);
            }

            ${SettingsNavegation} {
                flex-basis: 360px;
            }
        }
    }

`