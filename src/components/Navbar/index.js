// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <>
          {!isDarkTheme ? (
            <div className="nav-bar-container-light">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <ul className="middle-items">
                <li className="list-item">
                  <Link className="link-light" to="/">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link className="link-light" to="/about">
                    About
                  </Link>
                </li>
              </ul>

              <button
                type="button"
                testid="theme"
                className="theme-button"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          ) : (
            <div className="nav-bar-container-dark">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="website-logo"
                alt="website logo"
              />
              <ul className="middle-items">
                <li className="list-item">
                  <Link to="/" className="link-dark">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="link-dark">
                    About
                  </Link>
                </li>
              </ul>
              <button
                type="button"
                className="theme-button"
                testid="theme"
                onClick={toggleTheme}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="theme-img"
                  alt="theme"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
/*
import './index.css'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="website-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          className="logo-img"
          alt="logo image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          className="logo-img"
          alt="logo image"
        />
      </div>
      <div className="home-about-container">
        <h1 className="heading-txt">Home</h1>
        <h1 className="heading-txt">About</h1>
      </div>
      <div className="website-logo-end-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
          className="logo-img-2"
          alt="logo "
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
          className="logo-img-2"
          alt="logo"
        />
      </div>
    </div>
  )
}




export default Navbar
*/
