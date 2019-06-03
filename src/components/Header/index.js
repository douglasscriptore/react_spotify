import React from 'react'

import { Container, Search, User } from './styles'

const Header = () => (
  <Container>
    <Search>
      <input placeholder='Search' />
    </Search>

    <User>
      <img
        src='https://avatars1.githubusercontent.com/u/3733634?v=4'
        alt='Avatar'
      />
      Douglas Scriptore
    </User>
  </Container>
)

export default Header
