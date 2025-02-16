import { FC } from 'react'
import { Container, Title } from './Favorites.styles'
// import { CharactersList } from '../../components/CharactersList/CharactersList'
// import { SearchBar } from '../../components/SearchBar/SearchBar'
// import { DEBOUNCE_CHARACTERS } from '../../constants'
import texts from '../../assets/texts.json'

export const Favorites: FC = () => {
  return (
    <Container>
      <Title>{texts.favorites.title}</Title>
      {/* <SearchBar
        placeholder={texts.layout.searchCharacter}
        debounceTime={DEBOUNCE_CHARACTERS}
      /> */}
      {/* <CharactersList characters={characters} /> */}
    </Container>
  )
}
