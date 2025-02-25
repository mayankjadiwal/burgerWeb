import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Recipe from '../../components/Recipe/Recipe'
import Contact from '../../components/Contact/Contact'

const Home = () => {

    const [category,setCategory] = useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Recipe/>
      <AppDownload/>
      <Contact/>
    </div>
  )
}

export default Home
