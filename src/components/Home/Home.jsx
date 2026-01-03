import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const [categories, setCategories]=useState([])
  const [meals, setMeals]=useState([])
  const navigate = useNavigate()

  
  async function getCategories(){
    let req = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    // console.log(req.data.categories);
    setCategories(req.data.categories)
  }

  async function getMeals(){
    let res = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    console.log(res.data.meals);
    setMeals(res.data.meals)
  }

  async function getFilteredMeals(catName){
    let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
    console.log(res.data.meals);
    setMeals(res.data.meals)
  }

  useEffect(()=>{
    getCategories(),
    getMeals()
  },[])

  return <>
  <div className="allpage p-4">
    <h2 className="text-3xl font-cursive font-semibold mb-4 bg-gradient-to-r to-orange-500 from-amber-300 bg-clip-text text-transparent">Learn, Cook, Eat Your Food</h2>
    <div className='flex flex-wrap justify-start items-center'>
      <button
            onClick={getMeals}
            className='categ border border-gray-300 text-gray-500 mx-2 px-3 py-1 my-2 rounded-2xl hover:bg-green-500 hover:text-white transition'
          >
            All
      </button>
      {categories.map(cat => (
        <button
              onClick={() => getFilteredMeals(cat.strCategory)}
              className='categ border border-gray-300 text-gray-500 mx-2 px-3 py-1 my-2 rounded-2xl hover:bg-green-500 hover:text-white transition'>
              {cat.strCategory}
        </button>
    ))}
    </div>
    <hr className='mt-1'/>
  </div>
  <div className="allpage p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {meals.map(meal => (
  <div key={meal.idMeal} className="meal bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
    <img 
      src={meal.strMealThumb} 
      alt={meal.strMeal} 
      className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 object-cover"
    />
    <h3 className="font-semibold text-lg text-center">{meal.strMeal.split(' ').slice(0,2).join(' ')}</h3>
    <p className="text-green-600 text-sm text-center">
      {meal.strArea ? (
      <>
      <i className="fa-solid fa-earth-africa me-1"></i>
      {meal.strArea}
      </>) : null}
      </p>
    <button onClick={() => navigate(`/meal/${meal.idMeal}`)} className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition font-cursive text-sm mt-3">
      View Recipe
    </button>
  </div>
))}

</div>

  </div>
  </>
}
