import React from 'react'
import { ProductType } from '../types/Product.types'

interface Props {
  product: ProductType
}

export const ProductCard: React.FC<Props> = ({ product }) => {

  const truncate = (str: string) => {
    return str.length > 60 ? str.substring(0, 60) + '...' : str
  }
  return (
    <>
      <div className='product-card shadow-lg hover:shadow-xl duration-300 cursor-pointer ease-in-out bg-white border border-stone-200 overflow-hidden rounded-lg'>
        <div className="product-image w-full h-36">
          <img src={product.thumbnail} alt="" className='w-full h-full object-cover' />
        </div>
        <div className="product-details p-3">
          <h3 className='text-lg font-bold'>{product.title}</h3>
          <h5 className='text-stone-700 text-sm'>{truncate(product.description)}</h5>

          <div className="product-footer flex justify-between items-center mt-3">
            <div className='flex items-center gap-2'>
              <button className='bg-stone-700 text-white p-2 px-4 rounded text-sm font-bold hover:bg-stone-800 hover:shadow-md duration-100'>Add to cart</button>
              <button className='bg-stone-100 text-dark p-1 px-3 rounded text-lg font-bold hover:bg-stone-200 duration-100'>+</button>
            </div>
            <h4 className='text-xl font-bold'>$ {product.price}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
