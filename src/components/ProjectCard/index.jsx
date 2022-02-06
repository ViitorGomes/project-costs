import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { Heading, Span } from '../style/elements/Typoghaphy/style';
import { FlexContainer } from '../Container/style';
import { ProjectCard, ProjectInformationsWrapper } from './style';
import Button from '../buttons/DefaultButton'

function index({projectName, projectBudget, projectCategory}) {

    return <ProjectCard>
        <Heading level={2}>{projectName}</Heading>
        <ProjectInformationsWrapper>
            <FlexContainer justify="space-between">
                <Span>
                    Budget:
                </Span>
                <Span>
                    {projectBudget.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                </Span>
            </FlexContainer>
            <FlexContainer justify="space-between">
                <Span>
                    Category:
                </Span>
                <Span>
                    {projectCategory}
                </Span>
            </FlexContainer>
            <FlexContainer justify="space-between">
                <Button type="button" styleType="active" cornerStyle="basic">
                   <MdOutlineModeEdit/> Edit
                </Button>
                <Button type="button" styleType="secondary" cornerStyle="basic">
                   <MdDelete/> Delete
                </Button>
            </FlexContainer>
        </ProjectInformationsWrapper>
    </ProjectCard>;
}

index.propTypes = {
    projectName: PropTypes.string.isRequired,
    projectBudget: PropTypes.number.isRequired,
    projectCategory: PropTypes.string.isRequired,
}

export default index;
