  
import React from 'react';
import {useForm} from 'react-hook-form';
import ReactDOM from 'react-dom';
import FormPDF from '../../components/FormPDF'


export default function AppAcademicInfo() {

  const {register, handleSubmit, formState: {errors}}= useForm();

  const onSubmit = data => {
    ReactDOM.render(<FormPDF className="mt-10 sm:mt-0" data={data}/>, document.getElementById('PDFView'));
  }

  
    return (
      <>
    
        <div className="mt-10 sm:mt-0" >
        <div className="mt-10 sm:mt-0" id="PDFView">
        
          </div >
          <div >
            
            <div className="mt-10 w-full md:mt-10">
              <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="overflow-hidden shadow sm:rounded-md">
                <h1>Academic Information</h1>
                  <div className="bg-white px-4 py-5 sm:p-6">
                    
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="major" 
                        className="block text-sm font-medium text-gray-700"
                       >
                          Major  
                        </label>
                        <input
                          type="text"
                          name="major"
                          id="major"
                          
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.major ? 'border-bred' : ''
                          }`}
                          {...register("major", {required: true, maxLength:80})}
                          
                        />
                        {errors.major && (<span class="inline-flex text-sm text-bred">Please enter your Major.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="minor" className="block text-sm font-medium text-gray-700">
                          Minor
                        </label>
                        <input
                          type="text"
                          name="minor"
                          id="minor"
                         
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.minor ? 'border-bred' : ''
                          }`}
                          {...register("minor", {required: true, maxLength:80})}
                        />
                        {errors.minor && (<span class="inline-flex text-sm text-bred">Please enter your Minor.</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="expectedGrad" className="block text-sm font-medium text-gray-700">
                          Expected Graduation Date From ULM
                        </label>
                        <input
                          type="text"
                          name="expectedGrad"
                          id="expectedGrad"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.expectedGrad ? 'border-bred' : ''
                          }`}
                          {...register("expectedGrad", {required: true, minLength:10, maxLength:10})}
                        />
                        {errors.expectedGrad && (<span class="inline-flex text-sm text-bred">Please enter your expected Graduation Date [xx-xx-xxxx].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="overallGPA" className="block text-sm font-medium text-gray-700">
                          Overall Collegiate GPA
                        </label>
                        <input
                          type="text"
                          name="overallGPA"
                          id="overallGPA"
                          {...register("overallGPA", {required: true, minLength: 5, maxLength:5})}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.overallGPA ? 'border-bred' : ''
                          }`}
                        />
                        {errors.overallGPA && (<span class="inline-flex text-sm text-bred">Please enter your correct overall collegiate GPA [x.xxx].</span>)}
                      </div>
                      
  
                    
  
                      <div className="col-span-6">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                          Date of Proposed Entrance to Professional School 
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.date ? 'border-bred' : ''
                          }`}
                          {...register("date", {required: true, maxLength:80})}
                        />
                        {errors.date && (<span class="inline-flex text-sm text-bred">Please enter your correct date of proposed entrance.</span>)}
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="scores" className="block text-sm font-medium text-gray-700">
                          <span>Scores of your most recent professional entry exam (MCAT, DAT, OAT, GRE). <br/></span>
                          <span>Please include your breakdown scores.</span> 
                        </label>
                        <textarea
                          type="text"
                          id="scores"
                          rows="4" cols="50"
                          name="scores"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.scores ? 'border-bred' : ''
                          }`}
                          {...register("scores", {required: true, maxLength:80})}
                        />
                        {errors.scores && (<span class="inline-flex text-sm text-bred">Please enter your correct breakdown scores for your most recent professional exam.</span>)}
                      </div>
  


                      <div className="col-span-6">
                        <label htmlFor="examDate" className="block text-sm font-medium text-gray-700">
                          Date of exam taken or expected date of exam 
                        </label>
                        <input
                          type="date"
                          id="examDate"
                          name="examDate"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.examDate ? 'border-bred' : ''
                          }`}
                          {...register("examDate", {required: true, maxLength:80})}
                        />
                        {errors.examDate && (<span class="inline-flex text-sm text-bred">Please enter the correct date of exam.</span>)}
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="appType" className="block text-sm font-medium text-gray-700">
                          Type of School Application will be sent 
                        </label>
                        <input
                          type="text"
                          id="appType"
                          rows="4" cols="50"
                          name="appType"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.appType ? 'border-bred' : ''
                          }`}
                          {...register("appType", {required: true, maxLength:80})}
                        />
                        {errors.appType && (<span class="inline-flex text-sm text-bred">Please enter the correct type of school application that will be sent.</span>)}
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="appIDType" className="block text-sm font-medium text-gray-700">
                          Depending on the type pf application, fill in the appropriate ID numbers. 
                        </label>
                        {/* <div class="grid grid-cols-6 gap-4 ">


                        <input
                          type="checkbox"
                          id="appIDType"
                          
                          name="appIDType"
                          className={`mt-1 block rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.appIDType ? 'border-bred' : ''
                          }`}
                          {...register("appIDType")}
                        />
                        <label htmlFor="amcas" >AMCAS Letter ID</label>
                        <input
                          type="text"
                          id="appScore"
                          
                          name="appScore"
                          className={`col-span-2 mt-1 block rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.appScore ? 'border-bred' : ''
                          }`}
                          {...register("appScore")}
                        />
                        
                      </div> */}
                      {errors.appIDType && (<span class="inline-flex text-sm text-bred">Please enter your correct Address.</span>)}
                      </div>

                      <div className="col-span-6">
                        <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
                          Faculty Members Submitting Evaluation on your Behalf: <br />
                          Name/Title/Department 
                        </label>
                        <textarea
                          type="text"
                          id="faculty"
                          rows="4" cols="50"
                          name="faculty"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.faculty ? 'border-bred' : ''
                          }`}
                          {...register("faculty", {required: true, maxLength:80})}
                        />
                        {errors.faculty && (<span class="inline-flex text-sm text-bred">Please enter the name of Faculty Recommenders.</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

       
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
      </>
    )
  }
  