import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const Pagination = () => {
  return (
    <>
      <div className="pagination-container mt-8 grid place-items-center">
        <div className="pagination-box flex items-center gap-3">
          <div className="pagination-prev-btn">
            <button className='bg-stone-400 hover:bg-stone-700 duration-100 text-white p-3 rounded-full'>
              <FaChevronLeft />
            </button>
          </div>
          {/** pages buttons */}
          <div className='flex gap-[0.35rem]'>
            <button className='bg-stone-700 hover:bg-stone-700 duration-100 text-white p-2 px-4 font-bold rounded-full'>
              1
            </button>
            <button className='bg-stone-500 hover:bg-stone-700 duration-100 text-white p-2 px-4 font-bold rounded-full'>
              2
            </button>
            <button className='bg-stone-500 hover:bg-stone-700 duration-100 text-white p-2 px-4 font-bold rounded-full'>
              3
            </button>
            <button className='bg-stone-500 hover:bg-stone-700 duration-100 text-white p-2 px-4 font-bold rounded-full'>
              4
            </button>
          </div>
          {/** next button */}
          <div className="pagination-next-btn">
            <button className='bg-stone-400 hover:bg-stone-700 duration-100 text-white p-3 rounded-full'>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <a href="https://github.com/sssuneeth/typescript-ecom" className='text-xs mt-2 underline'>Github source code</a>
      </div>
    </>
  )
}
