import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Heading } from '../../components/style/elements/Typoghaphy/style';
import { MdOutlineAdd } from "react-icons/md";
import Button from '../../components/buttons/DefaultButton';
import { ProjectsMainContainer } from './style'
import { useCallback, useEffect } from 'react/cjs/react.development';

function index() {

  const redirectToProjectPage = useNavigate()

  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects")) || [])
  const [showingButton, setShowingButton] = useState(true)

  const handleNewProject = useCallback(newProject => {
    setProjects(prev => [...prev, newProject])
    redirectToProjectPage("/projects")
  }, [])

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects))
  }, [projects])

  return <ProjectsMainContainer>
      <header>
        <Heading level={2}>Projects</Heading>
        {projects.length > 0 && showingButton ? <Link to="new-project">
          <Button type="button" styleType="active" cornerStyle="basic">
            New project <MdOutlineAdd/>
          </Button>
        </Link> : null}
      </header>
      <Outlet context={{projects, handleNewProject, setShowingButton}} />
  </ProjectsMainContainer>;
}

export default index;
