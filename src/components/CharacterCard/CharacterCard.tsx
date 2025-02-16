import { FC, MouseEvent, useState } from 'react'
import {
  Button,
  CharacterInfo,
  Container,
  Name,
  StyledImage,
  WhiteCut,
} from './CharacterCard.styles'
import { CharacterClient } from '../../types/client/CharacterClient'
import texts from '../../assets/texts.json'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { UnselectedIcon } from '../../assets/UnselectedIcon'
import { SelectedIcon } from '../../assets/SelectedIcon'

export const CharacterCard: FC<CharacterClient> = ({ name, thumbnail }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    e.preventDefault()
    setIsSelected((prevState) => !prevState)
  }

  return (
    <Container>
      <StyledImage
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`${texts.characters.image} ${name}`}
      />
      <CharacterInfo>
        <Name>{name}</Name>
        <Button onClick={handleClick}>
          <SvgIcon
            IconComponent={isSelected ? SelectedIcon : UnselectedIcon}
            width={12}
            height={12}
            viewBox={'0 0 26 25'}
          />
        </Button>
      </CharacterInfo>
      <WhiteCut />
    </Container>
  )
}
