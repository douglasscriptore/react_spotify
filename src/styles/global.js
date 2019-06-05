import { createGlobalStyle } from 'styled-components'
import 'rc-slider/assets/index.css'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-fornt-smoothing: antialiased !important;
  background: #181818;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
}

button {
  cursor: pointer;
}
`

export default GlobalStyle
