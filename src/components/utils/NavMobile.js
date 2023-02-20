import React from 'react'
import NavLinks from '../utils/NavLinks'
import NavCSS from "../style/Nav.module.css";

export default function NavMobile() {
  return (
    <div className={NavCSS.mobile}>
      <NavLinks />
    </div>
  )
}
