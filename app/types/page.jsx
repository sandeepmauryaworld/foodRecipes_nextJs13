import Link from 'next/link';
import React from 'react'


const fetchRecipesArea= async()=>{


    // await new Promise((res)=>setTimeout(res,1000))/this is for testing loading components from nextjs13
    const res= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    const response= await res.json();
    return response.meals.map((a)=>a.strArea)
};


const  page=async()=> {


    const areas=await fetchRecipesArea()
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-5 p-5'>
            {areas.map((a,idx)=><Link className='text-center rounded shadow-gray-500 bg-gray-300 text-2xl py-10 font-bold hover:bg-blue-400 hover:text-white' href={`/types/${a}`}> {a}</Link>)}
        </div>
    )
}

export default page