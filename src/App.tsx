import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import router from './routes'
import theme from './styles/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
