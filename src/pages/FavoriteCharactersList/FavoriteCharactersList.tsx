import { FC } from 'react'

import { SearchList } from '../../components/SearchList/SearchList'
import texts from '../../assets/texts.json'
import { DEBOUNCE_FAVORITES } from '../../constants'

export const FavoriteCharactersList: FC = () => {
  const favorites = ['']
  return (
    <>
      <SearchList
        title={texts.favoriteCharactersList.title}
        listItems={favorites}
        placeholder={texts.layout.searchCharacter}
        debounceTime={DEBOUNCE_FAVORITES}
      />
    </>
  )
}
