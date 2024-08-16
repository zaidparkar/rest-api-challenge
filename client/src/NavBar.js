import React from 'react';

const NavBar = () => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
            <a class="navbar-brand" href="/Create">Create</a>
            <a class="navbar-brand" href="/Home">Update</a>
            <a class="navbar-brand" href="/Home">Delete</a>
            </div>
        </nav>
    );
};

export default NavBar;