import React from 'react'
import styled from 'styled-components';
import classes from './Categories.module.css';
const Image = styled.img`
    width: 100%;
    height:35vh;
    `


const Categoryitem = ({item}) => {
  return (
    <div  className={classes.containerItem}>
        <Image  src={item.img}/>
      <div className={classes.info}>
        <h1 className={classes.title}>{item.title}</h1>
        <button className={classes.button}>تسوق الآن</button>
      </div>

    </div>
  )
}

export default Categoryitem
