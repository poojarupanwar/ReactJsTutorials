import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (

    
  /*  <nav classNameName="navbar navbar-expand-lg bg-body-tertiary ">
        <div classNameName="container-fluid">
          <a classNameName="navbar-brand" href="/">{props.title}</a>
         <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <a classNameName="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li classNameName="nav-item">
          <a classNameName="nav-link" href="/">Link</a>
        </li>
            
      </ul>
    
    </div>
  </div>
  </nav> */

  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.home}  </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>
  </>
   
  )
}

Navbar.propTypes ={ title: PropTypes.string.isRequired,
                    home:PropTypes.string.isRequired
      }


Navbar.defaultProps={
  title:"Set Title",
  home:'Set Home Name Here'
}