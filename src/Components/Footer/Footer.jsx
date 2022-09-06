import React from 'react';
import styled from 'styled-components';
import {BsTwitter} from 'react-icons/bs';
import {SiDiscord} from 'react-icons/si';
import {BsInstagram} from 'react-icons/bs';
import classes from'./footer.module.css';

const Container  = styled.div`
    display: flex;
    background-color:#2C2C2C;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`

const Right = styled.div`
    flex: 1;
`

// const Logo = styled.div`
//     background-image: linear-gradient(to right,#1E58D5,#FD328B );
//     background-clip: text;
//     color:transparent;
//     font-weight: bold;
//     font-size: 36px;
// `  

const Title = styled.h3`
    margin-top: 3px;
    margin-bottom: 30px;
    color: white;
`

const Titlet = styled.h3`
    margin-bottom: 30px;
    color: white;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItems = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 18px;
    color: white;
`

const Description = styled.p`
    display: flex;
    margin: 20px 0px;
    color: aliceblue;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(${props=> props.back});
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    box-shadow: 3px 2px 7px rgba(${props=> props.back},0.7);
`
const color1 = '#feda75'
const color2 = '#fa7e1e'
const color3 = '#d62976'
const color4 = '#962fbf'
const color5 = '#4f5bd5'
const SocialIconT = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: linear-gradient(35deg, ${color1},${color2},${color3},${color4},${color5});
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 2px 7px rgba(${props=> props.back},0.7);
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <div className={classes.logo}>FBT Store</div>
        <Description>
            أفضل متجر عربي غصبا عنك يورع
        </Description>
       
      </Left>
      <Center>
        <Title>روابط مهمة</Title>
            <List>
                <ListItems>صفحة البداية </ListItems>
                <ListItems>العروض</ListItems>
                <ListItems>تتبع طلبك</ListItems>
                <ListItems>الدعم الفني</ListItems>
                <ListItems>شرح نظام الولاء </ListItems>
                <ListItems>قائمة الأمنيات</ListItems>
            </List>
      </Center>

      <Right>
      <Titlet>للتواصل</Titlet>
      <SocialContainer>
      <SocialIconT back="150, 47, 191">
            <BsInstagram/>
            </SocialIconT>
            <SocialIcon back="29, 161, 242">
                <BsTwitter/>
            </SocialIcon>            
            <SocialIcon back="114, 137, 218">
                <SiDiscord/>
            </SocialIcon>        
        </SocialContainer>
      </Right>
    </Container>
  )
}

export default Footer
