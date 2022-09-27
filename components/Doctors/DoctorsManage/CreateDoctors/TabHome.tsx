import React from 'react'
import { Seo } from './TabComponents/Seo';
import { Info } from './TabComponents/Info';
import { Id } from './TabComponents/Id';
import { Profile } from './TabComponents/Profile';
import { SpecializedIn } from './TabComponents/SpecializedIn';
import { Timing } from './TabComponents/Timing';
import { MainTab } from '../../../MainTab/MainTab';


export const TabHome = (props: any) => {

  const { tabData1, tabData2, tabData3, tabData8, formik,
    certificates, setCertificates,
    idProof, setIdProof, specialisedIn, setSpecialisedIn } = props;

  const tabData = [


    {
      label: "Info",
      component: <Info tabData1={tabData1} formik={formik}
        documents={certificates}
        setDocuments={setCertificates} />

    },
    {
      label: "Id",
      component: <Id tabData2={tabData2} formik={formik}
        documents={idProof}
        setDocuments={setIdProof} />
    },
    {
      label: "Profile",
      component: <Profile tabData3={tabData3} formik={formik} />

    },
    {
      label: "Schedule",
      component: <Timing />

    },
    {
      label: "SpecializedIn",
      component: <SpecializedIn
        inputfield={specialisedIn}
        setInputfield={setSpecialisedIn} />

    },
    {
      label: "Badging",
      component: "Badging"

    },
    {
      label: "Promotion",
      component: "Promotion"

    },
    {
      label: "Seo",
      component: <Seo tabData8={tabData8} formik={formik} />

    }
  ]


  return <MainTab tabData={tabData} />

}




