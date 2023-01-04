import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { Products } from './ProductsManage/Products';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Products",
      component: <Products />
    }
  ]


  return <MainTab tabData={tabData} />
}