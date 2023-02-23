import React from 'react'


const fetchRecipesArea= async()=>{
    const res= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

    const response= await res.json();
    console.log(response);
};


const  page=async()=> {


    const areas=await fetchRecipesArea()
    return (
        <div>page</div>
    )
}

export default page