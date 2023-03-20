import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ReactPaginate from 'react-paginate'

interface PaginationProps {
  setSkip: (value: number) => void
  totalPage: number
}

interface handlePageClickProps {
  selected: number
}

export const Pagination = ({ setSkip, totalPage }: PaginationProps) => {

  const handlePageClick = ({ selected }: handlePageClickProps) => {
    // undo comment to scroll to top on every page change
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // })
    let newSkip = ((selected + 1) * 10) - 10
    setSkip(newSkip)
  }
  return (
    <>
      <div className="pagination-container mt-8 grid place-items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel={
            <button className='bg-stone-400 hover:bg-stone-700 duration-100 text-white p-3 rounded-full'>
              <FaChevronRight />
            </button>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={totalPage}
          containerClassName='flex items-center justify-center gap-2'
          activeClassName='bg-stone-700 text-white p-2 px-0 rounded-full'
          activeLinkClassName='hover:bg-stone-700'
          // pageClassName='text-dark font-bold hover:bg-stone-200 rounded-full'
          pageLinkClassName='text-dark p-2 px-4 font-bold hover:bg-stone-200 rounded-full'
          previousLabel={
            <button className='bg-stone-400 hover:bg-stone-700 duration-100 text-white p-3 rounded-full'>
              <FaChevronLeft />
            </button>
          }
        />
        <a target={'_blank'} href="https://github.com/sssuneeth/typescript-ecom" className='text-xs mt-2 underline'>Github source code</a>
      </div>
    </>
  )
}
