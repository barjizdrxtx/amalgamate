import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useThemeColor } from '../../hooks/useThemeColor';

export const MainTab = (props: any) => {

  const { tabData } = props;

  const [tab, setTab] = React.useState(0)

  const themecolor = useThemeColor();


  return (

    <Box sx={{
      width: "100%", display: "flex", flexDirection: "column", backgroundColor: "white", m: 1,
    }} >

      <Box sx={{ width: "fit-content", display: "flex", p: 0.5, alignItems: "center", backgroundColor: "#F6F6F6", borderRadius: "10px" }
      } >

        {tabData.map((data: any, index: any) =>

          <Box sx={{ backgroundColor: tab === index ? themecolor : "transparent", px: 2, py: 1, cursor: "pointer", borderRadius: "10px" }} onClick={() => setTab(index)}>

            <Typography sx={{ color: tab === index ? "white" : "#696969", fontWeight: "bold" }}>{data.label}</Typography>

          </Box>

        )
        }

      </Box >

      {tabData.filter((fil: any, ind: any) => ind === tab).map((data: any, index: any) =>

        <Box sx={{ mt: 3 }}>

          <Box>{data.component}</Box>

        </Box>

      )
      }

    </Box >

  );
}