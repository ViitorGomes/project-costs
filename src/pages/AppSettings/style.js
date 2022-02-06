import styled from 'styled-components'
import { FlexContainer, MainContainer } from '../../components/Container/style'

export const SettingsMainContainer = styled(MainContainer)`

    > ${FlexContainer} {
        
        > *:last-child{
            width: 100%;
        }
    }
    
`