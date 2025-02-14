import { createBrowserRouter, Navigate } from 'react-router-dom'
import { CharactersList } from '../pages/CharactersList'
import { FavoriteCharactersList } from '../pages/FavoriteCharactersList'
import { CharacterDetail } from '../pages/CharacterDetail'
import { Layout } from '../components/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <CharactersList />,
      },
      {
        path: '/favorites',
        element: <FavoriteCharactersList />,
      },
      {
        path: '/characters/:id',
        element: <CharacterDetail />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
])

export default router
