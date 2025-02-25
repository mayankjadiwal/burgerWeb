import React from 'react'
import './Recipe.css'
import { assets } from '../../assets/assets'

const Recipe = () => {
  return (
    <section className='recipe section' id='recipe'>
      <h2 className='section__title'>Our Secret Recipe</h2>

      <div className="recipe__container container grid">
        <div className='recipe__image'>
          <img id='burger-img' src={assets.recipe_burger} alt="" />
        </div>




        <div className="recipe__data">
          <div className="recipe__card">
            <div className="recipe__box">
              <img src={assets.recipe_bread} alt="iamge"/>
            </div>

            <div>
              <h3 className="recipe__title">Bread</h3>
              <p className="recipe__description">Fresh Bread, backed to perfection.</p>
            </div>
          </div>

          <div className="recipe__card">
            <div className="recipe__box">
              <img src={assets.recipe_cheese} alt="iamge"/>
            </div>

            <div>
              <h3 className="recipe__title">Chesse</h3>
              <p className="recipe__description">Chesse for fantastic and healthy future.</p>
            </div>
          </div>

          <div className="recipe__card">
            <div className="recipe__box">
              <img src={assets.recipe_meat} alt="iamge"/>
            </div>

            <div>
              <h3 className="recipe__title">Chicken</h3>
              <p className="recipe__description">100% Chicken, big and meaty.</p>
            </div>
          </div>

          <div className="recipe__card">
            <div className="recipe__box">
              <img src={assets.recipe_vegetable} alt="iamge"/>
            </div>

            <div>
              <h3 className="recipe__title">Vegetable</h3>
              <p className="recipe__description">Vegetables full of the essance of nature and organic.</p>
            </div>
          </div>

          <div className="recipe__card">
            <div className="recipe__box">
              <img src={assets.recipe_sauces} alt="iamge"/>
            </div>

            <div>
              <h3 className="recipe__title">Sauces</h3>
              <p className="recipe__description">Fresh Sauces, delicous for the palate.</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Recipe
