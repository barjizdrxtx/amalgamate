import {
  Box,
  Button,
  CircularProgress,
  Fade,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Skeleton,
  Typography,
} from "@mui/material";
import { DropDown } from "../../components/UI/DropDown/DropDown";
import React from "react";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import Download from "@mui/icons-material/Download";
import { CsvReport } from "../../components/UI/Csv/Csv";
import style from "../../styles/TableUI.module.css";
import axios from "axios";
import * as moment from "moment";

const index = () => {
  const [month, setMonth] = React.useState<number>(0);
  const [report, setReport] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  let request: string | any[] = [];

  const months = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const handleChange = (value: number) => {
    setMonth(value);
    setLoading(true);
    axios
      .get(`request/report?month=${value}`)
      .then((response: any) => {
        if (response.data.statusCode === 200) {
          setReport(response.data.result);
          setLoading(false);
        } else if (response.data.statusCode === 404) {
          alert("No Data Found!");
        } else {
          alert("Failed to Load Data, Please try Again Later!");
        }
      })
      .catch((error: any) => {
        alert("Failed to Load Data, Please try Again Later!");
      });
  };

  const tableHead: any[] = [
    "Sl No",
    "Client ID",
    "Client Name",
    "Software Name",
    "Server Type",
    "Instalation Date",
    "AMC Amount",
    "Status",
    "Action"
  ];
  const element: any[] = [
    "client_id",
    "customer_name",
    "software_name",
    "server_type",
    "createdAt",
    "amc",
    "is_active",
    "download"
  ];

  return (
    <Grid container justifyContent="start" sx={{ mt: { xs: 10, md: 0 } }}>
      <Grid container alignContent="space-around" alignItems="center">
        <Grid lg={4} container flexDirection={"row"}>
          <Grid container>
            <Grid container sx={{ m: 1, bgcolor: "white" }}>
              <Typography sx={{ color: "#566573", fontWeight: "bold" }}>
                Select Month
              </Typography>

              <Select
                sx={{
                  width: "100%",
                  my: 1,
                  textTransform: "capitalize",
                  bgcolor: "white",
                }}
                id={"month"}
                value={month}
                onChange={(e) => handleChange(+e.target.value)}
              >
                <MenuItem value={0} disabled>
                  {"Select a Month"}
                </MenuItem>

                {months?.map((data: any, index: any) => (
                  <MenuItem
                    key={index}
                    sx={{ textTransform: "capitalize", width: "100%" }}
                    value={data["value"]}
                  >
                    {data["label"]}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        
        {report?.length > 0 && (
          
          <><Grid lg={4} container flexDirection={"row"} sx={{justifyContent: "space-evenly", alignItems: "center"}} >
            <Grid container sx={{ m: 1, bgcolor: "white" }}>
              <Typography sx={{ color: "#566573", fontWeight: "bold" }}>
                {'Total AMC Amount: '}
              </Typography>
              <Typography sx={{ color: "green", fontWeight: "bold" }}>
                {(report.reduce((acc, currentItem: any) => {
                  if (currentItem.is_active) {
                    return acc + +currentItem.amc;
                  } else {
                    return acc;
                  }
                }, 0)).toFixed(3)}
              </Typography>
            </Grid>
          </Grid>
          <Grid lg={2} sx={{ bgcolor: "", m: 1 }} alignItems="center">
              <CsvReport csvdata={report} />
            </Grid>
          </>
        )}
      </Grid>
      <Grid sx={{ width: "100%" }}>
        <Grid item container sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "80vh",
              overflowY: "scroll",
              bgcolor: "white",
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
              borderRadius: "20px",
              p: 2,
            }}
          >
            <table id={style.table}>
              <tbody>
                <tr>
                  {tableHead.map((data: any, index: any) => (
                    <th key={index}>{data}</th>
                  ))}
                </tr>
                {loading === false &&
                  report?.map((element: any, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{element.client_id}</td>
                      <td>{element.customer_name}</td>
                      <td>{element.software_name}</td>
                      <td>{element.server_type}</td>
                      <td>
                        {element.installation_date
                          ? moment
                              .utc(element?.installation_date)
                              .format("DD/MM/YYYY")
                          : null}
                      </td>
                      <td>{element.amc}</td>
                      <td>
                        <Typography
                          sx={{
                            width: "fit-content",
                            bgcolor:
                              element.is_active === true
                                ? "yellowgreen"
                                : "gray",
                            px: 1,
                            borderRadius: "20px",
                            color: "white",
                          }}
                        >
                          {element.is_active === true ? "Active" : "Inactive"}
                        </Typography>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {loading ? (
              <Grid
                container
                width={"100%"}
                justifyContent={"center"}
                alignItems="center"
              >
                <Fade in={loading}>
                  <CircularProgress />
                </Fade>
              </Grid>
            ) : (
              report.length === 0 && (
                <Grid
                  container
                  width={"100%"}
                  justifyContent={"center"}
                  alignItems="center"
                >
                  <img width="400px" src="assets/nodata.png" />
                </Grid>
              )
            )}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default index;
