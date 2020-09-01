import React from 'react'

// Component imports
import Header from './Header'
import Main from './Main'
import PostGrid from './PostGrid'
import PostCreate from './PostCreate'

const App = () => {
   return (
      <div className='container'>
         <Header />
         <Main>
            <PostCreate />
            <PostGrid />
         </Main>
      </div>
   )
}

export default App
