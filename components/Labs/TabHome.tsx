import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Labs } from "./LabManage/Labs";



export default function TabHome() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (

    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>

          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create Lab" value="1" />
            <Tab label="lab shedule" value="2" />
            <Tab label="packages" value="3" />

          </TabList>
        </Box>

        <TabPanel value="1">

          <Labs/>
          
        </TabPanel>
        <TabPanel value="2">
          2
        </TabPanel>
        <TabPanel value="3">
          3
        </TabPanel>

      </TabContext>
    </Box>

  );
}
