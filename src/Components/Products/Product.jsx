import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineHeart} from 'react-icons/ai'
import styled from "styled-components"


const Info = styled.div`
  opacity:0;
  width:100%;
  height:100%; 
  position:absolute;
  display:flex;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.2);
  z-index:3;
  align-items:center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor:pointer;
`

const Container = styled.div`
  position:relative;
  display:flex;
  flex:1;
  margin:5px;
  min-width:280px;
  height:350px;
  align-items:center;
  justify-content:center;
  background-color:#2C2C2C;

  &:hover ${Info}{
    opacity:1;
  }
`
const Circle = styled.div`
  width:200px;
  height:200px;
  border-radius: 50%; 
  position: absolute;
`
const Image = styled.img`
  height:75%;
  z-index:2;
`



const Icon = styled.div`
  
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display:flex;
  align-items:center;
  justify-content: center;
  margin:10px;
  transition:all 0.3s ease;
  &:hover{
    background-image: linear-gradient(to right,#1E58D5,#FD328B );
    transform: scale(1.1)
  }
`
 
const Product = ({product}) => {
  return (
    <Container>
       <Circle/>
       <Image src={product.img}/>
       <Info>
        <Icon>
          <HiOutlineShoppingCart/>
        </Icon>
        <Icon>
          <FaSearch/>
        </Icon>
        <Icon>
          <AiOutlineHeart/>
        </Icon>
       </Info>
    </Container>
  )
}

export default Product
