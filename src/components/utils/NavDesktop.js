import React from 'react'
import NavLinks from '../utils/NavLinks'
import NavCSS from "../style/Nav.module.css";



export default function  NavDesktop() {
  return (
    <div className={NavCSS.desktop}>
      <NavLinks />
    </div>
  )
}
