import React from 'react'
import classes from './Navbar.module.css'
import {BsCart} from 'react-icons/bs'
const Right = () => {
  return (
    <div className={classes.right}>
        <div className={classes.menuItem}>REGISTER</div>
        <div className={classes.menuItem}>SIGN-IN</div>
        <div className={classes.menuItem}><BsCart /></div>
    </div>
  )
}

export default Right
