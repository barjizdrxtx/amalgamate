import React from 'react'
import { Info } from './TabComponents/Info';
import { Id } from './TabComponents/Id';
import { Profile } from './TabComponents/Profile';
import { SpecializedIn } from './TabComponents/SpecializedIn';
import { MainTab } from '../../../MainTab/MainTab';
import { Seo } from '../../../Seo/Seo';
import Images from './TabComponents/Images';
import { Languages } from './TabComponents/Languages';


export const TabHome = (props: any) => {

  const { tabData1, tabData2, tabData3, tabData8, formik,
    certificates, setCertificates,
    idProof, setIdProof, specialisedIn, setSpecialisedIn,
    image, setImage, language, setLanguage, alternate_mobile_numbers, setAlternate_mobile_numbers
  } = props;

  const tabData = [


    {
      label: "Info",
      component: <Info tabData1={tabData1} formik={formik}
        documents={certificates}
        setDocuments={setCertificates}
        alternate_mobile_numbers={alternate_mobile_numbers}
        setAlternate_mobile_numbers={setAlternate_mobile_numbers}

      />

    },
    {
      label: "Images",
      component: <Images image={image} setImage={setImage} />

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
      label: "Language",
      component: <Languages tabData3={tabData3} formik={formik} language={language} setLanguage={setLanguage} />

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
      component: <Seo tabList={tabData8} formik={formik} />

    }
  ]


  return <MainTab tabData={tabData} />

}
