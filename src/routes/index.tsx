import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Characters } from '../pages/Characters'
import { CharacterDetail } from '../pages/CharacterDetail'
import { Layout } from '../layouts/Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Characters />,
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
