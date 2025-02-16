import { FC } from 'react'
import { CharactersListProps } from './Characters.types'
import { GridItems } from './CharactersList.styles'

export const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <GridItems>
      {characters.map((el) => (
        <p key={el.id}>{el.name}</p>
      ))}
    </GridItems>
  )
}
