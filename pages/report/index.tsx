import {
  Button,
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

const index = () => {
  const [month, setMonth] = React.useState<number>(0);
  const [report, setReport] = React.useState([]);

  const { fetchedData: fetchedData, refetch: refetch } = useQueryFetch(
    `request/report?month=${month}`
  );

  const request = fetchedData?.result;

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
  };

  const handleDownload = () => {};

  React.useEffect(() => {
    refetch();
  }, [month]);

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
        {request?.length > 0 && (
          <Grid lg={4} sx={{ bgcolor: "", m: 1 }} alignItems="center">
            <CsvReport csvdata={request} />
          </Grid>
        )}
        {/* {request?.length && (
          <Button
            variant="contained"
            startIcon={<Download />}
            onClick={handleDownload}
          >
            Download
          </Button>
        )} */}
      </Grid>

      {request?.length ? (
        request?.map((data: any) => (
          <Grid container lg={4}>
            <Grid
              container
              sx={{
                m: 1,
                p: 1,
                borderRadius: "10px",
                boxShadow:
                  "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
              }}
            >
              <Grid container lg={12}>
                <Typography fontWeight="bold">Client Name: </Typography>

                <Typography sx={{ mx: 1 }}>{data?.customer_name}</Typography>
              </Grid>

              <Grid container lg={12}>
                <Typography fontWeight="bold">AMC Amount: </Typography>

                <Typography sx={{ mx: 1 }}>{data?.amc}</Typography>
              </Grid>

              {/* <Grid container lg={12}>
                <Typography fontWeight="bold">Last Login: </Typography>

                <Typography sx={{ mx: 1 }}>{data?.customer_name}</Typography>
              </Grid> */}

              <Grid container lg={12}>
                <Typography fontWeight="bold">Status: </Typography>

                <Typography
                  sx={{
                    width: "fit-content",
                    height: "25px",
                    bgcolor: data?.is_active === true ? "yellowgreen" : "gray",
                    px: 1,
                    borderRadius: "20px",
                    color: "white",
                  }}
                >
                  {data.is_active === true ? "Active" : "Inactive"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))
      ) : (
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      )}
    </Grid>
  );
};
export default index;
