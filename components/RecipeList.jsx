import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RecipeList = ({recipes, type}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-5 p-5'>

        {
            recipes.map((recipe,idx)=>{
                return(
                    <div className='rounded px-3 py-1 block mt-5 hover:bg-blue-200 text-center bg-slate-200 overflow-hidden' key={idx}>
                            <Image src={recipe.strMealThumb} alt='recipe img' height={500} width={500} />
                            <div className='p-5'>
                                <h2 className='text-2xl font-bold'>{recipe.strMeal}</h2>
                                <Link href={`/types/${type}/${recipe.idMeal}`} className='bg-blue-300 text-white'>Get Recipe Details </Link>
                            </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RecipeList