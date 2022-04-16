import React, { useEffect, useCallback, useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "./messageContext";

export const ProjectsContext = createContext(null)

export function ProjectsProvider({children}) {
    const [ projects, setProjects ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const navigate = useNavigate()
    const { handleNewMessage } = useContext(MessageContext)

    // projects request
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }

        fetch('http://localhost:5000/projects', options)
            .then(res => res.json())
            .then(json => {
                setProjects(json)
                setLoading(false)
            })
            .catch(err => {
                handleNewMessage({
                    type: 'error',
                    message: 'Error on projects request'
                })
            })
    }, [])

    // Handle new project
    const handleNewProject = useCallback((projectToPush) => {
        const newProject = {
            id: Date.now(),
            name: projectToPush.name,
            budget: Number(projectToPush.budget
                .replace(/\./g, '')
                .replace(/\,/g, '.')),
            categories: projectToPush.categories,
            description: projectToPush.description,
            services: [],
            costs: 0,
            status: 'not started',
        }

        const opitions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProject)
        }

        fetch('http://localhost:5000/projects', opitions)
            .then(res => res.json())
            .then(json => {
                setProjects(prev => [...prev, newProject])
                navigate('/projects')
                handleNewMessage({
                    type: 'success',
                    message: 'New project created'
                })
            })
            .catch(err => {
                handleNewMessage({
                    type: 'error',
                    message: 'Error when trying to create a new project'
                })
            })
    }, [])

    // Handle delete project
    const handleDeleteProject = useCallback(async (projectToDelete) => {
        const opitions = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        }

        fetch(`http://localhost:5000/projects/${projectToDelete.id}`, opitions)
            .then(res => {
                setProjects(prev => prev.filter(project => project.id !== projectToDelete.id))
                handleNewMessage({
                    type: 'success',
                    message: 'Project deleted'
                })
            })
            .catch(err => {
                handleNewMessage({
                    type: 'error',
                    message: 'Error when trying to delete the project'
                })
            })
    }, [])

    // Handle edit project
    const handleEditProject = useCallback(async (projectToEdit) => {
        
        projectToEdit.budget = Number(projectToEdit.budget
            .toString()
            .replace(/\./g, '')
            .replace(/\,/g, '.'))

        const opitions = {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(projectToEdit)
        }

        fetch(`http://localhost:5000/projects/${projectToEdit.id}`, opitions)
            .then(res => {
                setProjects(prev => prev.map(project => {
                    return project.id === projectToEdit.id 
                        ? projectToEdit
                        : project
                }))
                handleNewMessage({
                    type: 'success',
                    message: 'Project edited'
                })
            })
            .catch(err => {
                handleNewMessage({
                    type: 'error',
                    message: 'Error when trying to edit the project'
                })
            })
    }, [])


    return <ProjectsContext.Provider value={{
        projects,
        loading,
        handleNewProject,
        handleEditProject,
        handleDeleteProject
    }}>
        {children}
    </ProjectsContext.Provider>
}