import { FC } from 'react'

import { SearchList } from '../../components/SearchList/SearchList'
import texts from '../../assets/texts.json'
import { DEBOUNCE_CHARACTERS } from '../../constants'

export const CharactersList: FC = () => {
  const characters = ['']
  return (
    <>
      <SearchList
        listItems={characters}
        placeholder={texts.layout.searchCharacter}
        debounceTime={DEBOUNCE_CHARACTERS}
      />
    </>
  )
}
