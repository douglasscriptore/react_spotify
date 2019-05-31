import React from 'react'

import GlobalStyle from './styles/global.js'

import Sidebar from './components/Sidebar'
import Player from './components/Player'

import { Wrapper, Conteiner } from './styles/components'

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Conteiner>
      <Sidebar />
    </Conteiner>
    <Player />
  </Wrapper>
)

export default App
