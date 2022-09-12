import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Grid, Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Info from "./TabComponents/Info";
import Seo from "./TabComponents/Seo";

export default function TabHome(props: any) {
  const [value, setValue] = React.useState("1");

  const { tabData1, tabData2, formik } = props;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ backgroundColor: "white" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Info" value="1" />
              <Tab label="Schedule" value="2" />
              <Tab label="Timing" value="3" />
              <Tab label="Amineties" value="4" />
              <Tab label="Procedures" value="5" />
              <Tab label="Specialisation" value="6" />
              <Tab label="Doctor" value="7" />
              <Tab label="Seo" value="8" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Info tabData1={tabData1} formik={formik} />
          </TabPanel>

          <TabPanel value="2">Item Three</TabPanel>

          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Three</TabPanel>
          <TabPanel value="5">Item Three</TabPanel>
          <TabPanel value="6">Item Three</TabPanel>
          <TabPanel value="7">Item Three</TabPanel>

          <TabPanel value="8">
            <Seo tabData2={tabData2} formik={formik} />
          </TabPanel>
        </TabContext>
      </Box>
    </Grid>
  );
}
