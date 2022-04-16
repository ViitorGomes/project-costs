import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Heading } from '../../../components/style/elements/Typoghaphy/style'
import  Button  from '../../../components/buttons/DefaultButton'
import { MdOutlineAdd } from "react-icons/md";
import { ProjectsHeader } from './style'
import { ProjectsContext } from '../../../context/projectsContext';

function index({showingButton}) {
    const { projects } = useContext(ProjectsContext)

    return (
        <ProjectsHeader>
            <Heading level={2}>Projects</Heading>
            {projects.length > 0 && showingButton 
                ? <Link to="register-project">
                    <Button type="button" styleType="active" cornerStyle="basic">
                    New project <MdOutlineAdd/>
                    </Button>
                </Link>
                : null}
        </ProjectsHeader>
    )
}

export default index