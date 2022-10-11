import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Hospitals } from './HospitalManage/Hospitals';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Hospitals",
      component: <Hospitals />
    },
  ]


  return <MainTab tabData={tabData} />
}