import * as React from 'react';
import { Advertisement } from './AdvertisementManage/Advertisement';
import { MainTab } from '../MainTab/MainTab';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Advertisement",
      component: <Advertisement />
    }
  ]


  return <MainTab tabData={tabData} />
}