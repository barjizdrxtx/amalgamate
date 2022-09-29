import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Labs } from './LabManage/Labs';
import { LabsTest } from './LabManage/LabsTest';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Labs",
      component: <Labs />
    },
    {
      label: "Lab Test",
      component: <LabsTest />
    },
  ]

 
  return <MainTab tabData={tabData} />
}