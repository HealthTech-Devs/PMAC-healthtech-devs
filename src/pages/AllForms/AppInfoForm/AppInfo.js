import React, { useState } from 'react';
import AppAcademicInfo from './AppAcademicInfo'
import Involvement from './Involvement'
import AppPersonalInfo from './AppPersonalInfo'
// import {useForm} from 'react-hook-form';


function AppInfo() {
  // const {register}= useForm();
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        cwid: '',
        number: '',
        country: '',
        address: '',
        city:'',
        state:'',
        zip: '',
        ulm: '',
        alternate: '',
        major: '',
        minor: '',
        expectedGrad:'',
        overallGPA: '',
        date: '',
        scores: '',
        examDate: '',
        appType: '',
        faculty: '',


      });
    
      const handleFormChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        console.log(value);
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
  
        console.log("by__");
      };
      

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        const newErrors = {};
  const requiredFields = ['cwid', 'firstName', 'lastName', 'number', 'country', 'address', 'city', 'state', 'zip', 'ulm', 'alternate', 
                            'major', 'minor','expectedGrad', 'overallGPA','date', 'scores', 'examDate','appType', 'faculty']; // add all required fields here
  requiredFields.forEach((field) => {
    if (formData[field] === '') {
      newErrors[field] = `Field ${field} is required`;
    }
  });
  setErrors(newErrors);
    

        // fetch('https://example.com/api/submit-form', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData),
        // })
        //   .then((response) => response.json())
        //   .then((data) => console.log('Success:', data))
        //   .catch((error) => console.error('Error:', error));
       
      };
 
  return (
    <div>
        
       <form onSubmit={handleSubmit}>

            <AppPersonalInfo formData={formData} onChangeForm={handleFormChange} errors={errors} />
            <AppAcademicInfo formData={formData} onChangeForm={handleFormChange} errors={errors} />
            <Involvement /> 
            <div className='flex justify-center'>
                <button type ="submit" className="  bg-green hover:opracity-50 text-white font-bold py-2 px-4 rounded"> 
                Submit </button>
            </div>
       </form>
            
            
           
    


    </div>
  )
}

export default AppInfo