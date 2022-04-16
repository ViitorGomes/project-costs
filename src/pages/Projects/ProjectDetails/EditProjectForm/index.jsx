import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useClickOut } from '../../../../hooks/useClickOut'
import { EditProjectContainer, EditProjectWindow } from './style'
import { Heading } from '../../../../components/style/elements/Typoghaphy/style'
import ProjectForm from '../../../../components/ProjectForm'
import { ProjectsContext } from '../../../../context/projectsContext'

function index({clickOutCb, project}) {
    const editWindowRef = useClickOut(() => {
        clickOutCb()
    })
    const { handleEditProject } = useContext(ProjectsContext)

    return (
        <EditProjectContainer>
            <EditProjectWindow ref={editWindowRef}>
                <Heading level={3}>Editing project</Heading>
                <ProjectForm 
                    project={project} 
                    handleProjectSubmit={handleEditSubmit}
                />
            </EditProjectWindow>
        </EditProjectContainer>
    )
}

index.propTypes = {
    clickOutCb: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
}

export default index