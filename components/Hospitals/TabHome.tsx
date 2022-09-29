import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Hospitals } from './HospitalManage/Hospitals';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Hospitals",
      component: <Hospitals />
    },
    {
      label: "Schedule",
      component: ""
    },
    {
      label: "Health Packages",
      component: ""
    }
  ]


  return <MainTab tabData={tabData} />
}