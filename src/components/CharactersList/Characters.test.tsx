import { describe, it, expect } from 'vitest'

import { CharactersList } from './CharactersList'
import { renderWithProvider } from '../../tests/test-utils'

describe('CharactersList', () => {
  it('renders a list of characters', () => {
    const characters = [
      { id: 1, name: 'Character 1', thumbnail: '' },
      { id: 2, name: 'Character 2', thumbnail: '' },
    ]
    const { getByText } = renderWithProvider(
      <CharactersList characters={characters} />,
    )

    expect(getByText('Character 1')).toBeInTheDocument()
    expect(getByText('Character 2')).toBeInTheDocument()
  })

  it('should render anything when the character list is empty', () => {
    const { queryByText } = renderWithProvider(
      <CharactersList characters={[]} />,
    )
    expect(queryByText(/Character/)).toBeNull()
  })
})
