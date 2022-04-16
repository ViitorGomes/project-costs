import React, { useMemo } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ProjectCard, InformationsContainer, CardButtonsContainer, CategoriesContainer, StatusMark } from './style';
import { FlexContainer } from '../../Container/style';
import { Heading, Span } from '../../style/elements/Typoghaphy/style';
import DefaltButton from '../../buttons/DefaultButton'
import { MdOutlineVisibility, MdDeleteOutline, MdBookmark } from "react-icons/md";
import CategoryItem from '../../CategoryItem'

function index({ project, handleDelete }) {

    return useMemo(() => (
        <ProjectCard>
            <header>
                <Heading level={2}>{project.name}</Heading>
                <StatusMark title={project.status} status={project.status}>
                    <MdBookmark />
                </StatusMark>
            </header>
            <InformationsContainer>
                <FlexContainer justify="space-between" gap="16px">
                    <Span>
                        Budget:
                    </Span>
                    <Span>
                        {project.budget.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </Span>
                </FlexContainer>
                <FlexContainer justify="space-between" gap="16px">
                    <Span>
                        Services cost:
                    </Span>
                    <Span>
                        {project.costs.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </Span>
                </FlexContainer>
                <CategoriesContainer>
                    <Span>
                        Categories:
                    </Span>
                    <div>
                        {project.categories.map(category => <CategoryItem 
                            key={category.id}
                            categoryName={category.name}
                            categoryColor={category.color}
                        />)}
                    </div>
                </CategoriesContainer>
            </InformationsContainer>
            <CardButtonsContainer>
                <Link to={`/projects/details/${project.id}`}>
                    <DefaltButton 
                        type="button" 
                        styleType="active" 
                        cornerStyle="basic"
                    >
                        <MdOutlineVisibility/> Details
                    </DefaltButton>
                </Link>
                <DefaltButton
                    type="button" 
                    styleType="secondary" 
                    cornerStyle="basic"
                    onClick={handleDelete}
                >
                    <MdDeleteOutline/> Delete
                </DefaltButton>
            </CardButtonsContainer>
        </ProjectCard>
    ), [])
}

index.propTypes = {
    project: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
}

export default index