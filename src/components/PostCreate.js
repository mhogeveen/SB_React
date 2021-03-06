import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories, updateTitle, updateCategory, updateMessage, submitForm } from '../actions'

const PostCreate = ({
   getCategories,
   categories,
   updateTitle,
   updateCategory,
   updateMessage,
   submitForm,
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

   const handleSubmitForm = () => {
      // Construct array of DOM nodes and their names
      const title = [document.querySelector('.item--title input'), 'title']
      const category_id = [document.querySelector('.item--category select'), 'category_id']
      const content = [document.querySelector('.item--message textarea'), 'content']
      const inputs = [title, category_id, content]

      // Validation for each input
      inputs.forEach((input) => {
         if (form[input[1]] === '') {
            input[0].classList.add('invalid')
            setTimeout(() => {
               input[0].classList.remove('invalid')
            }, 3000)
         }
      })

      // If all inputs have values submit form
      if (form.title.length !== 0 && form.category_id.length !== 0 && form.content.length !== 0) {
         submitForm(form)
      }
   }

   return (
      <div className='post-create'>
         {/* Form element for the title */}
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

         {/* Form element for selecting a category */}
         <div className='form__item item--category'>
            <label>Categorie</label>
            <select
               type='select'
               name='categorie'
               required
               onChange={handleCategoryChange}
               value={form.category_id}
            >
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

         {/* Form element for the message */}
         <div className='form__item item--message'>
            <label>Bericht</label>
            <textarea name='bericht' value={form.content} onChange={handleMessageChange} />
         </div>

         <button className='btn' onClick={handleSubmitForm}>
            Bericht aanmaken
         </button>
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
   submitForm,
})(PostCreate)
