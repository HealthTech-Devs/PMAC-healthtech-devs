import React, { useState } from 'react';
import {useForm} from 'react-hook-form';
import AppAcademicInfo from './AppAcademicInfo';
import Table from '../Table'


export default function AppPersonalInfo({ formData, onChangeForm, errors }) {

  const { register } = useForm();
  


  register('firstName', { onChange: (e) => onChangeForm(e) });
  register('lastName', { onChange: (e) => onChangeForm(e) });
  register('cwid', { onChange: (e) => onChangeForm(e) });
  register('number', { onChange: (e) => onChangeForm(e) });
  register('country', { onChange: (e) => onChangeForm(e) });
  register('address', { onChange: (e) => onChangeForm(e) });
  register('city', { onChange: (e) => onChangeForm(e) });
  register('state', { onChange: (e) => onChangeForm(e) });
  register('zip', { onChange: (e) => onChangeForm(e) });
  register('ulm', { onChange: (e) => onChangeForm(e) });
  register('alternate', { onChange: (e) => onChangeForm(e) });

  // const [nextPages, setNextPages] = useState(false);

  // const nextPage = () => {
  //   setNextPages(true);
  // }

    return (
      <>
     {/* { !nextPages &&  */}
      <div className=" sm:mt-0">
          <div >
          
            <div className=" w-full md:mt-10">
              
                <div className="overflow-hidden shadow sm:rounded-md">
                <h1>Personal Information</h1>
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
                          name="firstName"
                          id="firstName"
                          defaultValue={formData.firstName}
                          autoComplete="given-name"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.firstName ? 'border-bred' : ''
                          }`}
                          {...register("firstName", {required: true, maxLength:80})}
                        />
                        {errors.firstName && (<span className="inline-flex text-sm text-bred">Please enter your First Name.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName} 
                          autoComplete="family-name"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.lastName ? 'border-bred' : ''
                          }`}
                          {...register("lastName", {required: true, maxLength:80})}
                        />
                        {errors.lastName && (<span className="inline-flex text-sm text-bred">Please enter your Last Name.</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="cwid" className="block text-sm font-medium text-gray-700">
                          ULM CWID #
                        </label>
                        <input
                          type="text"
                          name="cwid"
                          id="cwid"
                          value={formData.cwid} 
           
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.cwid ? 'border-bred' : ''
                          }`}
                          {...register("cwid", {required: true, minLength:8, maxLength:8})}
                        />
                        {errors.cwid && (<span className="inline-flex text-sm text-bred">Please enter your correct CWID [xxxx-xxxx].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                          Cell Phone
                        </label>
                        <input
                          type="text"
                          name="number"
                          id="number"
                          value={formData.number} 
                          {...register("number", {required: true, minLength: 10, maxLength:10})}
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.number ? 'border-bred' : ''
                          }`}
                        />
                        {errors.number && (<span className="inline-flex text-sm text-bred">Please enter your correct Phone number [xxx-xxx-xxxx].</span>)}
                      </div>
                      
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          defaultValue={formData.country}
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-green focus:outline-none focus:ring-green sm:text-sm"
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
  
                      <div className="col-span-6">
                        <label htmlFor="streetaddress" className="block text-sm font-medium text-gray-700">
                          Street address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={formData.address} 
                          autoComplete="street-address"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.address ? 'border-bred' : ''
                          }`}
                          {...register("address", {required: true, maxLength:80})}
                        />
                        {errors.address && (<span className="inline-flex text-sm text-bred">Please enter your correct Address.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={formData.city} 
                          autoComplete="address-level2"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.city ? 'border-bred' : ''
                          }`}
                          {...register("city", {required: true, maxLength:80})}
                        />
                        {errors.city && (<span className="inline-flex text-sm text-bred">Please enter your correct City.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                          State / Province
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          value={formData.state} 
                          autoComplete="address-level1"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.state ? 'border-bred' : ''
                          }`}
                          {...register("state", {required: true, maxLength:80})}
                        />
                        {errors.state && (<span className="inline-flex text-sm text-bred">Please enter your correct State/Province.</span>)}
                      </div>
  
                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                          ZIP / Postal code
                        </label>
                        <input
                          type="text"
                          name="zip"
                          id="zip"
                          value={formData.zip} 
                          autoComplete="postal-code"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.zip ? 'border-bred' : ''
                          }`}
                          {...register("zip", {required: true, maxLength:5})}
                        />
                        {errors.zip && (<span className="inline-flex text-sm text-bred">Please enter your correct Zip/Postal Code [x-xxxxx].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          ULM Email address
                        </label>
                        <input
                          type="text"
                          name="ulm"
                          id="ulm"
                          value={formData.ulm} 
                          autoComplete="email"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.ulm ? 'border-bred' : ''
                          }`}
                          {...register("ulm", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                        />
                        {errors.ulm && (<span className="inline-flex text-sm text-bred">Please enter your correct ULM email address [...@warhawks.ulm.edu].</span>)}
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Alternative Email address
                        </label>
                        <input
                          type="text"
                          name="alternate"
                          id="alternate"
                          value={formData.alternate}
                          autoComplete="email"
                          className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green focus:ring-green sm:text-sm ${
                            errors.alternate ? 'border-bred' : ''
                          }`}
                          {...register("alternate", {required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i})}
                        />
                        {errors.alternate && (<span className="inline-flex text-sm text-bred">Please enter your correct Alternate email address [...@example.com].</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-red px-4 py-3 text-right sm:px-6">
                  <div 
                      className="inline-flex justify-center rounded-md border border-transparent bg-green py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Next
                    </div>
                  </div>
                </div>
             
            </div>
          
          </div>
        
        </div>

        {/* }{nextPages && <AppA />} */}
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
  
      </>
    )
  }
  