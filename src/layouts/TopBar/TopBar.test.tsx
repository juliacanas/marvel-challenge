import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'

import { renderWithProvider } from '../../tests/test-utils'
import { TopBar } from './TopBar'
import texts from '../../assets/texts.json'

describe('TopBar', () => {
  it('should render the marvel logo and navigate to home', () => {
    const { getByAltText, getAllByRole } = renderWithProvider(<TopBar />)

    const marvelLogo = getByAltText(texts.common.marvelLogo)
    expect(marvelLogo).toBeInTheDocument()

    const linkToHome = getAllByRole('link')[0]
    expect(linkToHome).toHaveAttribute('href', '/')
  })

  it('should render selected icon, count and navigate to favorites page', () => {
    const { getAllByRole, getByLabelText } = renderWithProvider(<TopBar />)

    const selectedIcon = getByLabelText('icon')
    expect(selectedIcon).toBeInTheDocument()

    const linkToFavorites = getAllByRole('link')[1]
    expect(linkToFavorites).toHaveAttribute('href', '/favorites')
  })
})
