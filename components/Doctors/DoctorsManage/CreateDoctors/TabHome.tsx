import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Tab } from '@mui/material'
import React from 'react'
import { Seo } from './TabComponents/Seo';
import { Info } from './TabComponents/Info';
import { Id } from './TabComponents/Id';
import { Profile } from './TabComponents/Profile';
import { SpecializedIn } from './TabComponents/SpecializedIn';


export const TabHome = (props: any) => {

  const [value, setValue] = React.useState('1');

  const { tabData1, tabData2, tabData3, tabData8, formik,
    certificates, setCertificates,
    idProof, setIdProof, specialisedIn, setSpecialisedIn

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
              <Tab label="Info" value="1" />
              <Tab label="ID" value="2" />
              <Tab label="Profile" value="3" />
              <Tab label="SpecializedIn" value="4" />
              <Tab label="Seo" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Info tabData1={tabData1} formik={formik}
              documents={certificates}
              setDocuments={setCertificates} />
          </TabPanel>
          <TabPanel value="2">
            <Id tabData2={tabData2} formik={formik}
              documents={idProof}
              setDocuments={setIdProof} />
          </TabPanel>
          <TabPanel value="3">
            <Profile tabData3={tabData3} formik={formik}/>
          </TabPanel>
          <TabPanel value="4">
            <SpecializedIn
              documents={specialisedIn}
              setDocuments={setSpecialisedIn} />
          </TabPanel>
          <TabPanel value="5">
            <Seo tabData8={tabData8} formik={formik} />
          </TabPanel>
        </TabContext>
      </Box>

    </Grid >
  )
}


