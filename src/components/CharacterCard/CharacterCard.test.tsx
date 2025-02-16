import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'
import { CharacterCard } from './CharacterCard'
import { CharacterClient } from '../../types/client/CharacterClient'
import { renderWithProvider } from '../../tests/test-utils'

describe('CharacterCard', () => {
  const mockCharacter: CharacterClient = {
    id: 1,
    name: '3-D Man',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg',
    },
  }

  it('should render the character name and image correctly', () => {
    const { getByText, getByRole } = renderWithProvider(
      <CharacterCard {...mockCharacter} />,
    )

    expect(getByText('3-D Man')).toBeInTheDocument()
    const image = getByRole('img')
    expect(image).toHaveAttribute(
      'src',
      'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
    )
  })

  it('should render unSelected icon', () => {
    const { getByLabelText } = renderWithProvider(
      <CharacterCard {...mockCharacter} />,
    )

    const unSelectedIcon = getByLabelText('icon')
    expect(unSelectedIcon).toBeInTheDocument()
  })
})
