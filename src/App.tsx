import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import router from './routes'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
