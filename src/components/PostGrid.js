import React from 'react'

// Component imports
import PostCard from './PostCard'

const PostGrid = () => {
   return (
      <div className='post-grid'>
         <PostCard />
         <PostCard />
         <PostCard />
         <PostCard />
         <button className='btn'>Meer laden</button>
      </div>
   )
}

export default PostGrid
