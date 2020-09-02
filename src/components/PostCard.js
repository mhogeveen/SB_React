import React from 'react'

const PostCard = ({ post }) => {
   return (
      <article className='post-card'>
         <div
            className='post-card__header'
            style={{ background: `url('https://picsum.photos/200/300?random') rgba(0,0,0,0.4)` }}
         >
            <span className='header__meta meta--date'>
               {new Date(post.created_at).toLocaleDateString()}
            </span>
            <span className='header__meta meta--category'>
               {post.category ? post.category.name : ''}
            </span>
         </div>
         <div className='post-card__content'>
            <span className='content__title'>{post.title}</span>
            <p className='content__summary'>{post.content}</p>
         </div>
      </article>
   )
}

export default PostCard
