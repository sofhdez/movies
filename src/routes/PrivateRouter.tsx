import React from 'react'
import { ResponsiveAppBar } from 'components/ResponsiveAppBar'
import { Outlet } from 'react-router-dom'

const PrivateRouter: React.FC = () => {
  return (
    <>
        <ResponsiveAppBar />
        <Outlet  />
    </>
  )
}

export default PrivateRouter