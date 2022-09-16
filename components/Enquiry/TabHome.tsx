import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { EnquiryClinics } from './Enquirys/EnquiryClinics';
import { EnquiryLabs } from './Enquirys/EnquiryLabs';
import { EnquiryDoctors } from './Enquirys/EnquiryDoctors';
import { EnquiryHospitals } from './Enquirys/EnquiryHospitals';


export const TabHome = () => {

  const [value, setValue] = React.useState('4');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: '100%', typography: 'body1' }} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

          <TabList onChange={handleChange} aria-label="lab API tabs example">

            <Tab label="Doctors" value="1" />
            <Tab label="Clinics" value="2" />
            <Tab label="Labs" value="3" />
            <Tab label="Hospitals" value="4" />

          </TabList>

        </Box>

        <TabPanel value="1">

          <EnquiryDoctors />

        </TabPanel>

        <TabPanel value="2">

          <EnquiryClinics />

        </TabPanel>


        <TabPanel value="3">

          <EnquiryLabs />

        </TabPanel>

        <TabPanel value="4">

          <EnquiryHospitals />

        </TabPanel>

      </TabContext>

    </Box >

  );
}