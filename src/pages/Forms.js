import React from 'react'
import AppPersonalInfo from './AllForms/AppInfoForm/AppPersonalInfo'
import AppAcademicInfo from './AllForms/AppInfoForm/AppAcademicInfo'
import Involvement from './AllForms/AppInfoForm/Involvement'

function Forms() {
  return (
    <div> 
      <AppAcademicInfo/>
      <AppPersonalInfo />
      <Involvement />
    </div>
  )
}

export default Forms