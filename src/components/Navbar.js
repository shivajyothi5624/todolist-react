import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.Title}</a>
    </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
  Title: PropTypes.string
};

Navbar.defaultProps = {    
  Title: "NavBar"
}
