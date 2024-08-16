import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/Create">Create</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Edit">Update</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Home">Delete</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;