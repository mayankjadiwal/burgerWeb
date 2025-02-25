// import React, { useContext } from 'react'
// import './FoodItem.css'
// import { assets } from '../../assets/assets'
// import { StoreContext } from '../../context/StoreContext';

// const FoodItem = ({id,name,price,description,image}) => {

//   const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)



//   return (
//     <div className='food-item'>
//         <div className="food-item-img-container">
//             <img className='food-item-image' src={url+"/images/"+image} alt="" />
//             {!cartItems[id]
//               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
//               :<div className="food-item-counter">
//                 <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
//                 <p>{cartItems[id]}</p>
//                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
//               </div>


//             }
//         </div>
//         <div className="food-item-info">
//             <div className="food-item-name-rating">
//                 <p>{name}</p>
//                 <img src={assets.rating_starts} alt="" />
//             </div>
//             <p className="food-item-desc">{description}</p>
//             <p className='food-item-price'>${price}</p>
//         </div>
      
//     </div>
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
      <span className="popular__price">₹{price}</span>

      {!cartItems?.[id] ? (
        <button className="popular__button" onClick={() => addToCart(id)}>
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