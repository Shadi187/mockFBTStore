import React from 'react'
import classes from './Navbar.module.css'
import {BsCart} from 'react-icons/bs'
const Right = () => {
  return (
    <div className={classes.right}>
        <div className={classes.menuItem}>تسجيل</div>
        <div className={classes.menuItem}>تسجيل الدخول</div>
        <div className={classes.menuItem}><BsCart /></div>
    </div>
  )
}

export default Right
