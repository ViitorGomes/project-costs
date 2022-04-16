import React from 'react';
import { Home } from './style'
import { Heading, Span, P } from '../../components/style/elements/Typoghaphy/style';
import { Link } from 'react-router-dom'
import { MdArrowForward } from "react-icons/md";
import Button from '../../components/buttons/DefaultButton'

function index() {
  return (
    <Home>
        <Heading level={1}>Welcome to <Span>Costs</Span></Heading>
        <P>Start managing your projects right now!</P>
        <Link to="/projects">
          <Button type="button" styleType="active" cornerStyle="basic">
            Projects page  <MdArrowForward size={"1.6rem"}/>
          </Button>
        </Link>
    </Home>
  )
}

export default index;
