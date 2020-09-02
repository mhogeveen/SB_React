import React from 'react'

const PostCreate = () => {
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
               <option>Categorie 1</option>
               <option>Categorie 2</option>
               <option>Categorie 3</option>
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

export default PostCreate
