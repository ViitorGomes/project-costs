import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import AppRoutes from './routers';
import Header from './components/layout/Header';
import Light from './components/style/Themes/light';
import Dark from './components/style/Themes/dark';
import Footer from './components/layout/Footer';
import Transitions from './components/style/animations/Transition/style';

const App = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 90px minmax(calc(100vh - 90px), 1fr) 120px;
  background-color: ${props => props.theme.background.bg2};
  transition: background-color ${Transitions._300ms};
`

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

  return <ThemeProvider theme={theme}>
    <App>
      <Header themeCb={toggleTheme}/>
      <>
        <AppRoutes/>
      </>
      <Footer />
    </App>
  </ThemeProvider>
}
