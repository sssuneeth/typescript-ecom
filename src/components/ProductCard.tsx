import React from 'react'
import { ProductType } from '../types/Product.types'

interface Props {
  product: ProductType
}

export const ProductCard: React.FC<Props> = ({ product }) => {

  const truncate = (str: string, limit: number) => {
    return str.length > limit ? str.substring(0, limit) + '...' : str
  }
  return (
    <>
      <div className='sm:block grid grid-cols-5 group product-card shadow-lg hover:shadow-xl duration-300 cursor-pointer ease-in-out bg-white border border-stone-200 overflow-hidden rounded-lg'>
        <div className="product-image col-span-2 w-full sm:h-36 h-full overflow-hidden">
          <img src={product.images[0]} alt="" className='group-hover:scale-[1.02] duration-300 ease-in-out w-full h-full object-cover' />
        </div>
        <div className="product-details p-3 col-span-3">
          <h3 className='text-lg font-bold'>{truncate(product.title, 20)}</h3>
          <h5 className='text-stone-700 sm:text-sm text-xs'>{truncate(product.description, 60)}</h5>

          <div className="product-footer flex justify-between items-center mt-3">
            <div className='flex items-center gap-2'>
              <button className='bg-stone-700 text-white p-2 px-4 rounded sm:text-sm text-xs font-bold hover:bg-stone-800 hover:shadow-md duration-100'>Buy now</button>
              <button className='sm:block hidden bg-stone-100 text-dark p-1 px-3 rounded text-lg font-bold hover:bg-stone-200 duration-100'>+</button>
            </div>
            <h4 className='sm:text-xl text-lg font-bold'>$ {product.price}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
