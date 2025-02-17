import { FC } from 'react'

import { SvgIcon } from '../../../components/SvgIcon/SvgIcon'
import { UnselectedIcon } from '../../../assets/UnselectedIcon'
import { CharacterDetailProps } from './CharacterResume.types'
import texts from '../../../assets/texts.json'
import {
  Container,
  CharacterImg,
  CharacterInfo,
  InfoHeader,
  Title,
  Button,
  Description,
} from './CharacterResume.styles'

export const CharacterResume: FC<CharacterDetailProps> = ({ detailData }) => {
  return (
    <Container>
      <CharacterImg
        src={detailData.thumbnail}
        alt={`${texts.characters.image} ${detailData.name}`}
      />

      <CharacterInfo>
        <InfoHeader>
          <Title>{detailData.name}</Title>
          <Button>
            <SvgIcon
              IconComponent={UnselectedIcon}
              width={24}
              height={24}
              viewBox={'0 0 26 25'}
            />
          </Button>
        </InfoHeader>

        <Description>{detailData.description}</Description>
      </CharacterInfo>
    </Container>
  )
}
