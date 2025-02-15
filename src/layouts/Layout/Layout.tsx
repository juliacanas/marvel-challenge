import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { TopBar } from '../TopBar'

export const Layout: FC = () => (
  <>
    <TopBar />
    <Outlet />
  </>
)
