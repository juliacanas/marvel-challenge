import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { FavoritesProvider } from '../context/FavoritesProvider'

const renderWithProvider = (ui: ReactElement) => {
  return render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FavoritesProvider>{ui}</FavoritesProvider>
      </ThemeProvider>
    </MemoryRouter>,
  )
}

export { renderWithProvider }
