import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { incrementPage, getPosts } from '../actions'

// Component imports
import PostCard from './PostCard'

const PostGrid = ({ page, posts, incrementPage, getPosts }) => {
   // Component state to track how often 'meer laden'
   // button was clicked
   const [clicked, setClicked] = useState(0)

   // Load first page of posts after component renders
   useEffect(() => {
      getPosts(1)
   }, [getPosts])

   // Variables to track the amount of posts loaded,
   // and the amount of posts to show
   const postsLoaded = page * 10
   const postsShown = 4 + clicked * 4

   // Logic to run after clicking 'meer laden' button
   const handleLoadMore = () => {
      if (postsLoaded - postsShown < 4) {
         getPosts(page + 1)
         incrementPage()
      }

      setClicked(clicked + 1)
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
   return { page: state.page, posts: state.posts }
}

export default connect(mapStateToProps, { incrementPage, getPosts })(PostGrid)
