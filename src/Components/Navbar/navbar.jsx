import React from 'react'
import Center from './Center'
import Left from './Left'
import classes from './Navbar.module.css'
import Right from './Right'



const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Left/>
        <Center/>
        <Right/>
      </div>
    </div>
  )
}

export default Navbar
