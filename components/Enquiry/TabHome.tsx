import * as React from 'react';
import { MainTab } from '../MainTab/MainTab';
import { EnquiryClinics } from './Enquirys/EnquiryClinics';
import { EnquiryDoctors } from './Enquirys/EnquiryDoctors';
import { EnquiryHospitals } from './Enquirys/EnquiryHospitals';
import { EnquiryLabs } from './Enquirys/EnquiryLabs';


export const TabHome = () => {

  const tabData = [
    {
      label: "Doctors",
      component: <EnquiryDoctors />
    },
    {
      label: "Clinics",
      component: <EnquiryClinics />
    },
    {
      label: "Labs",
      component: <EnquiryLabs />
    },
    {
      label: "Hospitals",
      component: <EnquiryHospitals />
    },

  ]


  return <MainTab tabData={tabData} />
}