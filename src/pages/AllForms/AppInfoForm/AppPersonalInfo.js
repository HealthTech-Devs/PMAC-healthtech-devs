import React from 'react';
import {useForm} from 'react-hook-form';


export default function AppInfo() {

  const {register, handleSubmit, formState: {errors}}= useForm();

   const onSubmit = data => console.log(data);

//   const { userData, setUserData } = useStepperContext(); { formValues, onChange }

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setUserData({ ...userData, [name]: value });
// };

    return (
      <>
    
        <div className=" sm:mt-0">
          <div >
            
            <div className=" w-full md:mt-10">
              <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div className="overflow-hidden shadow sm:rounded-md">
            
                  <div className="bg-white px-4 py-5 sm:p-6">
                    
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" 
                        className="block text-sm font-medium text-gray-700"
                       >
                          First name  
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.firstName ? 'border-bred' : ''
                          }`}
                          {...register("firstName", {required: true, maxLength:80})}
                          
                        />
                        {errors.firstName && (<span class="inline-flex text-sm text-bred">Please enter your First Name.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.lastName ? 'border-bred' : ''
                          }`}
                          {...register("lastName", {required: true, maxLength:80})}
                        />
                        {errors.lastName && (<span class="inline-flex text-sm text-bred">Please enter your Last Name.</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="cwid" className="block text-sm font-medium text-gray-700">
                          ULM CWID #
                        </label>
                        <input
                          type="text"
                          name="cwid"
                          id="cwid"
                         
           
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.cwid ? 'border-bred' : ''
                          }`}
                          {...register("cwid", {required: true, minLength:8, maxLength:8})}
                        />
                        {errors.cwid && (<span class="inline-flex text-sm text-bred">Please enter your correct CWID [xxxx-xxxx].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                          Cell Phone
                        </label>
                        <input
                          type="text"
                          name="cell-phone"
                          id="cell-phone"
                          {...register("number", {required: true, minLength: 10, maxLength:10})}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.number ? 'border-bred' : ''
                          }`}
                        />
                        {errors.number && (<span class="inline-flex text-sm text-bred">Please enter your correct Phone number [xxx-xxx-xxxx].</span>)}
                      </div>
                      
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-green focus:outline-none focus:ring-green sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Street address
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.address ? 'border-bred' : ''
                          }`}
                          {...register("address", {required: true, maxLength:80})}
                        />
                        {errors.address && (<span class="inline-flex text-sm text-bred">Please enter your correct Address.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          autoComplete="address-level2"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.city ? 'border-bred' : ''
                          }`}
                          {...register("city", {required: true, maxLength:80})}
                        />
                        {errors.city && (<span class="inline-flex text-sm text-bred">Please enter your correct City.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="region"
                          id="region"
                          autoComplete="address-level1"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.state ? 'border-bred' : ''
                          }`}
                          {...register("state", {required: true, maxLength:80})}
                        />
                        {errors.state && (<span class="inline-flex text-sm text-bred">Please enter your correct State/Province.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="postal-code"
                          id="postal-code"
                          autoComplete="postal-code"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.zip ? 'border-bred' : ''
                          }`}
                          {...register("zip", {required: true, maxLength:5})}
                        />
                        {errors.zip && (<span class="inline-flex text-sm text-bred">Please enter your correct Zip/Postal Code [x-xxxxx].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          ULM Email address
                        </label>
                        <input
                          type="text"
                          name="email-ulm"
                          id="email-ulm"
                          autoComplete="email"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.ulm ? 'border-bred' : ''
                          }`}
                          {...register("ulm", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                        />
                        {errors.ulm && (<span class="inline-flex text-sm text-bred">Please enter your correct ULM email address [...@warhawks.ulm.edu].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Alternative Email address
                        </label>
                        <input
                          type="text"
                          name="email-alternate"
                          id="email-alternate"
                          autoComplete="email"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.alternate ? 'border-bred' : ''
                          }`}
                          {...register("alternate", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                        />
                        {errors.alternate && (<span class="inline-flex text-sm text-bred">Please enter your correct Alternate email address [...@example.com].</span>)}
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
  