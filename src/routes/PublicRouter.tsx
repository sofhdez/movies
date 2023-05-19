import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicRouter: React.FC = () => {
  return (
    <>
        <p>NavBar Public</p>
        <Outlet  />
    </>
  )
}

export default PublicRouter