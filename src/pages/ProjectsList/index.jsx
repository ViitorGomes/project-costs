import React from 'react';
import { ProjectsContainer, ProjectList } from './style'
import { MdOutlineAdd } from "react-icons/md";
import { useOutletContext, Link } from 'react-router-dom';
import { P } from '../../components/style/elements/Typoghaphy/style';
import { FlexContainer } from '../../components/Container/style';
import Button from '../../components/Button';

function index() {
  const { projects } = useOutletContext()

  return <ProjectsContainer>
    {projects.length > 0 
      ? <ProjectList>
        {
          projects.map(project => <li key={project.projectId}>{project.name}</li>)
        }
        </ProjectList>
      : <FlexContainer justify="center" align="center" flow="column" gap="26px">
        <P>There are no projects created</P>
        <Link to="/projects/new-project">
          <Button type="button" styleType="active" cornerStyle="basic">
            New project <MdOutlineAdd size={"1.6rem"}/>
          </Button>
        </Link>
      </FlexContainer> 
    }
  </ProjectsContainer>;
}

export default index;
