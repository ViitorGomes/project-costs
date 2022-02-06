import React from 'react';
import { Home } from './style'
import { Heading, Span, P } from '../../components/style/elements/Typoghaphy/style';
import { Link } from 'react-router-dom'
import { MdOutlineAdd } from "react-icons/md";
import Button from '../../components/buttons/DefaultButton'

function index() {
  return <Home>
      <Heading level={1}>Welcome to <Span>Costs</Span></Heading>
      <P>Start managing your projects right now!</P>
      <Link to="/projects/new-project">
        <Button type="button" styleType="active" cornerStyle="basic">
          New project  <MdOutlineAdd size={"1.6rem"}/>
        </Button>
      </Link>
  </Home>;
}

export default index;
