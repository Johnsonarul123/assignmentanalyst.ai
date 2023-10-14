
import React, { useState } from 'react';
import Collapsablecard from './Collapsablecard';

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card p-6 my-4 rounded-lg border-2 border-slate-400 shadow-lg ">
      <div className="flex flex-col lg:flex-row sm:justify-between">
        <div className='flex flex-col lg:flex-row sm:gap-4 '>
          <h2 className='w-[13rem]  sm:mb-0'>{item.name}</h2>
          <p className='w-[13rem]  sm:mb-0'><span className='font-bold'>Email</span> <br/>{item.email}</p>
          <h2 className='w-[13rem]  sm:mb-0'><span className='font-bold'>City </span><br/> {item.address.city}</h2>
          <h2 className='w-[13rem]  sm:mb-0'><span className='font-bold'>Street </span><br/> {item.address.street}</h2>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="  flex-none rounded-full bg-red-500 px-3.5 py-2.5 text-sm font-bold text-white  hover:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 mt-4 lg:mt-0 shadow-lg "
        >
          {isOpen ? 'Hide Details' : 'View Details'}
        </button>
      </div>
      {isOpen && (
        <div className="mt-4">
          <Collapsablecard item={item} />
        </div>
      )}
    </div>
  );
};

export default Card;
