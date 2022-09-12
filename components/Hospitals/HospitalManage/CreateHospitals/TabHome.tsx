import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Button, Grid, Tab } from '@mui/material'
import React from 'react'
import { Seo } from './TabComponents/Seo';
import { Info } from './TabComponents/Info';
import { Amenities } from './TabComponents/Amenities';
import { Procedures } from './TabComponents/Procedures';
import { Specialisation } from './TabComponents/Specialisation';
import { Timing } from './TabComponents/Timing';
import { Doctor } from './TabComponents/Doctor';
import { Schedule } from './TabComponents/Schedule';




export const TabHome = (props: any) => {

  const [value, setValue] = React.useState('1');

  const { tabData1, tabData3, tabData4, tabData5, tabData8, formik } = props;

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

              <Tab label="Amineties" value="3" />
              <Tab label="Procedures" value="4" />
              <Tab label="Specialisation" value="5" />
     
              <Tab label="Seo" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Info tabData1={tabData1} formik={formik} />
          </TabPanel>
          
          <TabPanel value="3">
            <Amenities tabData3={tabData3} formik={formik} />
          </TabPanel>
          <TabPanel value="4">
            <Procedures tabData4={tabData4} formik={formik} />
          </TabPanel>
          <TabPanel value="5">
            <Specialisation tabData5={tabData5} formik={formik} />
          </TabPanel>
          
          <TabPanel value="8">
            <Seo tabData8={tabData8} formik={formik} />
          </TabPanel>

        </TabContext>
      </Box>

    </Grid >
  )
}


