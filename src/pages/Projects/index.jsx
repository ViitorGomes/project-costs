import React, { useState, useContext } from 'react'
import { MainContainer } from '../../components/Container/style'
import ProjectsHeader from './ProjectsHeader'
import { Outlet } from 'react-router-dom'

function index() {

  const [showingButton, setShowingButton] = useState(true)

  return (
    <MainContainer>
      <ProjectsHeader showingButton={showingButton} />
      <Outlet context={setShowingButton}/>
    </MainContainer>
  )
}

export default index