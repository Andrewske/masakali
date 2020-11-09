import React from 'react';

const Navbar = () => {
  return (
    <nav class='navbar bg-light'>
      <h1>
        <a href='index.html'>
          <i class='fas fa-tree-palm'></i> Masakali
        </a>
      </h1>
      <ul>
        <li>
          <a href='login.html'>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
