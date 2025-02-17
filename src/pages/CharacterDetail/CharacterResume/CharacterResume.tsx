import { FC } from 'react'

import { UnselectedIcon } from '../../../assets/UnselectedIcon'
import { CharacterDetailProps } from './CharacterResume.types'
import texts from '../../../assets/texts.json'
import {
  Container,
  CharacterImg,
  CharacterInfo,
  InfoHeader,
  Title,
  Description,
} from './CharacterResume.styles'
import { IconButton } from '../../../components/IconButton/IconButton'
import { SelectedIcon } from '../../../assets/SelectedIcon'
import { useFavorites } from '../../../context/useFavorites'

export const CharacterResume: FC<CharacterDetailProps> = ({
  id,
  name,
  thumbnail,
  description,
}) => {
  const { favorites, toggleFavorite } = useFavorites()
  const isFavorite = favorites.some((fav) => fav.id === id)

  return (
    <Container>
      <CharacterImg src={thumbnail} alt={`${texts.characters.image} ${name}`} />

      <CharacterInfo>
        <InfoHeader>
          <Title>{name}</Title>
          <IconButton
            buttonProps={{
              onClick: () => toggleFavorite({ id, name, thumbnail }),
            }}
            svgProps={{
              IconComponent: isFavorite ? SelectedIcon : UnselectedIcon,
              width: 24,
              height: 24,
              viewBox: '0 0 26 25',
            }}
          />
        </InfoHeader>

        <Description>{description}</Description>
      </CharacterInfo>
    </Container>
  )
}
