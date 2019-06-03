import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './config/reactotron'

import GlobalStyle from './styles/global.js'

import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Header from './components/Header'

import { Wrapper, Conteiner, Content } from './styles/components'

import Routes from './routes'
import store from './store'

console.tron.log('Test')

/**
 * O Provider ta por fora p/ caso queramos controlar as informações de rota pelo Redux
 */
const App = () => (
  <Provider store={store}>
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
  </Provider>
)

export default App
