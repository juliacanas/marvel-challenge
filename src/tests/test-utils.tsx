import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

const renderWithProvider = (ui: ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {ui}
      </ThemeProvider>
    </MemoryRouter>,
  )
}

export { renderWithProvider }
