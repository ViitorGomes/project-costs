import React, { useContext } from 'react'
import { P } from '../style/elements/Typoghaphy/style'
import { Message, MessageContainer } from './style'
import { MdDone, MdWarningAmber, MdErrorOutline, MdOutlineNotificationsActive, MdClear } from "react-icons/md";
import { FlexContainer } from '../Container/style'
import { SimpleButton } from '../buttons/SimpleButton/style'
import { MessageContext } from '../../context/messageContext';

function index() {

  const { message } = useContext(MessageContext)

  const icon = (msgType) => {
    switch (msgType) {
      case 'success':
        return <MdDone/>
      case 'warning':
          return <MdWarningAmber/>
      case 'error':
          return <MdErrorOutline/>
      default:
          return <MdOutlineNotificationsActive/>
    }
  }

  return (
    <MessageContainer>
      {message && <Message msgType={message.type}>
        <FlexContainer justify="center" align="center">
          {icon(message.type)}
        </FlexContainer>
        <FlexContainer align="center" justify="space-between">
          <P>{message.message}</P>
          <SimpleButton onClick={e => handleClearMessage()}>
            <MdClear/>
          </SimpleButton>
        </FlexContainer>
      </Message>}
    </MessageContainer>
  )
}

export default index