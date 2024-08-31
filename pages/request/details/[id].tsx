import {
  Box,
  Typography,
  Grid,
  Button,
  CircularProgress,
  Tooltip,
  TextField,
  Drawer,
  Snackbar,
  Modal,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import { AlertBox } from "../../../components/UI/AlertBox/AlertBox";
import {
  CustomizedButton,
  DrawerButtons,
} from "../../../components/UI/Button/CustomizedButton";
import { LoadingPage } from "../../../components/UI/LoadingPage/LoadingPage";
import { useJwt } from "../../../hooks/useJwt";
import { useQueryFetch, useQueryFetchId } from "../../../hooks/useQueryFetch";
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
import { useFormik } from "formik";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  DrawerDropDown,
  BranchSelectComponent,
  DropDown,
} from "../../../components/UI/DropDown/DropDown";
import { BranchInstallationDateSelector } from "../../../components/UI/DateSelector/DateSelector";

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

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
        {["Details", "Branches", "Product Key", "History"].map(
          (data, index) => (
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
          )
        )}
      </Grid>

      {tab === 0 && (
        <Details request={request} refetch={refetch} router={router} id={id} />
      )}

      {tab === 1 && <Branches request={request} refetch={refetch} />}

      {tab === 2 && <ProductKey request={request} refetch={refetch} />}

      {tab === 3 && <History request={request} />}
    </Grid>
  );
};

