import { FC } from 'react'

import { ComicsSectionProps } from './ComicsSection.types'
import { ComicClient } from '../../../types/client/ComicClient'
import texts from '../../../assets/texts.json'
import {
  ComicImage,
  ComicName,
  ComicsCard,
  ComicsList,
  ComicYear,
  Title,
  Container,
  Section,
} from './ComicsSection.styles'

export const ComicsSection: FC<ComicsSectionProps> = ({ comics }) => {
  return (
    <Section>
      <Container>
        <Title>{texts.detail.comics.title}</Title>
        <ComicsList>
          {comics.map((comic: ComicClient) => (
            <ComicsCard key={comic.title}>
              <ComicImage
                src={comic.thumbnail}
                alt={`${texts.detail.comics.images} ${comic.title}`}
              />
              <ComicName>{comic.title}</ComicName>
              <ComicYear>{comic.year}</ComicYear>
            </ComicsCard>
          ))}
        </ComicsList>
      </Container>
    </Section>
  )
}
