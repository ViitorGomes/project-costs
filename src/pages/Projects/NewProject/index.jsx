import React, { useContext, useEffect } from 'react'
import ProjectForm from '../../../components/ProjectForm'
import { useOutletContext } from 'react-router-dom'
import { FormContainer } from './style'
import { Heading } from '../../../components/style/elements/Typoghaphy/style'
import { ProjectsContext } from '../../../context/projectsContext'

function index() {
  const setShowingButton = useOutletContext()
  const { handleNewProject } = useContext(ProjectsContext)

  useEffect(() => {
    setShowingButton(false)

    return () => {
      setShowingButton(true)
    }
  }, [])


  return (
    <FormContainer>
        <Heading level={3}>New project</Heading>
        <ProjectForm 
          handleProjectSubmit={handleNewProject}
        />
    </FormContainer>
  )
}

export default index