import React, { useEffect } from 'react'
import {
  PageHero,
  ProductImages,
  AddToCart,
  Stars,
  Loading,
} from '../components/index'
import { ErrorPage } from '../pages/index'
import { Link, useParams } from 'react-router-dom'
import { useGlobalProduct } from '../context/ProductContext'
import { single_product_url as url } from '../utils/constant'
import { formatPrice } from '../utils/helper'

function SinglePage() {
  const { id } = useParams()

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: products,
    fetchSingleProduct,
  } = useGlobalProduct()

  // singleProducts is an object, we assign reference of singleProducts to products variable

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
    // eslint-disable-next-line
    console.log(fetchSingleProduct(`${url}${id}`))
    console.log(`${url}${id}`)
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <ErrorPage />
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = products

  console.log(products)
  // the value of id is assigned to sku varialbe
  return (
    <div className='SinglePage'>
      <PageHero title={name} />
      <Link to='/product'>
        <button> Back to products</button>
      </Link>
      <div className='main-content'>
        <div className='image'>
          <ProductImages images={images} />
        </div>

        <section className='content'>
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className='price'>{formatPrice(price)}</h5>
          <p className='desc'>{description}</p>
          <p className='info'>
            <span>Available : </span>
            {stock > 0 ? 'In stock' : 'out of stock'}
          </p>
          <p className='info'>
            <span>SKU :</span>
            {sku}
          </p>
          <p className='info'>
            <span>Brand :</span>
            {company}
          </p>
          <hr />
          {stock > 0 && <AddToCart products={products} />}
        </section>
      </div>
    </div>
  )
}

export default SinglePage
