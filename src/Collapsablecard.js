import React from 'react'

export default function Collapsablecard({ item }) {
  return (
    <div className='flex gap-9 p-4 rounded-lg border-2 border-slate-400 shadow-inner'>
        <div>
        <p><span className='font-bold'>Phone:</span><br/>{item.phone}</p>
        <p><span className='font-bold'>Website:</span><br/>{item.website}</p>
        <p><span className='font-bold'>Company Name:</span><br/>{item.company.name}</p>
        <p><span className='font-bold'>Pharase :</span><br/> {item.company.catchPhrase}</p>
        </div>

        <div >
        <p><span className='font-bold'>Phone:</span><br/>{item.phone}</p>
        <p><span className='font-bold'>Website:</span><br/>{item.website}</p>
        <p><span className='font-bold'>Company Name:</span><br/>{item.company.name}</p>
        <p><span className='font-bold'>Pharase :</span><br/> {item.company.catchPhrase}</p>
        </div>
       
        </div>
        
  )
}
