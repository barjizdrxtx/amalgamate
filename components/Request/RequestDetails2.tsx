import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useQueryFetchId } from "../../hooks/useQueryFetch";
import Checkbox from "@mui/material/Checkbox";
import DownloadIcon from "@mui/icons-material/Download";
import * as moment from "moment";
import { CustomizedButton } from "../UI/Button/CustomizedButton";
import style from "../../styles/TableUI.module.css";

export const RequestDetails2 = (props: any) => {
  const { searchData } = props;
  const [tab, setTab] = useState(0);

  return (
    <Grid container justifyContent="center" sx={{ mt: { xs: 10, md: 3 } }}>
      <Grid
        container
        md={11}
        lg={11}
        sx={{
          bgcolor: "white",
          borderRadius: "20px",
        }}
      >
        {searchData != null ? (
          <Grid container>
            <Grid container sx={{ m: 1 }}>
              {["Details", "Branches", "Product Key"].map((data, index) => (
                <CustomizedButton
                  fontSize={"0.8rem"}
                  color={tab === index ? "white" : "black"}
                  width="fit-content"
                  boxShadow="rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  onClick={() => setTab(index)}
                  bgcolor={tab === index ? "dodgerblue" : "white"}
                  mx={0.5}
                >
                  {data}
                </CustomizedButton>
              ))}
            </Grid>

            <Grid container sx={{ overflow: "scroll" }}>
              {tab === 0 && <Details searchData={searchData} />}

              {tab === 1 && <Branches searchData={searchData} />}

              {tab === 2 && <ProductKey searchData={searchData} />}
            </Grid>
          </Grid>
        ) : (
          <Grid container justifyContent="center">
            <img width="400px" src="assets/nodata.png" />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

const Details = (props: any) => {
  const { searchData } = props;

  const download = (e: any) => {
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {});
  };
  return (
    <Grid container justifyContent="center" sx={{ mt: { xs: 8, md: 3 } }}>
      {searchData != null ? (
        <Grid
          container
          md={11}
          lg={11}
          sx={{
            bgcolor: "white",
            borderRadius: "20px",
          }}
        >
          <Grid
            container
            md={6}
            lg={6}
            sx={{
              width: "100%",
              p: 1,
              borderBottom: "1px solid #E5E7E9",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ flex: 1, fontWeight: "bold" }}>Status</Typography>

            <Typography
              sx={{
                bgcolor: searchData?.is_active === true ? "yellowgreen" : "red",
                px: 1,
                borderRadius: "20px",
                color: "white",
              }}
            >
              {searchData?.is_active === true ? "Active" : "Inactive"}
            </Typography>
          </Grid>

          <Grid
            container
            md={6}
            lg={6}
            sx={{
              width: "100%",
              p: 1,
              borderBottom: "1px solid #E5E7E9",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ flex: 1, fontWeight: "bold" }}>
              Download File
            </Typography>

            {searchData?.file_location != null && (
              <Box
                sx={{
                  width: "30%",
                  bgcolor: "dodgerblue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 0.5,
                  borderRadius: "10px",
                }}
              >
                <a
                  style={{ color: "white" }}
                  href={searchData?.file_location}
                  onClick={(e) => download(e)}
                  target="_blank"
                >
                  <DownloadIcon sx={{ color: "white" }} />
                </a>
              </Box>
            )}
          </Grid>

          {details.map((data) => (
            <Grid
              container
              md={6}
              lg={6}
              sx={{
                width: "100%",
                p: 1,
                borderBottom: "1px solid #E5E7E9",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography sx={{ flex: 1, fontWeight: "bold" }}>
                {data.title}
              </Typography>

              <Typography sx={{ flex: 1 }}>
                {searchData?.[data.data]}
              </Typography>
            </Grid>
          ))}

          <Grid
            container
            md={6}
            lg={6}
            sx={{
              width: "100%",
              p: 1,
              borderBottom: "1px solid #E5E7E9",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Typography sx={{ flex: 1, fontWeight: "bold" }}>
              Next AMC Date
            </Typography>

            <Typography sx={{ flex: 1 }}>
              {searchData?.next_amc_date
                ? moment.utc(searchData?.next_amc_date).format("MMMM Do YYYY")
                : null}
            </Typography>
          </Grid>

          {checkbox.map((data: any, index: any) => (
            <Grid
              key={index}
              container
              md={6}
              lg={6}
              sx={{
                width: "100%",
                px: 1,
                borderBottom: "1px solid #E5E7E9",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  {data.title}
                </Typography>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Checkbox disabled checked={searchData?.[data.data]} />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid>
          <img width="400px" src="assets/nodata.png" />
        </Grid>
      )}
    </Grid>
  );
};

const Branches = (props: any) => {
  const { searchData } = props;
  const tableHead = [
    "Branch",
    "Software Name",
    "Installation Date",
    "AMC",
    "AMC Month",
    "ERP",
    "POS",
    "TAB",
    "Status",
  ];
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

  return (
    <Grid
      container
      justifyContent="center"
      sx={{ mt: { xs: 8, md: 3 }, bgcolor: "white", borderRadius: "20px" }}
    >
      <Grid container md={11} lg={11} sx={{}}>
        {searchData?.branch.length ? (
          <table id={style.table}>
            <thead>
              <tr>
                <th>No</th>

                {tableHead.map((data: any, index: any) => (
                  <th key={index}>{data}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {searchData?.branch?.map((data: any, index: any) => (
                <tr key={index} style={{ cursor: "pointer" }}>
                  <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                  <td>{data.branch_name}</td>
                  <td>{data.software_name}</td>
                  <td>
                    {data?.installation_date
                      ? moment
                          .utc(data?.installation_date)
                          .format("MMMM Do YYYY")
                      : null}
                  </td>
                  <td>{data.amc}</td>
                  <td>
                    {data?.amc_month
                      ? months.find(
                          (element: any) => element.value === data?.amc_month
                        )?.label || null
                      : null}
                  </td>
                  <td>
                    {data.erp_system_count +
                      "/" +
                      (data.active_erp === null ? 0 : data.active_erp)}
                  </td>
                  <td>
                    {data.pos_system_count +
                      "/" +
                      (data.active_pos === null ? 0 : data.active_pos)}
                  </td>
                  <td>
                    {data.tab_count +
                      "/" +
                      (data.active_tabs === null ? 0 : data.active_tabs)}
                  </td>
                  <td>
                    <Typography
                      sx={{
                        bgcolor:
                          data?.is_active === true ? "yellowgreen" : "red",
                        px: 1,
                        borderRadius: "20px",
                        color: "white",
                        textAlign: "center",
                      }}
                    >
                      {data?.is_active === true ? "Active" : "Inactive"}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>
            <Typography variant="body1">No Data Found</Typography>
          </div>
        )}
      </Grid>
    </Grid>
  );
};

const ProductKey = (props: any) => {
  const { searchData } = props;
  const tableHead = [
    // "Client ID",
    "Product Key",
    "Software Name",
    "Mac Id",
    "Type",
    "Activated By",
    "Activated Date",
    "Last Login",
    "Version",
  ];

  const element = [
    // "client_id",
    "product_key",
    "software_name",
    "mac_id",
    "type",
    "user",
    "activated_date",
    "last_loggedin_at",
    "software_version",
  ];

  return (
    <Grid container justifyContent="center" sx={{ mt: { xs: 8, md: 3 } }}>
      <Grid
        container
        md={11}
        lg={11}
        sx={{
          bgcolor: "white",
          borderRadius: "20px",
        }}
      >
        <table id={style.table}>
          <tbody>
            <tr>
              <th>No</th>

              {tableHead.map((data: any, index: any) => (
                <th key={index}>{data}</th>
              ))}

              <th>Status</th>
            </tr>

            {searchData?.product_keys?.map((data: any, index: any) => (
              <tr key={index} style={{ cursor: "pointer" }}>
                <td style={{ fontWeight: "bold" }}>
                  {/* {index + 1 + (page - 1) * limit} */}
                  {/* {data.id} */}
                  {index + 1}
                </td>

                {element.map((el: any, index: any) => (
                  <td key={index}>
                    {el === "last_loggedin_at" && data?.last_loggedin_at
                      ? moment
                          .utc(data["last_loggedin_at"])
                          .format("MMMM Do YYYY hh:mm:ss A")
                      : data[el]}
                  </td>
                ))}

                <td>
                  <Typography
                    sx={{
                      width: "fit-content",
                      bgcolor: data.is_active === true ? "yellowgreen" : "gray",
                      px: 1,
                      borderRadius: "20px",
                      color: "white",
                    }}
                  >
                    {data.is_active === true ? "Active" : "Inactive"}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};

const details = [
  {
    title: "Client Id",
    data: "client_id",
  },

  {
    title: "Server Type",
    data: "server_type",
  },

  {
    title: "Customer Name",
    data: "customer_name",
  },
  {
    title: "Shop Name",
    data: "shop_name",
  },
  {
    title: "Shop Address",
    data: "shop_address",
  },
  {
    title: "Contact Number",
    data: "contact_number",
  },
  {
    title: "Contact Person",
    data: "contact_person",
  },
  {
    title: "CR No",
    data: "cr_no",
  },
  {
    title: "Email",
    data: "email",
  },
  {
    title: "Owner Contact No",
    data: "owner_contact_no",
  },
  {
    title: "Software Name",
    data: "software_name",
  },
  {
    title: "Shop Category",
    data: "shop_category",
  },

  {
    title: "ERP System Count",
    data: "erp_system_count",
  },
  {
    title: "POS System Count",
    data: "pos_system_count",
  },
  {
    title: "User Limit",
    data: "user_limit",
  },
  {
    title: "Active ERP",
    data: "active_erp",
  },
  {
    title: "Active POS",
    data: "active_pos",
  },

  {
    title: "AMC",
    data: "amc",
  },

  {
    title: "Server Password",
    data: "server_password",
  },
  {
    title: "Anydesk Password",
    data: "anydesk_password",
  },
  {
    title: "Server Configuration",
    data: "server_configuration",
  },
  {
    title: "SQL Password",
    data: "sql_password",
  },
];

const checkbox = [
  {
    title: "ERP",
    data: "erp",
  },
  {
    title: "POS",
    data: "pos",
  },
  {
    title: "ERP/POS",
    data: "erp_pos",
  },

  {
    title: "Software Support",
    data: "software_support",
  },
  {
    title: "Hardware Support",
    data: "hardware_support",
  },
  {
    title: "Network Support",
    data: "network_support",
  },
];
