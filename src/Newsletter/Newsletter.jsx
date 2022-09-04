import React from 'react';
import styled from 'styled-components';
import {BiSend} from 'react-icons/bi'
import classes from './inputC.module.css'
const Container = styled.div` 
    height:60vh;
    display:flex;
    align-items: center;
    justify-content: center; 
    flex-direction: column;
    `
    
   
const Title = styled.h1`
    font-size: 70px;
    color: whitesmoke;
    font-weight: 300;
    margin-bottom: 20px;
    `
const Description = styled.div`
    color: whitesmoke;
    font-size: 24px;
    font-weight: 300;
`
// const InputContainer  = styled.div`
//     width: 50%; 
//     height: 40px;
//     background-color: whitesmoke;
//     display:flex; 
//     justify-content: space-between;
//     border: 3px solid transparent;
//     --angle: 0deg;
//     border-image: linear-gradient(var(--angle) ,#1E58D5,#FD328B ) 1;
//     animation: 5s rotate linear infinite; 
    
    
    
    
//     &@keyframes rotate {
//         to {
//           --angle: 360deg;
//         }
//       }

//       &@property --angle {
//         syntax: '<angle>';
//         initial-value: 0deg;
//         inherits: false;}


const Input = styled.input`
    border: none;
    flex: 8;
    font-size: 18px;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    color: black;
    font-size: 20px;
    border: none;
    cursor: pointer;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>النشرة الأسبوعية</Title>
        <Description>احصل على اخبار الأسعار أول بأول </Description>
        <div className={classes.inputContainer}>
            <Input type="email" placeholder='email'/>
            <Button>
                 <BiSend/>
            </Button>
        </div>
    </Container>
  )
}

export default Newsletter
