import * as React from 'react';
import { Labs } from '../Labs/LabManage/Labs';
import { MainTab } from '../MainTab/MainTab';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Doctors",
      component: <Labs />
    },
    {
      label: "Health Packages",
      component: ""
    },
  ]


  return <MainTab tabData={tabData} />
}