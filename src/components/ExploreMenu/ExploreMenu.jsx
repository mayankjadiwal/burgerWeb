import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  // console.log(category, "category")
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu!</h1>
      <p className='explore-menu-text'>Our offerings are more than just food—they're an experience. Dive into our signature creations, each made with the freshest ingredients, and discover why we’re the ultimate destination for fast food lovers. Hungry? Let’s make it delicious! Indulge in a variety of mouthwatering fast food options, crafted to satisfy every craving. From juicy burgers to crispy fries and cheesy pizzas, we bring you the perfect balance of flavors.  </p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
          // console.log(item,'item');
          
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
