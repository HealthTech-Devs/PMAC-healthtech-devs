import React from 'react'
import Table from '../Table';
import {useForm} from 'react-hook-form';

function Involvement() {
    const {register, handleSubmit, formState: {errors}}= useForm();
    const headingsone = ['Activity', 'Years and Total Hours', 'Description of Involvement(Indicate leadershuo position if appropriate)'];
    const headingstwo = ['Work', 'Years and Total Hours', 'Description of Position and Duties'];
    const headingsthree = ['Experience', 'Years and Total Hours', 'Description of Experience and Duties'];
    const headingsfour = ['Honor/Award', 'Received Date', 'Description of Award'];
    const headingsfive = ['Research Project Name', 'YAcademic Years and Hours', 'Description of Project and Your Duties '];
    const headingssix = ['Expierence: Description of Experience', 'Individual or Group', 'Dates and Hours'];
    

    const onSubmit = data => console.log(data);
  return (
    <div className='mb-5'>
      <div className="mt-10 sm:mt-0">
            <div >
              
             
                  <div className="overflow-hidden shadow sm:rounded-md">
                  <h1>Involvement</h1>
                    <div className="bg-white px-4 py-5 sm:p-6">
                      
                    <div className="mt-10 w-full md:mt-10">

                    <h2 className="text-xl font-bold mb-2"> Membership/Academic Clubs </h2>
                    <Table className="w-full" headings={headingsone}/> 
  
                    <h2 className="text-xl font-bold mb-2 mt-10"> Work </h2>
                    <Table className="w-full" headings={headingstwo}/> 

                    <h2 className="text-xl font-bold mt-10"> Experiences within Chosen Field </h2>
                    <Table className="w-full" headings={headingsthree}/> 

                    <h2 className="text-xl font-bold mt-10"> Honors and Awards </h2>
                    <Table className="w-full" headings={headingsfour}/> 
                
                    <h2 className="text-xl font-bold mt-10"> Laboratory Research </h2>
                    <Table className="w-full" headings={headingsfive}/>

                    <h2 className="text-xl font-bold mt-10"> Volunteer Experiences </h2>
                    <Table className="w-full" headings={headingssix}/>
          

               
              </div>

              

                    </div>
                    
                    <div className="bg-red w-full px-4 py-3 text-right sm:px-6">
                    <div
                      
                      className="inline-flex justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </div>
                  </div></div></div></div>


        
              </div>
  )
}

export default Involvement