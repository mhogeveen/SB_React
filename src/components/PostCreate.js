import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getCategories } from '../actions'

const PostCreate = ({ getCategories, categories }) => {
   useEffect(() => {
      getCategories()
   }, [getCategories])

   return (
      <div className='post-create'>
         <div className='form__item item--title'>
            <label>Berichtnaam</label>
            <input type='text' name='berichtnaam' placeholder='Geen titel' />
         </div>
         <div className='form__item item--category'>
            <label>Categorie</label>
            <select type='select' name='categorie' required>
               <option value='' disabled selected>
                  Geen categorie
               </option>
               {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                     {category.name}
                  </option>
               ))}
            </select>
         </div>
         <div className='form__item item--message'>
            <label>Bericht</label>
            <textarea name='bericht' />
         </div>
         <button className='btn'>Bericht aanmaken</button>
      </div>
   )
}

const mapStateToProps = (state) => {
   return { categories: state.categories }
}

export default connect(mapStateToProps, { getCategories })(PostCreate)
