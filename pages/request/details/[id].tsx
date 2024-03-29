import {
  Box,
  Typography,
  Grid,
  Button,
  CircularProgress,
  Tooltip,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { AlertBox } from "../../../components/UI/AlertBox/AlertBox";
import { CustomizedButton } from "../../../components/UI/Button/CustomizedButton";
import { LoadingPage } from "../../../components/UI/LoadingPage/LoadingPage";
import { useJwt } from "../../../hooks/useJwt";
import { useQueryFetchId } from "../../../hooks/useQueryFetch";
import * as moment from "moment";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import style from "../../../styles/TableUI.module.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";

const index = () => {
  const router = useRouter();

  const { id } = router.query;

  const { fetchedData: fetchedData, refetch: refetch } = useQueryFetchId(
    `request`,
    id
  );

  const request = fetchedData?.result;

  const [tab, setTab] = useState(0);

  return (
    <Grid sx={{ mt: { xs: 10, md: 0 } }}>
      <Grid sx={{ m: 1 }}>
        {["Details", "Product Key", "History"].map((data, index) => (
          <CustomizedButton
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

      {tab === 0 && (
        <Details request={request} refetch={refetch} router={router} id={id} />
      )}

      {tab === 1 && <ProductKey request={request} refetch={refetch} />}

      {tab === 2 && <History request={request} />}
    </Grid>
  );
};

const Details = (props: any) => {
  const { request, refetch, router, id } = props;

  const [alertBox, setAlertBox] = useState(false);

  const token = useJwt();

  React.useEffect(() => {
    refetch();

    // alert("hello")
  }, []);

  const handleDelete = () => {
    axios
      .delete(
        `request/${id}`,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        router.push("/");
      });
  };

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
    <Grid container justifyContent="center" sx={{ mt: { xs: 8, md: 0 }, p: 1 }}>
      {alertBox === true ? (
        <AlertBox
          title="Are You Sure you want to delete ?"
          onYes={handleDelete}
          setAlertBox={setAlertBox}
        />
      ) : null}

      {request ? (
        <Grid
          container
          lg={12}
          sx={{
            height: "80vh",
            overflowY: "scroll",
            bgcolor: "white",
            borderRadius: "20px",
            boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
          }}
        >
          <Grid container lg={11} justifyContent="end">
            <CustomizedButton
              mx={1}
              onClick={() => router.push(`/request/edit/${id}`)}
              bgcolor="#32CD32"
            >
              Edit
            </CustomizedButton>

            <CustomizedButton
              mx={1}
              onClick={() => setAlertBox(true)}
              bgcolor="red"
            >
              Delete
            </CustomizedButton>
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
            <Typography sx={{ flex: 1, fontWeight: "bold" }}>Status</Typography>

            <Typography
              sx={{
                bgcolor: request?.is_active === true ? "yellowgreen" : "red",
                px: 1,
                borderRadius: "20px",
                color: "white",
              }}
            >
              {request?.is_active === true ? "Active" : "Inactive"}
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

            {request?.file_location != null && (
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
                  href={request?.file_location}
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

              <Typography sx={{ flex: 1 }}>{request?.[data.data]}</Typography>
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
              Installation Date
            </Typography>

            <Typography sx={{ flex: 1 }}>
              {request?.installation_date
                ? moment.utc(request?.installation_date).format("MMMM Do YYYY")
                : null}
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
              AMC Month
            </Typography>

            <Typography sx={{ flex: 1 }}>
              {request?.amc_month
                ? months.find(
                    (element: any) => element.value === request?.amc_month
                  )?.label || null
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
                <Checkbox disabled checked={request?.[data.data]} />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <LoadingPage />
      )}
    </Grid>
  );
};

const History = (props: any) => {
  const { request } = props;

  return (
    <>
      {request?.history.length < 1 ? (
        <Grid container justifyContent="center">
          <img width="400px" src="/assets/nodata.png" />
        </Grid>
      ) : (
        <Grid container justifyContent="start">
          <Typography
            variant="h4"
            sx={{
              width: "100%",
              fontWeight: "bold",
              textAlign: "center",
              m: 2,
            }}
          >
            History
          </Typography>

          {request?.history?.map((data: any) => (
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
                  <Typography fontWeight="bold">User Name </Typography>

                  <Typography sx={{ mx: 1 }}>{data.user.username}</Typography>
                </Grid>

                <Grid container lg={12}>
                  <Typography fontWeight="bold">Purpose </Typography>

                  <Typography sx={{ mx: 1 }}>{data.purpose}</Typography>
                </Grid>

                <Grid container lg={12}>
                  <Typography fontWeight="bold">Date </Typography>

                  <Typography sx={{ mx: 1 }}>
                    {moment.utc(data.createdAt).format("MMMM Do YYYY, hh:mm A")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

const details = [
  {
    title: "Client Id",
    data: "client_id",
  },
  {
    title: "Care of",
    data: "care_of",
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
    title: "TAB Count",
    data: "tab_count",
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
    title: "Active TABS",
    data: "active_tabs",
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

export const ProductKey = (props: any) => {
  const { request, refetch } = props;

  // console.log("request", request?.product_keys)

  const router = useRouter();

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

  const actions = ["OverView", "Edit", "Delete"];

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(
    new Array(request?.product_keys?.length).fill(false)
  );

  const [confirmLoading, setConfirmLoading] = useState(
    new Array(request?.product_keys?.length).fill(false)
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async (id: number, index: number) => {
    const newLoadingStatesa = [...confirmLoading];
    newLoadingStatesa[index] = true;
    setConfirmLoading(newLoadingStatesa);

    await axios
      .delete(`product-key/${id}`)
      .then((response: any) => {
        if (response.data.statusCode === 200) {
          refetch();
        } else if (response.data.statusCode === 404) {
          alert("No Data Found!");
        } else {
          alert("Failed to Delete, Please try Again Later!");
        }
      })
      .catch((error: any) => {
        alert("Failed to Delete, Please try Again Later!");
      });

    setOpen(false);
    const newLoadingStatesb = [...confirmLoading];
    newLoadingStatesb[index] = false;
    setConfirmLoading(newLoadingStatesb);
  };

  const handleDeactivate = async (id: number, index: number) => {
    const newLoadingStates = [...loading];
    newLoadingStates[index] = true;
    setLoading(newLoadingStates);

    await axios
      .patch(`product-key/${id}`)
      .then((response: any) => {
        if (response.data.statusCode === 200) {
          refetch();
        } else if (response.data.statusCode === 404) {
          alert("No Data Found!");
        } else {
          alert("Failed to Deactivate, Please try Again Later!");
        }
      })
      .catch((error: any) => {
        alert("Failed to Deactivate, Please try Again Later!");
      });
    const newLoadingStatesA = [...loading];
    newLoadingStatesA[index] = false;
    setLoading(newLoadingStatesA);
  };

  return (
    <Grid>
      <table id={style.table}>
        <tbody>
          <tr>
            <th>No</th>

            {tableHead.map((data: any, index: any) => (
              <th key={index}>{data}</th>
            ))}

            <th>Status</th>
            <th>Action</th>
          </tr>

          {request?.product_keys?.map((data: any, index: any) => (
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
                {/* {data.is_active ? (
                  <Box sx={{ m: 1, position: "relative" }}>
                    {loading[index] === true ? (
                      <CircularProgress
                        size={24}
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          marginTop: "-12px",
                          marginLeft: "-12px",
                        }}
                      />
                    ) : (
                      <Button onClick={() => handleDeactivate(data.id, index)}>
                        Deactivate
                      </Button>
                    )}
                  </Box>
                ) : (
                  <Typography
                    sx={{
                      width: "fit-content",
                      bgcolor: "gray",
                      px: 1,
                      borderRadius: "20px",
                      color: "white",
                    }}
                  >
                    Inactive
                  </Typography>
                )} */}
              </td>
              <td>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                  {data.is_active && (
                    <Box sx={{ m: 1, position: "relative" }}>
                      {loading[index] === true ? (
                        <CircularProgress
                          size={24}
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginTop: "-12px",
                            marginLeft: "-12px",
                          }}
                        />
                      ) : (
                        <Tooltip title="Deactivate" placement="top-start">
                          <DisabledByDefaultIcon
                            onClick={() => handleDeactivate(data.id, index)}
                          />
                        </Tooltip>
                      )}
                    </Box>
                  )}
                  <Tooltip title="Delete" placement="top-start">
                    <DeleteIcon onClick={handleClickOpen} />
                  </Tooltip>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Caution!!!!"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        Are you sure want to delete this Product Key.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Box sx={{ m: 1, position: "relative" }}>
                        {confirmLoading[index] === true ? (
                          <CircularProgress
                            size={24}
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: "-12px",
                              marginLeft: "-12px",
                            }}
                          />
                        ) : (
                          <Button onClick={() => handleConfirm(data.id, index)}>
                            Confirm
                          </Button>
                        )}
                      </Box>
                      <Button onClick={handleClose} autoFocus>
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Grid>
  );
};

export default index;
