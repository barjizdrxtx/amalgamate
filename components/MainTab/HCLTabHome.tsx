import React from 'react';
import { Seo } from '../Seo/Seo';
import { Info } from '../Tabs/HCLTabComponents/Info';
import { Amenities } from '../Tabs/HCLTabComponents/Amenities';
import { Procedures } from '../Tabs/HCLTabComponents/Procedures';
import { Specialisation } from '../Tabs/HCLTabComponents/Specialisation';
import { Payments } from '../Tabs/HCLTabComponents/Payments';
import { Timing } from '../Tabs/HCLTabComponents/Timing';
import { MainTab } from './MainTab';
import Images from '../Tabs/HCLTabComponents/Images';

export const HCLTabHome = (props: any) => {

  const { tabData1, tabData2, procedures, setProcedures, formik, amineties, setAmenities, payments, setPayments,
    documents, setDocuments, specialities, setSpecialities, image, setImage } = props;

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
      label: "Images",
      component: <Images image={image} setImage={setImage} />

    },

    {
      label: "Procedures",
      component: <Procedures procedures={procedures} setProcedures={setProcedures} formik={formik} />

    },
    {
      label: "Amineties",
      component: <Amenities amineties={amineties} setAmenities={setAmenities} />
    },
    {
      label: "Payments",
      component: <Payments payments={payments} setPayments={setPayments} />

    },
    {
      label: "Timing",
      component: <Timing />

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


