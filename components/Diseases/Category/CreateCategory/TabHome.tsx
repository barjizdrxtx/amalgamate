import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Grid, Tab } from '@mui/material';
import React from 'react'
import Seo from './TabComponents/Seo';

export default function TabHome( props : any) {

    const [value, setValue] = React.useState('1');

    const { tabData1, tabData2, formik } = props;
  
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    }
    

  return (
    <Grid>

    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ backgroundColor: "white" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Seo" value="1" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <Seo tabData1={tabData1} formik={formik} />
        </TabPanel>

      </TabContext>
    </Box>

  </Grid >
  )
}
