import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { incrementPage, incrementClicks, getPosts } from '../actions'

// Component imports
import PostCard from './PostCard'

const PostGrid = ({ page, clicks, posts, incrementPage, incrementClicks, getPosts }) => {
   // Load first page of posts after component renders
   useEffect(() => {
      getPosts(1)
   }, [getPosts])

   // Variables to track the amount of posts loaded,
   // and the amount of posts to show
   const postsLoaded = page * 10
   const postsShown = 4 + clicks * 4

   // Logic to run after clicking 'meer laden' button
   const handleLoadMore = () => {
      if (postsLoaded - postsShown < 4) {
         getPosts(page + 1)
         incrementPage()
      }

      incrementClicks()
   }

   // If no posts are available in state show loader
   // otherwise render posts
   const renderPosts = () => {
      if (posts.length === 0) {
         return <div className='loader'></div>
      } else {
         const currentPosts = posts.slice(0, postsShown)
         return currentPosts.map((post) => <PostCard post={post} key={post.id} />)
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
   return { page: state.page, clicks: state.clicks, posts: state.posts }
}

export default connect(mapStateToProps, { incrementPage, incrementClicks, getPosts })(PostGrid)
