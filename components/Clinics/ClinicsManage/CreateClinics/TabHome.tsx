import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Tab } from '@mui/material'
import React from 'react'
import { Seo } from './TabComponents/Seo';
import { Info } from './TabComponents/Info';
import { Amenities } from './TabComponents/Amenities';
import { Procedures } from './TabComponents/Procedures';
import { Specialisation } from './TabComponents/Specialisation';



export const TabHome = (props: any) => {

  const [value, setValue] = React.useState('1');

  const { tabData1, tabData2, tabData3, tabData4, procedures, setProcedures, formik, amineties, setAmenities,
    documents, setDocuments, specialities, setSpecialities } = props;

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
              <Tab label="Amineties" value="2" />
              <Tab label="Procedures" value="3" />
              <Tab label="Specialisation" value="4" />
              <Tab label="Seo" value="5" />

            </TabList>

          </Box>

          <TabPanel value="1">
            <Info
              tabList={tabData1}
              formik={formik}
              documents={documents}
              setDocuments={setDocuments} />
          </TabPanel>

          <TabPanel value="2">
            <Amenities amineties={amineties} setAmenities={setAmenities} />
          </TabPanel>

          <TabPanel value="3">
            <Procedures procedures={procedures} setProcedures={setProcedures} formik={formik} />
          </TabPanel>

          <TabPanel value="4">
            <Specialisation specialities={specialities} setSpecialities={setSpecialities} formik={formik} />
          </TabPanel>

          <TabPanel value="5">
            <Seo tabList={tabData2} formik={formik} />
          </TabPanel>

        </TabContext>

      </Box>

    </Grid >
  )
}


