import React from 'react'
import { Container, Header, SongList } from './styles'

import ClockIcon from '../../assets/images/clock.svg'
import PlusIcon from '../../assets/images/plus.svg'

const Playlist = () => (
  <Container>
    <Header>
      <img
        src='https://upload.wikimedia.org/wikipedia/pt/b/b5/ImagineDragonsEvolve.jpg'
        alt='playlist'
      />

      <div>
        <span> PLAYLIST </span>
        <h1>Imagine Dragons</h1>
        <p>12 músicas</p>
        <button>Play</button>
      </div>
    </Header>

    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Titulo</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt='duracao' />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt='Adicionar' />
          </td>
          <td>Next To Me</td>
          <td>Imagine Dragons</td>
          <td>Envolve</td>
          <td>3:50</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt='Adicionar' />
          </td>
          <td>Next To Me</td>
          <td>Imagine Dragons</td>
          <td>Envolve</td>
          <td>3:50</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt='Adicionar' />
          </td>
          <td>Next To Me</td>
          <td>Imagine Dragons</td>
          <td>Envolve</td>
          <td>3:50</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
)

export default Playlist
