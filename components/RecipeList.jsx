import Image from 'next/image'
import React from 'react'
Image

const RecipeList = ({recipes, type}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-5 p-5'>

        {
            recipes.map((recipe,idx)=>{
                return(
                    <div className='rounded bg-slate overflow-hidden' key={idx}>
                            <Image src={recipe.strMealThumb} alt='recipe img' height={500} width={500} />
                            <div>
                                <h2>{}</h2>
                            </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RecipeList