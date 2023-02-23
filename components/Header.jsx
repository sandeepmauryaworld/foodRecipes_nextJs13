"use client"
import Link from 'next/link'

import React from 'react'
import {usePathname} from 'next/navigation' 
const Header = () => {

  const pathname= usePathname().split('/');
  const currentArea = pathname[2];
  const recipeID= pathname[3]
  return (
    <div className='py-5 bg-slate-400 flex justify-between px-2 items-center' >

      <div>
        <Link className='bg-blue-500 ' href={'/'}><h1 className='text-blue-700 font-bold text-5xl text-center' >FoodE</h1> </Link>
      </div>
      {pathname && currentArea &&  <Link className='text-white p-4 text-xs rounded font-bold bg-blue-500' href={recipeID ? `/types/${currentArea} `:'/types'}>
        Back to {recipeID ? `${currentArea} recipes`: 'recipe type'}
        </Link>}
    </div>
  )
}

export default Header