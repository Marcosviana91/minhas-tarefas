import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  /* body {
    padding: 32px 32px 32px 32px;
  } */

  #root {
    display: grid;
    grid-template-columns: 244px auto;
    gap: 40px;
  }
`

export default EstiloGlobal
