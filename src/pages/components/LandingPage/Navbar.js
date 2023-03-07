import React from 'react'
import Link from 'next/link'
import login from '../../SignUp';
import signup from '../../Login'

function Navbar() {
  return (
    <div>
        <div className="min-h-full p-3 bg-red mb-10 flex justify-between items-center">
  <span className='text-1xl font-bold text-gold'>ULM PMAC</span>
  <div className="flex items-center">
    <div className="relative">
      <button className="bg-green text-white rounded-full py-1 px-5 font-bold hover:text-red">
        <Link href="../../Login">Log in</Link>
        </button>
     
    </div>
    <button className="bg-gold text-white rounded-full py-1 px-5 font-bold ml-3 hover:text-red">
      <Link href="../../SignUp" >  Get Started </Link>
     </button>
  </div>
</div>



    </div>
  )
}

export default Navbar