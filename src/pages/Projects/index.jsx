import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Projects, ProjectHeader } from './style'
import { Heading } from '../../components/style/elements/Typoghaphy/style';
import { MdOutlineAdd } from "react-icons/md";
import Button from '../../components/Button';

function index() {

  const projects = [
    {
      id: 111456465645,
      name: "projeto 1",
      category: "Infra",
      budget: 5000,
      description: "Descrição projeto 1"
    },
    {
      id: 111456465646,
      name: "projeto 2",
      category: "Desenvolvimento",
      budget: 6000,
      description: "Descrição projeto 1"
    },
    {
      id: 111456465647,
      name: "projeto 3",
      category: "Finança",
      budget: 9000.90,
      description: "Descrição projeto 1"
    },
  ]

  /* const [projects, setProjects] = useState(localStorage.getItem('projects') || []) */

  return <Projects>
      <ProjectHeader>
        <Heading level={2}>Projects</Heading>
        {projects.length > 0 && <Link to="new-project">
          <Button type="button" styleType="active" cornerStyle="basic">
            New project <MdOutlineAdd/>
          </Button>
        </Link>}
      </ProjectHeader>
      <Outlet context={{projects}} />
  </Projects>;
}

export default index;
