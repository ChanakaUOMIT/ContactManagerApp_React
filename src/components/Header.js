import React from 'react'
import PropTypes from 'prop-types';

//function Header() {
const Header = (props) => {
    const { branding }=props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 pu-0">
        <div className="container">
            <a href="/" className="navbar-brand">{branding} </a>
        </div>
        <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link">Home</a>                    
                </li>
            </ul>
        </div>
    </nav>
  );
}

Header.defaultProps ={
    branding: 'My App'
}

Header.propTypes={
    branding: PropTypes.string.isRequired
}

// const styles={
//     header:{
//         color: 'green',
//         fontSize: '50px'
//     }
// }

export default Header;
