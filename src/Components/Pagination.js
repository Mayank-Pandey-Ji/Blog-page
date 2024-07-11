import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const Pagination = () => {
  const {page , handlePageChange , totalPages} = useContext(AppContext);
  return (
    <div className='fixed bottom-0 bg-white w-full border border-t-[2px] border-[#d1d5db] py-2'>
      <div className='flex justify-evenly items-center'>
        <div className='flex gap-3'>
        {
          page >1 && 
          <button onClick={() => handlePageChange(page-1)} className='border-2 px-[14px] py-[4px] border-[#d1d5db] rounded-md'>
            Previous
          </button>
        }

        {
          page < totalPages &&
          <button onClick={()=>handlePageChange(page +1)} className='border-2 px-[14px] py-[4px] border-[#d1d5db] rounded-md'>
            Next
          </button>
        }
        </div>

        <p className='font-semibold text-[15px]'>
          Page <span>{page}</span> of <span>{totalPages}</span>
        </p>

      </div>
    </div>
  )
}

export default Pagination
