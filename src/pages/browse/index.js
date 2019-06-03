import React from 'react'

import { Container, Title, List, Playlist } from './styles'

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to='/playlists/1'>
        <img
          src='https://upload.wikimedia.org/wikipedia/pt/b/b5/ImagineDragonsEvolve.jpg'
          alt='playlist'
        />
        <strong> Essa é top </strong>
        <p>Relaxe enquanto você programa ouvindo as melhores</p>
      </Playlist>
      <Playlist to='/playlists/1'>
        <img
          src='https://upload.wikimedia.org/wikipedia/pt/b/b5/ImagineDragonsEvolve.jpg'
          alt='playlist'
        />
        <strong> Essa é top </strong>
        <p>Relaxe enquanto você programa ouvindo as melhores</p>
      </Playlist>
      <Playlist to='/playlists/1'>
        <img
          src='https://upload.wikimedia.org/wikipedia/pt/b/b5/ImagineDragonsEvolve.jpg'
          alt='playlist'
        />
        <strong> Essa é top </strong>
        <p>Relaxe enquanto você programa ouvindo as melhores</p>
      </Playlist>
      <Playlist to='/playlists/1'>
        <img
          src='https://upload.wikimedia.org/wikipedia/pt/b/b5/ImagineDragonsEvolve.jpg'
          alt='playlist'
        />
        <strong> Essa é top </strong>
        <p>Relaxe enquanto você programa ouvindo as melhores</p>
      </Playlist>
    </List>
  </Container>
)

export default Browse
