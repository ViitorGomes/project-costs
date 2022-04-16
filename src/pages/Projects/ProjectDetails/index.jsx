import React, { useContext, useEffect } from 'react'
import { useParams, useOutletContext } from 'react-router-dom'
import { ProjectsContext } from '../../../context/projectsContext'
import Loader from '../../../components/Loader'
import { DetailsContainer, InformationsContainer, ValueCardsWrapper, InformationWrapper, ServicesWrapper } from './style'
import { useState } from 'react/cjs/react.development'
import { Heading, P } from '../../../components/style/elements/Typoghaphy/style'
import DefaultButton from '../../../components/buttons/DefaultButton'
import ValueCard from '../../../components/cards/ValueCard'
import CategoryItem from '../../../components/CategoryItem'
import { FlexContainer } from '../../../components/Container/style'
import NewServiceForm from './NewServiceForm'
import EditProjectForm from './EditProjectForm'

function index() {
    const { id } = useParams()
    const { projects, loading } = useContext(ProjectsContext)
    const setShowingButton = useOutletContext()
    const selectedProject = projects.find(project => project.id === Number(id))
    const [ showNewServiceWindow, setShowNewServiceWindow ] = useState(false)
    const [ showEditWindow, setShowEditWindow ] = useState(false)

    useEffect(() => {
        setShowingButton(false)

        return () => {
            setShowingButton(true)
        }
    }, [])

    return (
        <DetailsContainer>
            {!loading 
                ? <>
                    <InformationsContainer>
                        <header>
                            <Heading level={3}>{selectedProject.name}</Heading>
                            <DefaultButton
                                type="button"
                                styleType="active"
                                cornerStyle="basic"
                                onClick={ e => setShowEditWindow(true) }
                            >
                                Edit project
                            </DefaultButton>
                        </header>
                        <div>
                            <ValueCardsWrapper>
                                <ValueCard label='Budget' value={selectedProject.budget} />
                                <ValueCard label='Costs' value={selectedProject.costs} />
                            </ValueCardsWrapper>
                            <InformationWrapper>
                                <Heading level={5}>Categories:</Heading>
                                <div>
                                    {selectedProject.categories.map(category => <CategoryItem
                                        key={category.id}
                                        categoryName={category.name} 
                                        categoryColor={category.color}
                                    />)}
                                </div>
                            </InformationWrapper>
                            <InformationWrapper>
                                <Heading level={5}>Description:</Heading>
                                <div>
                                    {selectedProject.description 
                                        ? <P>{selectedProject.description}</P>
                                        : <FlexContainer justify="center" align="center">
                                            <P>There is no description</P>
                                        </FlexContainer>
                                    }
                                </div>
                            </InformationWrapper>
                            <ServicesWrapper>
                                <header>
                                    <Heading level={5}>Services:</Heading>
                                    <DefaultButton 
                                        type="button" 
                                        styleType="active" 
                                        cornerStyle="basic"
                                        onClick={e => setShowNewServiceWindow(true)}
                                    >New service</DefaultButton>
                                </header>
                                <div>
                                    {selectedProject.services.length > 0
                                        ? <ul></ul>
                                        : <FlexContainer justify="center" align="center">
                                            <P>There is no services</P>
                                        </FlexContainer>
                                    }
                                </div>
                            </ServicesWrapper>
                        </div>
                    </InformationsContainer>
                    {showNewServiceWindow && <NewServiceForm 
                        clickOutCb={ e => setShowNewServiceWindow(false)}
                    />}
                    {showEditWindow && <EditProjectForm 
                        clickOutCb={ e => setShowEditWindow(false)}
                        project={selectedProject}
                    />}
                </>
                    
                : <Loader size='85px' />
            }
        </DetailsContainer>
    )
}

export default index