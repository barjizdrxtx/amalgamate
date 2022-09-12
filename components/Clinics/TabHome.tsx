import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Clinics } from './ClinicsManage/Clinics';


export const TabHome = () => {

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

          <TabList onChange={handleChange} aria-label="lab API tabs example">

            <Tab label="Create Clinic" value="1" />
            <Tab label="schedule" value="2" />
            <Tab label="health packages" value="3" />

          </TabList>

        </Box>

        <TabPanel value="1">

          <Clinics />

        </TabPanel>

        <TabPanel value="2">
          B
        </TabPanel>
        
        <TabPanel value="3">
          c
        </TabPanel>

      </TabContext>

    </Box >

  );
}