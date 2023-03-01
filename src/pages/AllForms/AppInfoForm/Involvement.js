import React from 'react'
import Table from '../Table';
import {useForm} from 'react-hook-form';

function Involvement() {
    const {register, handleSubmit, formState: {errors}}= useForm();
    const headingsone = ['Haha', 'Column 2', 'Column 3'];
    const onSubmit = data => console.log(data);
  return (
    <div>
        <div className="mt-10 w-full md:mt-10">
    <form action="#" method="POST" ><Table headings={headingsone}/>
    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                
              </form>
              </div>
              </div>
  )
}

export default Involvement