import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { CreateSchedule } from './DoctorsManage/CreateSchedule/CreateSchedule';
import { Doctors } from './DoctorsManage/Doctors';

export const TabHome = () => {

  const tabData = [
    {
      label: "All Doctors",
      component: <Doctors />
    },
  ]


  return <MainTab tabData={tabData} />
}