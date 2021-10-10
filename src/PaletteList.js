import React, { Component } from 'react'
import { Link } from "react-router-dom";

import './styles/PaletteList.css'

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    const navLinks = palettes.map((palette, i) => 
      <Link 
        exact 
        className="PaletteList__nav-link" 
        to={`/palette/${palette.id}`}
      >
        {palette.paletteName}
      </Link>
    );
    return (
      <div className="PaletteList">
        <header className="PaletteList__header">
          <h1>React Colors</h1>
          <a href="/">create palette</a>
        </header>
        <nav className="PaletteList__nav">
          {navLinks}
        </nav>
      </div>
    )
  }
}

export default PaletteList;
