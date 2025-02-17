import { createContext } from 'react'
import { FavoriteCharactersContextProps } from './Favorites.types'

export const FavoritesContext = createContext<
  FavoriteCharactersContextProps | undefined
>(undefined)