const Details = (props: any) => {
  const { request, refetch, router, id } = props;

  const { fetchedData: fetchedTelecallers, refetch: refetchTelecallersList } = useQueryFetch(`user/telecallers`);

  const [alertBox, setAlertBox] = useState(false);
  const [open, setOpen] = useState(false);
  const [customerService, setCustomerService] = useState(0);
  const [telecallerList, setTelecallerList] = useState([]);
  // setTelecallerList(fetchedTelecallers?.result)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const token = useJwt();

  React.useEffect(() => {
    refetchTelecallersList()
    refetch();

    request?.telecaller_id && setCustomerService(request?.telecaller_id)
    // setTelecallerList(fetchedTelecallers?.result)

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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    
    const axiosrequest = axios.patch(`request/${id}`, {
      telecaller_id: customerService,
      service_assigned_at: new Date(),
      service_status: 'not_called'
    },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )
    refetch();
    handleClose();
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
      .catch((err) => { });
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

            <CustomizedButton
              mx={1}
              onClick={handleOpen}
              bgcolor="primary"
            >
              Customer Service
            </CustomizedButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-title"
              aria-describedby="modal-description"
            >
              <Box sx={styleBox}>
                <Typography id="modal-title" variant="h6" component="h2">
                  Customer Service
                </Typography>
                <form onSubmit={handleSubmit}>
                  <DropDown
                    text="Choose Customer Service"
                    value={customerService}
                    setValue={setCustomerService}
                    dropData={fetchedTelecallers?.result.length > 0 ? fetchedTelecallers?.result : []}
                    id="id"
                    name="username"
                  />
                  <Grid container justifyContent="space-evenly">
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                      Submit
                    </Button>
                    <Button type="button" variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>
                      Cancel
                    </Button>
                  </Grid>

                </form>
              </Box>
            </Modal>
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
              Customer Support
            </Typography>

            <Typography sx={{ flex: 1 }}>{request?.telecaller_id ? request?.telecaller.username : 'Not Assigned'}</Typography>
          </Grid>
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
    "Branch",
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
    "branch_id",
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
                    : el === "branch_id"
                      ? data.branch.branch_name
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

export const Branches = (props: any) => {
  const token = useJwt();
  const { request, refetch } = props;
  const router = useRouter();
  const [alertBox, setAlertBox] = React.useState({
    active: false,
    message: "",
    success: false,
    id: 0,
  });
  const [softwareName, setSoftwareName] = React.useState(null);
  const [installationDate, setInstallationDate]: any = React.useState();
  const [next_amc_date, setNextAmcDate]: any = React.useState();
  const [amcMonth, setAmcMonth] = React.useState(null);
  const [amcDate, setAmcDate] = React.useState(null);
  const [saveButtonClick, setSaveButtonClick] = useState(false);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(0);
  const [dailogeOpen, setDailogeOpen] = useState(false);
  const [snakeOpen, setSnakeOpen] = React.useState(false);
  const [messgae, setMessage] = React.useState("");
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
    "Actions",
  ];
  const [formDataFilled, setFormDataFilled] = useState({
    branch_name: "",
    software_name: "",
    amc: "",
    erp_system_count: 0,
    pos_system_count: 0,
    tab_count: 0,
    active_erp: 0,
    active_pos: 0,
    active_tabs: 0,
  });

  const [loading, setLoading] = useState(
    new Array(request?.branch?.length).fill(false)
  );

  const [confirmLoading, setConfirmLoading] = useState(
    new Array(request?.branch?.length).fill(false)
  );

  const handleClickOpen = () => {
    setDailogeOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDailogClose = () => {
    setDailogeOpen(false);
  };

  const handleConfirm = async (id: number, index: number) => {
    const newLoadingStatesa = [...confirmLoading];
    newLoadingStatesa[index] = true;
    setConfirmLoading(newLoadingStatesa);

    await axios
      .delete(`branch/${id}`)
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

  const handleEdit = async (data: any, index: number) => {
    setEditingId(data.id);

    setEditing(true);

    setNextAmcDate(data?.next_amc_date);

    setAmcMonth(data?.amc_month);

    setInstallationDate(data?.installation_date);

    setSoftwareName(data?.software_name);

    setFormDataFilled({
      branch_name: data.branch_name,
      software_name: data.software_name,
      amc: data.amc,
      erp_system_count: data.erp_system_count,
      pos_system_count: data.pos_system_count,
      tab_count: data.tab_count,
      active_erp: data.active_erp,
      active_pos: data.active_pos,
      active_tabs: data.active_tabs,
    });
    setOpen(true);
  };

  const handleDeactivate = async (
    id: number,
    index: number,
    isActive: boolean
  ) => {
    const newLoadingStates = [...loading];
    newLoadingStates[index] = true;
    setLoading(newLoadingStates);

    await axios
      .patch(`branch/deactivate/${id}?isActive=${isActive}`)
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

  const onSubmit = (values: any) => {
    setSaveButtonClick(true);
    if (editing) {
      if (editingId > 0) {
        const axiosrequest = axios
          .patch(
            `branch/${editingId}`,
            {
              client_id: request.client_id,
              branch_name: formDataFilled.branch_name,
              software_name: softwareName,
              erp_system_count: formDataFilled.erp_system_count,
              pos_system_count: formDataFilled.pos_system_count,
              tab_count: formDataFilled.tab_count,
              active_erp: formDataFilled.active_erp,
              active_pos: formDataFilled.active_pos,
              active_tabs: formDataFilled.active_tabs,
              amc: formDataFilled.amc,
              amc_month: amcMonth || null,
              amc_date: amcDate || null,
              next_amc_date: next_amc_date?.$d,
              installation_date: installationDate?.$d,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          )
          .then((res) => {
            if (res?.data?.success) {
              setMessage("Successfully Updated");
              setSnakeOpen(true);
              setOpen(false);
              setSaveButtonClick(false);
              setFormDataFilled({
                branch_name: "",
                software_name: "",
                amc: "",
                erp_system_count: 0,
                pos_system_count: 0,
                tab_count: 0,
                active_erp: 0,
                active_pos: 0,
                active_tabs: 0,
              });
            } else {
              setSaveButtonClick(false);
              setMessage("Failed to Update");
              setSnakeOpen(true);
            }
            setSnakeOpen(false);
          });
      } else {
        alert("Please Select branch to Update");
      }
    } else {
      const axiosrequest = axios
        .post(
          "branch",
          {
            client_id: request.client_id,
            branch_name: formDataFilled.branch_name,
            software_name: softwareName,
            erp_system_count: formDataFilled.erp_system_count,
            pos_system_count: formDataFilled.pos_system_count,
            tab_count: formDataFilled.tab_count,
            active_erp: formDataFilled.active_erp,
            active_pos: formDataFilled.active_pos,
            active_tabs: formDataFilled.active_tabs,
            amc: formDataFilled.amc,
            amc_month: amcMonth || null,
            amc_date: amcDate || null,
            next_amc_date: next_amc_date?.$d,
            installation_date: installationDate?.$d,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        )
        .then((res) => {
          if (res?.data?.success) {
            setMessage("Successfully Created");
            setSnakeOpen(true);
            setOpen(false);
            setSaveButtonClick(false);
            setFormDataFilled({
              branch_name: "",
              software_name: "",
              amc: "",
              erp_system_count: 0,
              pos_system_count: 0,
              tab_count: 0,
              active_erp: 0,
              active_pos: 0,
              active_tabs: 0,
            });
          } else {
            setSaveButtonClick(false);
            setMessage("Failed to Create");
            setSnakeOpen(true);
          }
          setSnakeOpen(false);
        });
    }
  };

  const formData = [
    {
      title: "Branch Name",
      label: "branch_name",
      type: "text",
      value: formDataFilled.branch_name,
      // touched: formik.touched.amc,
      // errors: formik.errors.amc,
    },
    {
      title: "AMC",
      label: "amc",
      type: "text",
      value: formDataFilled.amc,
      // touched: formik.touched.amc,
      // errors: formik.errors.amc,
    },
    {
      title: "ERP System Count",
      label: "erp_system_count",
      type: "number",
      value: formDataFilled.erp_system_count,
      // touched: formik.touched.erp_system_count,
      // errors: formik.errors.erp_system_count,
    },
    {
      title: "POS System Count",
      label: "pos_system_count",
      type: "number",
      value: formDataFilled.pos_system_count,
      // touched: formik.touched.pos_system_count,
      // errors: formik.errors.pos_system_count,
    },
    {
      title: "Tab Count",
      label: "tab_count",
      type: "number",
      value: formDataFilled.tab_count,
      // touched: formik.touched.tab_count,
      // errors: formik.errors.tab_count,
    },
    {
      title: "Active ERP",
      label: "active_erp",
      type: "number",
      value: formDataFilled.active_erp,
      // touched: formik.touched.active_erp,
      // errors: formik.errors.active_erp,
    },

    {
      title: "Active POS",
      label: "active_pos",
      type: "number",
      value: formDataFilled.active_pos,
      // touched: formik.touched.active_pos,
      // errors: formik.errors.active_pos,
    },
    {
      title: "Active Tabs",
      label: "active_tabs",
      type: "number",
      value: formDataFilled.active_tabs,
      // touched: formik.touched.active_tabs,
      // errors: formik.errors.active_tabs,
    },
  ];

  const { fetchedData: fetchedData, refetch: refetchSoftware } =
    useQueryFetch(`request/softwares`);

  const dropData = fetchedData?.result;

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormDataFilled({ ...formDataFilled, [e.target.name]: e.target.value });
  };

  const handleNew = () => {
    setEditing(false);
    setFormDataFilled({
      branch_name: "",
      software_name: "",
      amc: "",
      erp_system_count: 0,
      pos_system_count: 0,
      tab_count: 0,
      active_erp: 0,
      active_pos: 0,
      active_tabs: 0,
    });
    setNextAmcDate(null);

    setAmcMonth(null);

    setInstallationDate(null);

    setSoftwareName(null);
    setOpen(true);
  };

  return (
    <Grid>
      <div
        style={{
          width: "100%",
          textAlign: "right",
        }}
      >
        <CustomizedButton mx={1} bgcolor="dodgerblue" onClick={handleNew}>
          Add New
        </CustomizedButton>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          {formData.map((data: any, index: any) => (
            <Grid key={index} xs={12} sm={6} lg={4}>
              <Grid sx={{ m: 1 }}>
                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>
                  {data.title}
                </Typography>

                <TextField
                  sx={{ width: "100%", my: 1 }}
                  fullWidth
                  id={data.label}
                  name={data.label}
                  size="small"
                  onChange={handleChange}
                  // label={data.label}
                  defaultValue={data.value}
                // type={data.type}
                // onChange={formik.handleChange}
                // error={data.touched && Boolean(data.errors)}
                // helperText={data.touched && data.errors}
                />
              </Grid>
            </Grid>
          ))}

          <Grid>
            <DrawerDropDown
              text="Software Name"
              value={softwareName}
              setValue={setSoftwareName}
              dropData={dropData}
              id="name"
              name="name"
            />
          </Grid>

          <Grid>
            <BranchInstallationDateSelector
              installationDate={installationDate}
              setInstallationDate={setInstallationDate}
            />
          </Grid>

          <Grid>
            <BranchSelectComponent
              text="AMC Month"
              value={amcMonth}
              setValue={setAmcMonth}
              dropData={months}
              id="name"
              name="name"
            />
          </Grid>

          <Grid container lg={11} justifyContent="end">
            {/* <DrawerButtons
              mx={1}
              // onClick={handleCreateBranch}
              onCreate={formik.handleSubmit}
              bgcolor="#32CD32"
            >
              Save
            </DrawerButtons> */}

            {saveButtonClick ? (
              <CircularProgress />
            ) : (
              <Button
                onClick={onSubmit}
                disabled={false}
                size="small"
                sx={{
                  width: props.width,
                  my: 1,
                  "&:hover": {
                    boxShadow: "none",
                  },
                }}
                variant="contained"
              >
                {editing ? "Update" : "Save"}
              </Button>
            )}

            <DrawerButtons mx={1} onClick={() => setOpen(false)} bgcolor="red">
              Cancel
            </DrawerButtons>
          </Grid>
          <Snackbar
            // anchorOrigin={{ 'top', 'center' }}
            open={snakeOpen}
            autoHideDuration={5000}
            message={messgae}
          // key={'top' + 'center'}
          />
        </Drawer>
      </div>
      {request?.branch.length ? (
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
            {request?.branch?.map((data: any, index: any) => (
              <tr key={index} style={{ cursor: "pointer" }}>
                <td style={{ fontWeight: "bold" }}>{index + 1}</td>
                <td>{data.branch_name}</td>
                <td>{data.software_name}</td>
                <td>
                  {data?.installation_date
                    ? moment.utc(data?.installation_date).format("MMMM Do YYYY")
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
                      bgcolor: data?.is_active === true ? "yellowgreen" : "red",
                      px: 1,
                      borderRadius: "20px",
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    {data?.is_active === true ? "Active" : "Inactive"}
                  </Typography>
                </td>
                <td>
                  <Grid
                    container
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
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
                      <Box sx={{ m: 1, position: "relative" }}>
                        {data?.is_active ? (
                          <Tooltip title="Deactivate" placement="top-start">
                            <DisabledByDefaultIcon
                              onClick={() =>
                                handleDeactivate(data.id, index, false)
                              }
                            />
                          </Tooltip>
                        ) : (
                          <Tooltip title="Activate" placement="top-start">
                            <CheckBoxIcon
                              onClick={() =>
                                handleDeactivate(data.id, index, true)
                              }
                            />
                          </Tooltip>
                        )}
                      </Box>
                    )}
                    <Box sx={{ m: 1, position: "relative" }}>
                      <Tooltip title="Edit" placement="top-start">
                        <EditIcon onClick={() => handleEdit(data, index)} />
                      </Tooltip>
                    </Box>
                    <Box sx={{ m: 1, position: "relative" }}>
                      <Tooltip title="Delete" placement="top-start">
                        <DeleteIcon onClick={handleClickOpen} />
                      </Tooltip>
                    </Box>
                    <Dialog
                      open={dailogeOpen}
                      onClose={handleDailogClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Caution!!!!"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Are you sure want to delete this Branch.
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
                            <Button
                              onClick={() => handleConfirm(data.id, index)}
                            >
                              Confirm
                            </Button>
                          )}
                        </Box>
                        <Button onClick={handleDailogClose} autoFocus>
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
      ) : (
        <div>
          <Typography variant="body1">No Data Found</Typography>
        </div>
      )}
    </Grid>
  );
};

export default index;
