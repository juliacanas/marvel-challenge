import { FC, useState } from 'react'
import { CharactersList } from '../../components/CharactersList/CharactersList'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Container } from './Characters.styles'
import texts from '../../assets/texts.json'
import { DEBOUNCE_CHARACTERS } from '../../constants'
import { useCharactersQuery } from '../../hooks/useCharactersQuery'

export const Characters: FC = () => {
  const [search, setSearch] = useState<string>('')
  const { data } = useCharactersQuery(search.trim())

  return (
    <Container>
      <SearchBar
        debounceTime={DEBOUNCE_CHARACTERS}
        setSearch={setSearch}
        placeholder={texts.layout.searchCharacter}
        resultsCount={data?.total}
      />
      {!!data?.results && <CharactersList characters={data?.results} />}
    </Container>
  )
}
