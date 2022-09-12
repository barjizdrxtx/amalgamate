import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Tab } from '@mui/material'
import React, { useState } from 'react'
import { AllTabs } from './TabComponents/AllTabs';
import { Faq } from './TabComponents/Faq';
import { Seo } from './TabComponents/Seo';


export const TabHome = (props: any) => {

  const [value, setValue] = React.useState('1');


  const { tabData7, tabData8, formik, faq, setFaq,
    overview, setOverView, symptoms, setSymptoms, causes, setCauses, complications,
    setComplications, home_remadies, setHome_remadies, diet_and_nutrition, setDiet_and_nutrition


  } = props;



  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }



  return (
    <Grid>

      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>

          <Box sx={{ backgroundColor: "white" }}>

            <TabList onChange={handleChange} aria-label="lab API tabs example">

              {["OverView", "Symptoms", "Causes", "Complication", "Home Remedy", "DietAndNutrition", "Faq", "Seo"].map((data, index) =>

                <Tab label={data} value={JSON.stringify(index + 1)} />

              )}


            </TabList>

          </Box>

          <TabPanel value="1">

            <AllTabs
              inputfield={overview}
              setInputField={setOverView}
            />

          </TabPanel>

          <TabPanel value="2">

            <AllTabs
              inputfield={symptoms}
              setInputField={setSymptoms}
            />

          </TabPanel>

          <TabPanel value="3">

            <AllTabs
              inputfield={causes}
              setInputField={setCauses}
            />

          </TabPanel>

          <TabPanel value="4">

            <AllTabs
              inputfield={complications}
              setInputField={setComplications}
            />

          </TabPanel>

          <TabPanel value="5">

            <AllTabs
              inputfield={home_remadies}
              setInputField={setHome_remadies}
            />

          </TabPanel>

          <TabPanel value="6">

            <AllTabs
              inputfield={diet_and_nutrition}
              setInputField={setDiet_and_nutrition}
            />

          </TabPanel>

          <TabPanel value="7">
            <Faq tabData7={tabData7} formik={formik} faq={faq} setFaq={setFaq} />
          </TabPanel>

          <TabPanel value="8">
            <Seo tabData8={tabData8} formik={formik} />
          </TabPanel>

        </TabContext>
      </Box>

    </Grid >
  )
}


