import { useContext } from 'react'
import { FavoritesContext } from './FavoritesContext'

export const useFavorites = (search?: string) => {
  const context = useContext(FavoritesContext)

  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  const { favorites, toggleFavorite, listMode, setListMode } = context

  const filteredFavorites = !search?.length
    ? favorites
    : favorites.filter((character) =>
        character.name.toLowerCase().includes(search.toLowerCase()),
      )

  return {
    favorites: filteredFavorites,
    toggleFavorite,
    listMode,
    setListMode,
  }
}
