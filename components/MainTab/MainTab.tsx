import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { PRIMARY_COLOR } from '../../utls/colors';


export const MainTab = (props: any) => {

  const { tabData } = props;

  const [tab, setTab] = React.useState(0)

  return (

    <Box sx={{
      width: "100%", display: "flex", flexDirection: "column", backgroundColor: "white"
    }} >

      <Box sx={{ width: "fit-content", display: "flex", m: 1, p: 0.5, alignItems: "center", backgroundColor: "#F6F6F6", borderRadius: "10px" }
      } >

        {tabData.map((data: any, index: any) =>

          <Box sx={{ backgroundColor: tab === index ? PRIMARY_COLOR : "transparent", px: 2, py: 1, cursor: "pointer", borderRadius: "10px" }} onClick={() => setTab(index)}>

            <Typography sx={{ color: tab === index ? "white" : "#696969", fontWeight: "bold" }}>{data.label}</Typography>

          </Box>

        )}

      </Box >

      {tabData.filter((fil: any, ind: any) => ind === tab).map((data: any, index: any) =>

        <Box sx={{ mt: 3 }}>

          <Box>{data.component}</Box>

        </Box>

      )}

    </Box >

  );
}