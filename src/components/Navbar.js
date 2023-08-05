import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>
        
        </ul>
      </div>
    </div>

    {/* toggle switch  */}
    <div className="form-check form-switch">
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className={`form-check-label text-${(props.mode==='light')?'dark':'light'}`} htmlFor="flexSwitchCheckDefault" id="toggleLabel">DARK</label>
    </div>
    
    {/* search bar  */}
    <nav className={`navbar  bg-${props.mode}`}>
    <div className="container-fluid">
      <form className="d-flex" role="search">
        <input className="form-control me-2"  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    </nav>
    
</nav> 
  )
}
Navbar.propTypes={title:PropTypes.string.isRequired,aboutText:PropTypes.string.isRequired};
// for default values of props when no value is sent
Navbar.defaultProps={title: "Set title here",
aboutText: "Set about Text here"}