import { createGlobalStyle } from 'styled-components'
import './normalize.css'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6, p, ul, ol, li, figure, blockquote {
  margin: 0;
  padding: 0;
  }
  html {
  font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight:${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  img, video {
  max-width: 100%;
  height: auto;
  display: block;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  button {
    cursor: pointer;
  }
    
  html, body {
  height: 100%;
}
`

export default GlobalStyles
