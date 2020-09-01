import React from 'react'

const PostCard = () => {
   return (
      <div className='post-card'>
         <div
            className='post-card__header'
            style={{ background: `url('https://picsum.photos/200/300?random') rgba(0,0,0,0.4)` }}
         >
            <span className='header__meta meta--date'>12-16-2020</span>
            <span className='header__meta meta--category'>Tech</span>
         </div>
         <div className='post-card__content'>
            <span className='content__title'>Header</span>
            <p className='content__summary'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget metus
               blandit, pharetra nisi eu, aliquet leo. Mauris lacinia commodo risus, id lobortis
               massa ultrices nec.
            </p>
         </div>
      </div>
   )
}

export default PostCard
