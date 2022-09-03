import React, { Fragment } from 'react'
import classes from './Categories.module.css'
import { categories } from '../../data/Data'
import Categoryitem from './Categoryitem'
import styled from 'styled-components'

const Title =styled.h1`
  display:flex;
  align-items: center;
  justify-content: center;
  color: white;

`
const Categories = () => {
  return (
    <Fragment>
      <Title>أقسام السلع</Title>
      <div className={classes.container}>
          {categories.map(item=>(
              <Categoryitem key={item.id} item={item}/>
          ))}
      </div>
    </Fragment>
  )
}

export default Categories
