import { FC, MouseEvent } from 'react'
import {
  CharacterInfo,
  Container,
  Name,
  StyledImage,
} from './CharacterCard.styles'
import { CharacterClient } from '../../types/client/CharacterClient'
import texts from '../../assets/texts.json'
import { UnselectedIcon } from '../../assets/UnselectedIcon'
import { SelectedIcon } from '../../assets/SelectedIcon'
import { useFavorites } from '../../context/useFavorites'
import { IconButton } from '../IconButton/IconButton'

export const CharacterCard: FC<CharacterClient> = ({ name, thumbnail, id }) => {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some((fav) => fav.id === id)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    toggleFavorite({ name, thumbnail, id })
  }

  return (
    <Container>
      <StyledImage src={thumbnail} alt={`${texts.characters.image} ${name}`} />
      <CharacterInfo>
        <Name>{name}</Name>
        <IconButton
          buttonProps={{ onClick: handleClick }}
          svgProps={{
            IconComponent: isFavorite ? SelectedIcon : UnselectedIcon,
            width: 12,
            height: 12,
            viewBox: '0 0 26 25',
          }}
        />
      </CharacterInfo>
    </Container>
  )
}
