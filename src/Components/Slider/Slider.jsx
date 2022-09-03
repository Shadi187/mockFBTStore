import React from 'react'
import classes from './Slider.module.css';
import {RiArrowLeftSFill , RiArrowRightSFill} from 'react-icons/ri'
import styled from 'styled-components'
import { useState } from 'react';
import {slideItems} from '../../data/Data';

const Arrow = styled.div`

  width: 50px;
  height: 50px;
  background-color: #fff7f7 ;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props=> props.direction ==='left' ? '10px' : ''};
  right: ${props=> props.direction ==='right' ? '10px' : ''};
  margin:auto;
  cursor:pointer;
  opacity:0.5;
  z-index:2
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 0.9s ease;
  transform: translateX(${props=> props.slideIndex * -100}vw)
`

const Image = styled.img`
  height:80%
`;

const Slider = () => {
  const [slide,setSlide] = useState(0)
  const handleClick =(direction)=>{
    if (direction === 'left'){
      setSlide(slide > 0 ? slide-1 : 2)
    }

    else if(direction === 'right'){
      setSlide(slide < 2  ? slide+1 : 0)
    }
  }
  
  return (
    <div className={classes.container} >
      <Arrow onClick={()=> handleClick('left')} direction="left"><RiArrowLeftSFill/></Arrow>
      
      <Wrapper slideIndex={slide} > 
        {slideItems.map(item=>(
        <div className={classes.slide} key={item.id}>
        <div className={classes.imgContainer}>
          <Image src={item.img}/>
        </div>
        <div className={classes.infoContainer} >
          <h1 className={classes.title} >{item.title}</h1>
          <p className={classes.description}>{item.description}</p>
          <button className={classes.button} >اضغط للعرض</button>
        </div>
        </div>
))}
         
      </Wrapper>

      <Arrow onClick={()=> handleClick('right')} direction="right"><RiArrowRightSFill/></Arrow>

    </div>
  )
}


export default Slider