import { FC } from 'react'
import { CharactersListProps } from './Characters.types'
import { GridItems } from './CharactersList.styles'
import { CharacterCard } from '../CharacterCard/CharacterCard'
import { Link } from 'react-router-dom'

export const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <GridItems>
      {characters.map((el) => (
        <Link key={el.id} to={`/characters/${el.id}`}>
          <CharacterCard {...el} />
        </Link>
      ))}
    </GridItems>
  )
}
