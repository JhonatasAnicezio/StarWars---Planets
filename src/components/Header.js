import React from 'react';
import Input from './Input.js';
import './Header.css';
import ListFilters from './ListFilters.js';

function Header() {
  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input />
      <ListFilters />
    </header>
  );
}

export default Header;