import React from 'react'
import { ingatlanok } from "../data"
import { SinglePropertie } from './SinglePropertie';


export const Properties = () => {
  console.log(ingatlanok);
  return (
    <div className="container">
      <div className='d-flex justify-content-center gap-3 flex-wrap bg-light '>
        <h4 className='w-100 m-2 text-center '>Aktuális ingatlan kínálatunk</h4>
        {ingatlanok.map(obj=><SinglePropertie key={obj.id} {...obj}/>)}
      </div>
    </div>
  )
}

