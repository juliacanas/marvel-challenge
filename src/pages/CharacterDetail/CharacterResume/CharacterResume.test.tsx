import { describe, it, expect } from 'vitest'
import { CharacterDetailProps } from './CharacterResume.types'
import { CharacterResume } from './CharacterResume'
import { renderWithProvider } from '../../../tests/test-utils'

const mockCharacter: CharacterDetailProps = {
  id: 1,
  name: 'A-Bomb',
  description:
    "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate!",
  thumbnail: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
}

describe('CharacterResume Component', () => {
  it('should render the character name', () => {
    const { getByText } = renderWithProvider(
      <CharacterResume {...mockCharacter} />,
    )
    expect(getByText(/A-Bomb/i)).toBeInTheDocument()
  })

  it('should render the character description', () => {
    const { getByText } = renderWithProvider(
      <CharacterResume {...mockCharacter} />,
    )
    expect(getByText(/Rick Jones/i)).toBeInTheDocument()
  })

  it('should display the character image', () => {
    const { getByRole } = renderWithProvider(
      <CharacterResume {...mockCharacter} />,
    )
    const img = getByRole('img')
    expect(img).toHaveAttribute('src', mockCharacter.thumbnail)
  })

  it('should render the button with the icon', () => {
    const { getByRole } = renderWithProvider(
      <CharacterResume {...mockCharacter} />,
    )
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
