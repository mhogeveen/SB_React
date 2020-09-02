import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, updateTitle, updateCategory, updateMessage } from '../actions'

const PostCreate = ({
   getCategories,
   categories,
   updateTitle,
   updateCategory,
   updateMessage,
   form,
}) => {
   // Load categories after component renders
   useEffect(() => {
      getCategories()
   }, [getCategories])

   const handleTitleChange = (e) => {
      updateTitle(e.target.value)
   }

   const handleCategoryChange = (e) => {
      updateCategory(e.target.value)
   }

   const handleMessageChange = (e) => {
      updateMessage(e.target.value)
   }

   return (
      <div className='post-create'>
         <div className='form__item item--title'>
            <label>Berichtnaam</label>
            <input
               type='text'
               name='berichtnaam'
               placeholder='Geen titel'
               value={form.title}
               onChange={handleTitleChange}
            />
         </div>

         <div className='form__item item--category'>
            <label>Categorie</label>
            <select type='select' name='categorie' required onChange={handleCategoryChange}>
               <option value='' disabled selected>
                  Geen categorie
               </option>
               {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                     {category.name}
                  </option>
               ))}
            </select>
         </div>

         <div className='form__item item--message'>
            <label>Bericht</label>
            <textarea name='bericht' value={form.message} onChange={handleMessageChange} />
         </div>

         <button className='btn'>Bericht aanmaken</button>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { categories: state.categories, form: state.form }
}

export default connect(mapStateToProps, {
   getCategories,
   updateTitle,
   updateCategory,
   updateMessage,
})(PostCreate)
