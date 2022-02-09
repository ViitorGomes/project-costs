import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineModeEdit, MdDelete } from "react-icons/md";
import { Heading, Span } from '../style/elements/Typoghaphy/style';
import { FlexContainer } from '../Container/style';
import { ProjectCard, ProjectInformationsWrapper, CategoriesContainer } from './style';
import Button from '../buttons/DefaultButton'
import { CategoriesContext } from '../../context/categoriesContext';
import  CategoryItem  from '../CategoryItem';

function index({projectName, projectBudget, projectCategories}) {

    const { categories } = useContext(CategoriesContext)

    const fullProjectCategories = categories.filter(category => projectCategories.some(projectCategory => projectCategory === category.id) ? category : null)

    return <ProjectCard>
        <Heading level={2}>{projectName}</Heading>
        <ProjectInformationsWrapper flow="column" gap="36px">
            <FlexContainer justify="space-between" gap="16px">
                <Span>
                    Budget:
                </Span>
                <Span>
                    {projectBudget.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                </Span>
            </FlexContainer>
            <FlexContainer justify="space-between" gap="16px">
                <Span>
                    Category:
                </Span>
                <CategoriesContainer justify="flex-end" align="flex-start" flexWrap="wrap" gap="6px">
                    {fullProjectCategories.map(category => <CategoryItem key={category.id} categoryName={category.name} categoryColor={category.color}/>)}
                </CategoriesContainer>
            </FlexContainer>
            <FlexContainer justify="space-between" gap="16px">
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
    projectCategories: PropTypes.array.isRequired,
}

export default index;
