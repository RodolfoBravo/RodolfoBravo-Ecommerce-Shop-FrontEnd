import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        console.log(this.props.location.pathname, path);
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Responsive offcanvas navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-white bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className={'nav-item'+' '+this.getNavLinkClass("/")}><NavLink className='nav-link' to="/" >Home
                                </NavLink></li>

                                <li className={'nav-item'+' '+this.getNavLinkClass("/Add") }><NavLink className='nav-link' to="/Add" >
                                About
                                </NavLink></li>
                               
                                <li className={'nav-item'+' '+this.getNavLinkClass("/Add") }><NavLink className='nav-link' to="/Add" >
                                Shop
                                </NavLink></li>

                                <li className={'nav-item'+' '+this.getNavLinkClass("/Add") }><NavLink className='nav-link' to="/Add" >
                                Help
                                </NavLink></li>

                            </ul>
                            <form className="d-flex mt-3 mt-lg-0" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>


        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;