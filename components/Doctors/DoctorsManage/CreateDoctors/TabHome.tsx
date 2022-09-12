import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Grid, Tab } from '@mui/material'
import React from 'react'
import { Seo } from './TabComponents/Seo';
import { Info } from './TabComponents/Info';
import { Id } from './TabComponents/Id';
import { Profile } from './TabComponents/Profile';
import { Practice } from './TabComponents/Practice';
import { Rating } from './TabComponents/Rating';
import { Badging } from './TabComponents/Badging';
import { Promotions } from './TabComponents/Promotions';



export const TabHome = (props: any) => {

  const [value, setValue] = React.useState('1');

  const { tabData1, tabData2,tabData3, tabData8, formik } = props;

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
              <Tab label="Practice" value="4" />
              <Tab label="Rating" value="5" />
              <Tab label="Badging" value="6" />
              <Tab label="Promotions" value="7" />
              <Tab label="Seo" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Info tabData1={tabData1} formik={formik} />
          </TabPanel>
          <TabPanel value="2">
            <Id tabData2={tabData2} formik={formik} />
          </TabPanel>
          <TabPanel value="3">
            <Profile  tabData3={tabData3} formik={formik}/>
          </TabPanel>
          <TabPanel value="4">
            <Practice />
          </TabPanel>
          <TabPanel value="5">
            <Rating />
          </TabPanel>
          <TabPanel value="6">
            <Badging />
          </TabPanel>
          <TabPanel value="7">
            <Promotions />
          </TabPanel>
          <TabPanel value="8">
            <Seo tabData8={tabData8} formik={formik} />
          </TabPanel>
        </TabContext>
      </Box>

    </Grid >
  )
}


