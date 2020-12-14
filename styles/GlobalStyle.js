import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html,
body {
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  font-family: Helvetica, sans-serif;
  position: relative;
  overflow-x: hidden;
  overflow-y: ${(props) => (props.menuActive ? 'hidden' : 'scroll')};
  background: url('./doodle2.svg');
  background-size: cover;
  background-position: center;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #1e1e1e;
  list-style: none;
  user-select: none;
  outline: none;
}


`
