import { CHARACTERS, FAVORITES } from '../constants'
import { CharacterClient } from '../types/client/CharacterClient'

export interface FavoriteCharactersContextProps {
  favorites: CharacterClient[]
  listMode: typeof CHARACTERS | typeof FAVORITES
  toggleFavorite: (character: CharacterClient) => void
  setListMode: (list: typeof CHARACTERS | typeof FAVORITES) => void
}
