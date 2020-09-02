import React from 'react'

const PostCard = ({ post }) => {
   const { created_at, category, title, content } = post

   return (
      <article className='post-card'>
         <div
            className='post-card__header'
            style={{ background: `url('https://picsum.photos/200/300?random') rgba(0,0,0,0.4)` }}
         >
            <span className='header__meta meta--date'>
               {new Date(created_at).toLocaleDateString()}
            </span>
            <span className='header__meta meta--category'>{category ? category.name : ''}</span>
         </div>
         <div className='post-card__content'>
            <span className='content__title'>{title}</span>
            <p className='content__summary'>
               {content.length > 180 ? content.slice(0, 180) + '...' : content}
            </p>
         </div>
      </article>
   )
}

export default PostCard
