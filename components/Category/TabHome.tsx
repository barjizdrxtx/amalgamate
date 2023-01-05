import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Categories } from './CategoryManage/Categories';


export const TabHome = () => {

  const tabData = [
    {
      label: "Categories",
      component: <Categories />
    },
  ]


  return <MainTab tabData={tabData} />
}