import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Spinner from './Spinner';

const Blogs = () => {

  const {posts ,loading} = useContext(AppContext);

  return (
    <div className=' w-11/12 max-w-[670px] mx-auto pt-24 pb-2 flex flex-col gap-y-7 justify-center items-center'>
      {
        loading? 
        (<Spinner/>)
        :
        (
          posts.length === 0 ?
          (<div>
            <p>No Post Found</p>
          </div>)
          :
          (posts.map((post)=>(
            <div key={post.id}>
              <p className='font-bold text-[19px]'>{post.title}</p>
              <p>
                By <span className=' italic'>{post.author}</span> on <span className='font-semibold underline'>{post.category}</span>
              </p>
              <p className='text-[15px]'>Posted on <span>{post.date}</span></p>
              <p className='pt-3 text-[17px]'>{post.content}</p>
              <div className='text-blue-700 underline font-semibold pt-2 text-[13px] flex gap-x-2'>
                {post.tags.map((tag ,index)=>(
                  <span key={index} >{`#${tag}`}</span>
                ))}
              </div>
            </div>
          )))
        ) 
      }
    </div>
  )
}

export default Blogs
