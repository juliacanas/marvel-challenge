import { ReactNode, useState } from 'react'
import { CharacterClient } from '../types/client/CharacterClient'
import { FavoritesContext } from './FavoritesContext'
import { CHARACTERS, FAVORITES } from '../constants'

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<CharacterClient[]>([])
  const [listMode, setListMode] = useState<
    typeof CHARACTERS | typeof FAVORITES
  >(CHARACTERS)

  const toggleFavorite = (character: CharacterClient) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === character.id)) {
        return prevFavorites.filter((fav) => fav.id !== character.id)
      } else {
        return [...prevFavorites, character]
      }
    })
  }

  return (
    <FavoritesContext.Provider
      value={{ toggleFavorite, favorites, setListMode, listMode }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
