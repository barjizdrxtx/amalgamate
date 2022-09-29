import * as React from 'react';
import { Seo } from '../../../Seo/Seo';
import { Faq } from './TabComponents/Faq';
import { AllTabs } from './TabComponents/AllTabs';
import { MainTab } from '../../../MainTab/MainTab';

export const TabHome = (props: any) => {

  const { tabData7, tabData8, formik, faq, setFaq,
    overview, setOverView, symptoms, setSymptoms, causes, setCauses, complications,
    setComplications, home_remadies, setHome_remadies, diet_and_nutrition, setDiet_and_nutrition } = props;



  const tabData = [
    {
      label: "OverView",
      component: <AllTabs
        inputfield={overview}
        setInputField={setOverView}
      />

    },
    {
      label: "Symptoms",
      component: <AllTabs
        inputfield={symptoms}
        setInputField={setSymptoms}
      />
    },
    {
      label: "Causes",
      component: <AllTabs
        inputfield={causes}
        setInputField={setCauses}
      />
    },
    {
      label: "Complication",
      component: <AllTabs
        inputfield={complications}
        setInputField={setComplications}
      />
    },
    {
      label: "Home Remedy",
      component: <AllTabs
        inputfield={home_remadies}
        setInputField={setHome_remadies}
      />
    },
    {
      label: "Diet And Nutrition",
      component:
        <AllTabs
          inputfield={diet_and_nutrition}
          setInputField={setDiet_and_nutrition}
        />
    },
    {
      label: "Faq",
      component: <Faq tabData7={tabData7} formik={formik} faq={faq} setFaq={setFaq} />
    },
    {
      label: "Seo",
      component: <Seo tabList={tabData8} formik={formik} />
    }
  ]


  return <MainTab tabData={tabData} />
}
