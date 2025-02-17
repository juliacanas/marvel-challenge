import { FC, useEffect, useState } from 'react'
import { CharactersList } from '../../components/CharactersList/CharactersList'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Container } from './Characters.styles'
import texts from '../../assets/texts.json'
import { DEBOUNCE_CHARACTERS, FAVORITES } from '../../constants'
import { useCharactersQuery } from '../../hooks/useCharactersQuery'
import { useFavorites } from '../../context/useFavorites'

export const Characters: FC = () => {
  const [search, setSearch] = useState<string>('')

  const { data } = useCharactersQuery(search.trim())
  const { favorites, listMode } = useFavorites(search.trim())

  useEffect(() => {
    setSearch('')
  }, [listMode])

  return (
    <Container>
      <SearchBar
        debounceTime={DEBOUNCE_CHARACTERS}
        setSearch={setSearch}
        placeholder={texts.layout.searchCharacter}
        resultsCount={listMode === FAVORITES ? favorites.length : data?.total}
        search={search}
      />
      <CharactersList
        characters={listMode === FAVORITES ? favorites : data?.results}
      />
    </Container>
  )
}
