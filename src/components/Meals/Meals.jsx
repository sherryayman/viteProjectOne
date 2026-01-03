import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
export default function Meals() {
  const[mealsDetails, setMealsDetails]=useState(null)
  const {id} = useParams()
  const navigate = useNavigate()

  async function getMealsDetails(id){
    let res=await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    console.log(res.data);
    if (res.data.meals === null) {
      navigate('*')
    }
      else{
    setMealsDetails(res.data.meals[0])}
  }
  useEffect(()=>{
    getMealsDetails(id)
  },[id])

const ingredients = []

if (mealsDetails) {
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealsDetails[`strIngredient${i}`]
    const measure = mealsDetails[`strMeasure${i}`]

    if (ingredient && ingredient.trim() !== "") { 
      ingredients.push(`${ingredient}: ${measure}`)
    }
  }
}



  return (
    <div className="allpage p-4">
    <h2 className="text-3xl font-cursive font-semibold mb-4 bg-gradient-to-r to-orange-500 from-amber-300 bg-clip-text text-transparent">Learn, Cook, Eat Your Food</h2>
    <div className="flex">
       <div className='w-1/3' >
       <h2 className='font-bold font-cursive text-2xl'>{mealsDetails?.strMeal}</h2>
       <img src={mealsDetails?.strMealThumb} className='w-70 rounded-2xl my-2' alt={mealsDetails?.strMeal} />
       <button className='border mx-2 px-3  my-2 rounded bg-red-600 text-white text-sm py-1.5'><i class="fa-brands fa-youtube me-1"></i>Youtube</button>
       <button className='border mx-2 px-4  my-2 rounded bg-green-500 text-white text-sm py-1.5'><i class="fa-solid fa-globe me-1"></i>Source</button>

    </div>
    <div className='w-1/3'>
        <p>{mealsDetails?.strInstructions}</p>
    </div>
    <div className='w-1/3'>
    <div className='bg-white rounded p-3'>
    <h3 className="font-bold font-cursive text-lg mb-2 border-b-4 border-gray-400 py-2">Ingredients</h3>
    <ul className="list-disc pl-5">
    {ingredients.map((item) => (
      <li>{item}</li>
    ))}
    </ul>
    </div>

    </div>
    </div>
    </div>
  )
}
