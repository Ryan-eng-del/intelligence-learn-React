import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomeRouteWrapper } from './HomeRoutePageStyle'
export const HomeRoutePage = () => {
  return (
    <HomeRouteWrapper>
      <Outlet />
    </HomeRouteWrapper>
  )
}
