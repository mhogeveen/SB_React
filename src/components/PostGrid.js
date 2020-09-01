import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { incrementIndex } from '../actions'

// Component imports
import PostCard from './PostCard'

const PostGrid = ({ index, incrementIndex }) => {
   // useEffect({})

   return (
      <div className='post-grid'>
         <PostCard />
         <PostCard />
         <PostCard />
         <PostCard />
         <button className='btn' onClick={incrementIndex}>
            Meer laden
         </button>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { index: state.index }
}

export default connect(mapStateToProps, { incrementIndex })(PostGrid)
