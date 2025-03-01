// import React, { useContext } from 'react'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext'
// import './FoodItem.css'
// import "remixicon/fonts/remixicon.css"; 

// const FoodItem = ({id, name, price, description, image}) => {
//   const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

//   return (
//     <section className="popular section" id="popular">
//       <div className="popular-container container grid">

//     <article className="popular__card food-item">
//       <img 
//         src={url+"/images/"+image} 
//         className="popular__img" 
//         alt={name} 
//       />

//       <h2 className="popular__title">{name}</h2>
//       <p className="food-item-desc">{description}</p>
//       <span className="popular__price">₹{price}</span>

//       <div className="food-type">
//       {name == "Chicken Burger" || name == "Veg Taco" ? <h4>Non Veg</h4> : <img id='veg-icon' src={assets.veg} alt=""/> }
//       </div>

//       {!cartItems?.[id] ? (
//         <button className="popular__button" onClick={() => addToCart(id)}>
//           <i className="ri-shopping-bag-3-fill"></i>
//         </button>
//       ) : (
//         <div className="food-item-counter">
//           <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
//           <p>{cartItems[id]}</p>
//           <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
//         </div>
//       )}
//     </article>

    
//     </div>
//     </section>
//   )
// }

// export default FoodItem

import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'
import "remixicon/fonts/remixicon.css"; 

const FoodItem = ({id, name, price, description, image}) => {
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  const nonVegItems = ["Chicken Burger", "2 for OFFER", "Double Decker Chicken Burger", "Grilled Shawarma", "Grilled Chicken Tacos", "Classic Chicken Burger ", "Chicken Cheese Burger", ];


  return (
    <section className="popular section" id="popular">
      <div className="popular-container container grid">

    <article className="popular__card food-item">
      <img 
        src={url+"/images/"+image} 
        className="popular__img" 
        alt={name} 
      />

      <h2 className="popular__title">{name}</h2>
      <p className="food-item-desc">{description}</p>
      
      <div className="price-container">
        <span className="popular__price">₹{price}</span>
        {nonVegItems.includes(name) 
          ? <span className="non-veg-icon"><img className='non-veg' src={assets.non_veg} alt="" />Non Veg</span> 
          : <span className="veg-icon"><img className='veg' src={assets.veg} alt="" />Veg</span> 
        }
      </div>

      {!cartItems?.[id] ? (
        <button className="popular__button" onClick={() => {
          console.log(id, "dd")
          addToCart(id)
        }}>
          <i className="ri-shopping-bag-3-fill"></i>
        </button>
      ) : (
        <div className="food-item-counter">
          <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
          <p>{cartItems[id]}</p>
          <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
        </div>
      )}
    </article>
    
    </div>
    </section>
  )
}

export default FoodItem