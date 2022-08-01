import React from 'react'
import styled from 'styled-components'
import { PageHero, Filters, Sort, ProductContainer } from '../components'

function ProductPage() {
  return (
    <div className='productPage'>
      <PageHero title='products' />
      <Wrapper className='page'>
        <div className='section-center'>
          <Filters />
          <div className='sortContainer'>
            <Sort />
            <ProductContainer />
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }

  @media (min-width: 900px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductPage
