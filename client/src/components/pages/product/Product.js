import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductList from '../utils/ProductList/ProductList'
import '../utils/ProductList/ProductList.css'

const Product = () => {
    const state = useContext(GlobalState)

    const [products] = state.productApi.products
    // console.log(products)
  return (
    <div className='products_container'>
      {
        products.map(product => {
            return <ProductList key={product.id} product={product}/>    
        })
      }
      
    </div>
  )
}

export default Product
