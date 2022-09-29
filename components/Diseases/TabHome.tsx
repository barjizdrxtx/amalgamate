import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Diseases } from './DiseasesManage/Diseases';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Diseases",
      component: <Diseases />
    },
    {
      label: "Create Category",
      component: ""
    },
  ]


  return <MainTab tabData={tabData} />
}