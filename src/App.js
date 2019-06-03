import React from 'react'

import GlobalStyle from './styles/global.js'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Conteiner, Content } from './styles/components'

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Conteiner>
      <Sidebar />
      <Content>
        <Header />
      </Content>
    </Conteiner>
    <Player />
  </Wrapper>
)

export default App
