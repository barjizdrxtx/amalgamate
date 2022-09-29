import * as React from 'react';
import Box from '@mui/material/Box';
import { Clinics } from './ClinicsManage/Clinics';
import { Typography } from '@mui/material';
import { CreateClinics } from './ClinicsManage/CreateClinics/CreateClinics';
import { useThemeColor } from '../../hooks/useThemeColor';
import { MainTab } from '../MainTab/MainTab';

export const TabHome = () => {

  const tabData = [
    {
      label: "Create Clinic",
      component: <Clinics />
    },
    {
      label: "Schedule",
      component: <CreateClinics />
    },
    {
      label: "Health Packages",
      component: <Clinics />
    }
  ]

 
  return <MainTab tabData={tabData} />
}