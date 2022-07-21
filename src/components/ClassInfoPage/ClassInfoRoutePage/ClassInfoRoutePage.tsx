import React from 'react'
import { Outlet } from 'react-router-dom'
import { ClassInfoRouteWrapper } from './ClassInfoRoutePageStyle'
export const ClassInfoRoutePage = () => {
  return (
    <ClassInfoRouteWrapper>
      <Outlet />
    </ClassInfoRouteWrapper>
  )
}
