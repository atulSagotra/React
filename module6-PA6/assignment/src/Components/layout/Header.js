import React from 'react';
import PropTypes from "prop-types";
import '../contact.css';
import { Link } from 'react-router-dom'

const Header = (props) => {
    const {branding} = props;
    
    return (
        <nav className = " nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className = "container">
                <a href = "/" className = "navbar-brand">
                    {branding}
                    </a>
                    <div>
                        <ul className = "navbar-nav mr-auto">
                            <li className = "nav-item">
                                <Link to = "/" className = "nav-link">
                                    <i className="fa fa-home"></i>
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link to = "/contact/add" className = "nav-link">
                                    <i className="fa fa-plus"></i>
                                </Link>
                            </li>
                            <li className = "nav-item">
                                <Link to = "/about" className = "nav-link">
                                    <i className="fa fa-question"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                
            </div>
        </nav>    
        // <div>
        //     <h1 style = {headingStyle}>{branding}</h1>
        // </div>
    );
};
const headingStyle = {
    color : 'green',
    fontSize : "40px"
}
Header.defaultProps = {
    branding: 'My App'
};
// Header.PropTypes = {
//     branding: PropTypes.string.isRequired
// }


export default Header;
