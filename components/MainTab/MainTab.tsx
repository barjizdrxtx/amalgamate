import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Tab } from '@mui/material'
import React from 'react'

export const MainTab = (props: any) => {

  const { tabData } = props;

  const [value, setValue] = React.useState('0');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }

  return (
    <Grid>

      <Box sx={{ width: '100%', typography: 'body1' }}>

        <TabContext value={value}>

          <Box sx={{ backgroundColor: "white" }}>

            <TabList onChange={handleChange} aria-label="lab API tabs example">

              {tabData?.map((data: any, index: any) =>

                <Tab label={data.label} value={JSON.stringify(index)} />

              )}

            </TabList>

          </Box>


          {tabData?.map((data: any, index: any) =>

            <TabPanel value={JSON.stringify(index)}>
              {data.component}
            </TabPanel>

          )}

        </TabContext>

      </Box>

    </Grid >
  )
}

