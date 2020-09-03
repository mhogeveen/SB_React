import React from 'react'

const PostCard = ({ post }) => {
   const { img_url, created_at, category, title, content } = post

   const refactorDate = (string) => {
      const y = string.slice(0, 4)
      const m = string.slice(5, 7)
      const d = string.slice(8, 10)
      return d + '-' + m + '-' + y
   }

   return (
      <article className='post-card'>
         <div className='post-card__header' style={{ backgroundImage: `url(${img_url})` }}>
            <span className='header__meta meta--date'>{refactorDate(created_at)}</span>
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
