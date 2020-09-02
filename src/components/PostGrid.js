import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { incrementIndex, getPosts } from '../actions'

// Component imports
import PostCard from './PostCard'

const PostGrid = ({ index, posts, incrementIndex, getPosts }) => {
   useEffect(() => {
      getPosts(1)
      incrementIndex()
   }, [getPosts, incrementIndex])

   const handleLoadMore = () => {
      getPosts(index)
      incrementIndex()
   }

   const renderPosts = () => {
      if (posts.length === 0) {
         return <div className='loader'></div>
      } else {
         return posts.map((post) => <PostCard post={post} key={post.id} />)
      }
   }

   return (
      <div className='post-grid'>
         {renderPosts()}
         <button className='btn' onClick={handleLoadMore}>
            Meer laden
         </button>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { index: state.index, posts: state.posts }
}

export default connect(mapStateToProps, { incrementIndex, getPosts })(PostGrid)
