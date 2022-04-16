import React, { useState, useEffect, memo } from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routers';
import Header from './components/layout/Header';
import Light from './components/style/Themes/light';
import Dark from './components/style/Themes/dark';
import Footer from './components/layout/Footer';
import { StyledScroll } from './components/style/elements/Scroll/style';
import SubHeader from './components/layout/SubHeader';
import { MenuProvider } from './context/menuContext';
import { CategoriesProvider } from './context/categoriesContext';
import { ProjectsProvider } from './context/projectsContext';
import { App } from './style';
import ContentContainer from './components/MainContentContainer';
import { MessageProvider } from './context/messageContext';
import Messages from './components/Message'

export default function index() {
  const [ theme, setTheme ] = useState(() => {
    const storedTheme = JSON.parse(localStorage.getItem('theme'))

    if (storedTheme) {
      return storedTheme === 'light' ? Light : Dark
    }

    return Light
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme.title))
  }, [theme.title])

  function toggleTheme() {
    setTheme(theme.title === "light" ? Dark : Light)
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledScroll />
      <App>
        <MenuProvider>
          <Header/>
          <ContentContainer>
            <SubHeader themeCb={toggleTheme} currentTheme={theme.title}/>
            <MessageProvider>
            <CategoriesProvider>
            <ProjectsProvider>
              <AppRoutes/>
              <Messages />
            </ProjectsProvider>
            </CategoriesProvider>
            </MessageProvider>
            <Footer />
          </ContentContainer>
        </MenuProvider>
      </App>
    </ThemeProvider>
  )
}
