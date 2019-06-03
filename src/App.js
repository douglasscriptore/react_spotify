import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global.js'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Conteiner, Content } from './styles/components'

import Routes from './routes'

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Conteiner>
        <Sidebar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Conteiner>
      <Player />
    </Wrapper>
  </BrowserRouter>
)

export default App
