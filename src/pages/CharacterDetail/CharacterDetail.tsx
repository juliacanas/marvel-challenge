import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { useComicsQuery } from '../../hooks/useComicsQuery'
import { ComicsSection } from './ComicsSection/ComicsSection'
import { useCharacterDetailQuery } from '../../hooks/useCharacterDetailQuery'
import { Container, Header } from './CharacterDetail.styles'
import { CharacterResume } from './CharacterResume/CharacterResume'

export const CharacterDetail: FC = () => {
  const { id } = useParams()
  const { data: comicsResults } = useComicsQuery(id)
  const { data: characterDetailResult } = useCharacterDetailQuery(id)

  return (
    <Container>
      <Header>
        {characterDetailResult && (
          <CharacterResume detailData={characterDetailResult} />
        )}
      </Header>

      {!!comicsResults?.comics.length && (
        <ComicsSection comics={comicsResults.comics} />
      )}
    </Container>
  )
}
