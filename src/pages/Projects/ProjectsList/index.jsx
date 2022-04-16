import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProjectListContainer, ProjectList, NoProjectWarning } from './style'
import { P } from '../../../components/style/elements/Typoghaphy/style'
import Button from '../../../components/buttons/DefaultButton'
import { MdOutlineAdd } from "react-icons/md"
import ProjectCard from '../../../components/cards/ProjectCard'
import { ProjectsContext } from '../../../context/projectsContext'
import Loader from '../../../components/Loader'

function index() {
  const { projects, loading, handleDeleteProject } = useContext(ProjectsContext)

  return (
    <ProjectListContainer>
      {
        !loading 
          ? projects.length > 0 
            ? <ProjectList>
              {projects.map(project => <li key={project.id}>
                <ProjectCard project={project} handleDelete={e => handleDeleteProject(project)}/>
              </li>)}
            </ProjectList>
            : <NoProjectWarning>
              <P>There are no projects created</P>
              <Link to="/projects/register-project">
                <Button type="button" styleType="active" cornerStyle="basic">
                  New project <MdOutlineAdd size={"1.6rem"}/>
                </Button>
              </Link>
            </NoProjectWarning>
        :
          <Loader size='85px' />
      }
    </ProjectListContainer>
  )
}

export default index