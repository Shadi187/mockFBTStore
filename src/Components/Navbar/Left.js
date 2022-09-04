import React, { Fragment, useState } from 'react';
import classes from './Navbar.module.css';
import {BsSearch} from  'react-icons/bs';
const Left = () => {
  const [searchToggle, setSearchToggle] = useState(false);
  const handleToggle = ()=>{
    setSearchToggle(true)
  }

  const handleClose = () =>{
    setSearchToggle(false)
  }
  return (
    <div className={classes.left}>
        <span className={classes.language}>EN</span>
        
        { searchToggle === true ? 
        <Fragment>
        <span onClick={handleClose} className={classes.languageg}>اغلاق</span>
        <div className={classes.searchContainer}>
            <input className={classes.input}/>
             <BsSearch className={classes.logos}/>
             
        </div></Fragment>  :  <span onClick={handleToggle} className={classes.languageg}>البحث</span>}
    </div>
  )
}

export default Left
