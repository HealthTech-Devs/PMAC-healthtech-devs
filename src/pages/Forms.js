import React from 'react'
import AppInfo from './AllForms/AppInfoForm/AppInfo'
import InfoReleaseForm from './AllForms/InfoRelease/InfoReleaseForm'


function Forms() {
  return (
    <div> 
       <table className="table-auto border border-black">
      <thead>
        <tr>
          <th className="w-3/4 border border-black px-4 py-2">Forms</th>
          <th className="w-1/4 border border-black px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="w-3/4 border border-black px-4 py-2">Applicant Information Form</td>
          <td className="w-1/4 border border-black px-4 py-2">Incomplete</td>
        </tr>
        <tr>
          <td className="w-3/4 border border-black px-4 py-2">Information Release Form</td>
          <td className="w-1/4 border border-black px-4 py-2">Incomplete</td>
        </tr>
        <tr>
          <td className="w-3/4 border border-black px-4 py-2">Row 3, Column 1</td>
          <td className="w-1/4 border border-black px-4 py-2">Row 3, Column 2</td>
        </tr>
      </tbody>
    </table>
       
       {/* <AppInfo/> */}
       <InfoReleaseForm />

    </div>
  )
}

export default Forms


