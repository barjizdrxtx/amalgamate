import * as React from 'react';
import { Clinics } from './ClinicsManage/Clinics';
import { MainTab } from '../MainTab/MainTab';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Clinics",
      component: <Clinics />
    }
  ]

 
  return <MainTab tabData={tabData} />
}