import React from 'react';
import { Seo } from '../../../Tabs/HCLTabComponents/Seo';
import { Info } from '../../../Tabs/HCLTabComponents/Info';
import { Amenities } from '../../../Tabs/HCLTabComponents/Amenities';
import { Procedures } from '../../../Tabs/HCLTabComponents/Procedures';
import { Specialisation } from '../../../Tabs/HCLTabComponents/Specialisation';
import { MainTab } from './MainTab';

export const TabHome = (props: any) => {

  const { tabData1, tabData2, procedures, setProcedures, formik, amineties, setAmenities,
    documents, setDocuments, specialities, setSpecialities } = props;

  const tabData = [

    {
      label: "Info",
      component: <Info
        tabList={tabData1}
        formik={formik}
        documents={documents}
        setDocuments={setDocuments} />
    },
    {
      label: "Amineties",
      component: <Amenities amineties={amineties} setAmenities={setAmenities} />
    },
    {
      label: "Procedures",
      component: <Procedures procedures={procedures} setProcedures={setProcedures} formik={formik} />

    },
    {
      label: "Specialisation",
      component: <Specialisation specialities={specialities} setSpecialities={setSpecialities} formik={formik} />

    },
    {
      label: "Seo",
      component: <Seo tabList={tabData2} formik={formik} />

    }
  ]


  return <MainTab tabData={tabData} />

}


