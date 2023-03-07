import { useState } from 'react';
import Statue from '../../photos/ulm_academic_maroon_white.png';
import Image from 'next/image';

export default function Card  ({ title, description })  {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 max-w-md mx-auto p-3 border-red rounded-xl shadow-md overflow-hidden md:max-w-2xl border ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image className="h-48 w-full object-cover md:w-48 text-3xl" src={Statue} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-lg text-gold font-bold">{title}</div>
          
          <div className="mt-4">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 bg-green text-white rounded-md hover:opacity-80 hover:text-white "
            >
              {isOpen ? 'Hide Details' : 'Show Details'}
            </button>
            {isOpen && (
              <div className="mt-4">
                <p className="text-black">{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

