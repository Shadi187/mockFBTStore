import React from 'react'
import classes from './Navbar.module.css'
import {BsSearch} from  'react-icons/bs'
const Left = () => {
  return (
    <div className={classes.left}>
        <span className={classes.language}>EN</span>
        <div className={classes.searchContainer}>
            <input className={classes.input}/>
            <BsSearch className={classes.logos}/>
        </div>
    </div>
  )
}

export default Left
