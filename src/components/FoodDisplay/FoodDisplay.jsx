import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { assets } from '../../assets/assets'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)


  return (
    <div className='food-display' id='food-display'>
      <h2 id='dishes'>Top Dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
            if (category==="All" || category===item.category) {

              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
        })}
      </div>
    </div>

    


    // <div className='popular section' id='popular'>


    //   <h2 className="section__title">Most Devoured <br/> Burgers</h2>
    //   <div className="popular-container container grid">

    //   <article className="popular__card">
    //     <img src={assets.popular_burger_chicken} className="popular__img" alt="image"/>

    //       <h2 className="popular__title">chicken <br/> burger</h2>
    //       <span className="popular__price">$6</span>

    //       <button className="popular__button">
    //           <i className="ri-shopping-bag-3-fill"></i>
    //       </button>
    //   </article>

    //   <article className="popular__card">
    //     <img src={assets.popular_burger_big} className="popular__img" alt="image"/>

    //       <h2 className="popular__title">chicken <br/> burger</h2>
    //       <span className="popular__price">$6</span>

    //       <button className="popular__button">
    //           <i className="ri-shopping-bag-3-fill"></i>
    //       </button>
    //   </article>

    //   <article className="popular__card">
    //     <img src={assets. popular_burger_grill} className="popular__img" alt="image"/>

    //       <h2 className="popular__title">chicken <br/> burger</h2>
    //       <span className="popular__price">$6</span>

    //       <button className="popular__button">
    //           <i className="ri-shopping-bag-3-fill"></i>
    //       </button>
    //   </article>

    //   <article className="popular__card">
    //     <img src={assets.popular_burger_meat} className="popular__img" alt="image"/>

    //       <h2 className="popular__title">chicken <br/> burger</h2>
    //       <span className="popular__price">$6</span>

    //       <button className="popular__button">
    //           <i className="ri-shopping-bag-3-fill"></i>
    //       </button>
    //   </article>

    //   <article className="popular__card">
    //     <img src={assets.popular_burger_classic} className="popular__img" alt="image"/>

    //       <h2 className="popular__title">chicken <br/> burger</h2>
    //       <span className="popular__price">$6</span>

    //       <button className="popular__button">
    //           <i className="ri-shopping-bag-3-fill"></i>
    //       </button>
    //   </article>


    //   </div>


    // </div>

  )
}

export default FoodDisplay
