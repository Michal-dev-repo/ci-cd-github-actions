import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div><a href='http:/localhost:3000' className='navbar-brand'>Issue Management App</a></div>
          <Link to='/worklogs'> Worklogs </Link>
          <Link to='/issues'> Issues </Link>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
