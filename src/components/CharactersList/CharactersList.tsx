import { FC } from 'react'
import { Link } from 'react-router-dom'
import { CharactersListProps } from './Characters.types'
import { GridItems } from './CharactersList.styles'
import { CharacterCard } from '../CharacterCard/CharacterCard'

export const CharactersList: FC<CharactersListProps> = ({ characters }) => {
  return (
    <>
      {characters && (
        <GridItems>
          {characters.map((el) => (
            <Link key={el.id} to={`/characters/${el.id}`}>
              <CharacterCard {...el} />
            </Link>
          ))}
        </GridItems>
      )}
    </>
  )
}
