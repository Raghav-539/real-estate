import React, { useState } from "react"
import "./header.css"
import { nav } from "../../data/Data"
import { Link } from "react-router-dom"

const Header = ({auth}) => {
  const [navList, setNavList] = useState(false)
  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/house_logo_.png' alt='logo' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            {!auth ? <Link to="/sign" className='btn1'>
              <i className='fa fa-sign-out'></i> Sign In
            </Link> : <div>{auth?.name}</div>}
          </div>

          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
