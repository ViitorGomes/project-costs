import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Heading } from '../../components/style/elements/Typoghaphy/style';
import { MdOutlineAdd } from "react-icons/md";
import Button from '../../components/Button';
import { CustomMainContainer } from './style'

function index() {

  const [projects, setProjects] = useState(localStorage.getItem('projects') || [])

  return <CustomMainContainer>
      <header>
        <Heading level={2}>Projects</Heading>
        {projects.length > 0 && <Link to="new-project">
          <Button type="button" styleType="active" cornerStyle="basic">
            New project <MdOutlineAdd/>
          </Button>
        </Link>}
      </header>
      <Outlet context={{projects}} />
  </CustomMainContainer>;
}

export default index;
