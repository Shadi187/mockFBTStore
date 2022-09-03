import React, { Fragment } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../../data/Data'
import Product from './Product'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  background-color: #151515
`

const HContainer = styled.div`
  background-color: #151515;
`

const Title = styled.h1`
  display:flex;
  align-items: center;
  justify-content: center;
  color: white;
  
`

const Products = () => {
  return (
    <Fragment>

      <Title>الأكثر مبيعا</Title>

    
    <Container >
      
      {popularProducts.map(product=>(
        <Product key={product.id} product={product}/>
      ))}
    </Container>
    </Fragment>
  )
}

export default Products;
