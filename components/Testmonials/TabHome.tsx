import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Testimonials } from './ClinicsManage/Testimonials';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Testimonials",
      component: <Testimonials />
    }
  ]


  return <MainTab tabData={tabData} />
}