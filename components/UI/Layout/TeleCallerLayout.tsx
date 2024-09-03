import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useJwt } from "../../../hooks/useJwt";
import { BASE_URL } from "../../../url";
import { RequestDetails2 } from "../../Request/RequestDetails2";
import { CustomizedButton } from "../Button/CustomizedButton";
import style from "../../../styles/TableUI.module.css"
import * as yup from "yup";
import { useQueryFetch } from "../../../hooks/useQueryFetch";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const styleBox = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Issue {
  subject: string;
  issue: string;
  date: string;
  jobNo: number;
}

interface Client {
  client_id: string;
  installation_date: any;
  amc: string;
  server_type: string;
}

export const TeleCallerLayout = () => {
  axios.defaults.baseURL = BASE_URL;

  const [clientData, setClientData] = useState<Client>();
  const [blurValue, setBlurValue] = useState("0px");
  const [open, setOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [subject, setSubject] = useState('');
  const [issue, setIssue] = useState('');
  const [nextJobNo, setNextJobNo] = useState(0);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // const handleAddIssue = () => {
  //   const date = new Date().toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //   }); // Replace with your dynamic job number

  //   if (subject && issue) {
  //     setIssues([...issues, { subject, issue, date, jobNo: nextJobNo }]);
  //     setSubject('');
  //     setIssue('');
  //     setNextJobNo(nextJobNo + 1)
  //   }
  // };

  const handleAddIssue = () => {
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    if (subject && issue) {
      if (editingIndex !== null) {
        const updatedIssues = issues.map((item, index) =>
          index === editingIndex ? { date, jobNo: nextJobNo, subject, issue } : item
        );
        setIssues(updatedIssues);
        setEditingIndex(null);
      } else {
        setIssues([...issues, { date, jobNo: nextJobNo, subject, issue }]);
      }
      setSubject('');
      setIssue('');
    }
  };

  const handleEditIssue = (index: number) => {
    const issueToEdit = issues[index];
    setSubject(issueToEdit.subject);
    setIssue(issueToEdit.issue);
    setEditingIndex(index);
  };

  const handleRemoveIssue = (index: number) => {
    const updatedIssues = issues.filter((_, i) => i !== index);
    setIssues(updatedIssues);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { fetchedData: fetchedClients, refetch: refetchClientList } = useQueryFetch(`request/servicer/assigned-clients`);

  const clientList = fetchedClients?.result;

  const { fetchedData: fetchedJobNo, refetch: refetchJobNo } = useQueryFetch(`job/job_no`);

  useEffect(() => {
    if (fetchedJobNo?.result) {
      setNextJobNo(fetchedJobNo.result);
    }
  }, [fetchedJobNo]);

  const token = useJwt();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("---------------issues", issues);

    const jobItems = await issues.map(issue => { return { subject: issue.subject, issue_note: issue.issue } })

    const axiosrequest = await axios.post('job', {
      client_id: clientData?.client_id,
      caller_id: 0,
      date: new Date().toLocaleDateString(),
      jobItems,
    },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    )

    if (axiosrequest?.data?.success) {
      refetchClientList()
    }

    handleClose();
  };


  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ mt: { xs: 8, md: 0 }, p: 1 }}
    >
      <Grid>
        <table id={style.table}>

          <thead>

            <tr>
              <th>Client Id</th>
              <th>Customer Name</th>
              <th>Category</th>
              <th>Software</th>
              <th>Mobile No</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              clientList?.map((client: any) => {
                return (
                  <tr style={{ backgroundColor: client.service_status === 'no_job' ? 'lightgreen' : client.service_status === 'job' ? '#ffdddd' : 'white' }}>
                    <td>{client.client_id}</td>
                    <td>{client.customer_name}</td>
                    <td>{client.shop_category}</td>
                    <td>{client.software_name}</td>
                    <td>{client.contact_number}</td>
                    <td>

                      <Typography sx={{
                        width: 'fit-content', bgcolor: client.is_active === true ? "yellowgreen" : "gray", px: 1,
                        borderRadius: "20px", color: "white"
                      }}>{client.is_active === true ? "Active" : "Inactive"}</Typography>

                    </td>
                    <td>
                      {
                        client.service_status === 'not_called' ?
                          <>
                            <Button
                              sx={{
                                m: 1,
                                bgcolor: "lightgreen",
                                color: "ButtonText",
                                fontWeight: 'bold'
                              }}
                            >
                              No Job
                            </Button>
                            <Button
                              onClick={() => {
                                handleOpen(),
                                  setClientData(client)
                              }}
                              sx={{
                                m: 1,
                                bgcolor: "#ffdddd",
                                color: "ButtonText",
                                fontWeight: 'bold'
                              }}
                            >
                              Add Job
                            </Button>
                          </>
                          :
                          client.service_status === 'job' ?
                            <Button
                              sx={{
                                bgcolor: "lightblue",
                                color: "ButtonText",
                                fontWeight: 'bold'
                              }}
                            >
                              View Jobs
                            </Button>
                            :
                            <Button
                              sx={{
                                bgcolor: "#ffdddd",
                                color: "ButtonText",
                                fontWeight: 'bold'
                              }}
                            >
                              Add Job
                            </Button>
                      }

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                      >
                        <Box sx={styleBox}>
                          <Grid container sx={{ borderBottom: '1px solid black', marginBottom: '10px' }}>
                            <Typography id="modal-title" variant="h6" component="h2">
                              Job List
                            </Typography>
                          </Grid>

                          <Grid container sx={{ paddingTop: '10px' }}>
                            <form onSubmit={handleSubmit}>
                              <Grid container spacing={2}>
                                {/* Existing grid for Date and Job No */}
                                <Grid container xs={6} sm={6} lg={6}>
                                  <Grid item xs={12}>
                                    <Typography sx={{ color: "#566573" }}>
                                      Date: <span style={{ color: 'black', fontWeight: 'bold' }}>{new Date().toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                      })}</span>
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography sx={{ color: "#566573" }}>
                                      Job No <span style={{ color: 'black', fontWeight: 'bold' }}>{nextJobNo}</span>
                                    </Typography>
                                  </Grid>
                                </Grid>

                                <Grid container xs={6} sm={6} lg={6}>
                                  <Grid item xs={12}>
                                    <Typography sx={{ color: "#566573" }}>
                                      Installation Date: <span style={{ color: 'black', fontWeight: 'bold' }}>{clientData?.installation_date && new Date(clientData?.installation_date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                      })}</span>
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography sx={{ color: "#566573" }}>
                                      AMC: <span style={{ color: 'black', fontWeight: 'bold' }}>{clientData?.amc}</span>
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography sx={{ color: "#566573" }}>
                                      Server Type: <span style={{ color: 'black', fontWeight: 'bold' }}> {clientData?.server_type}</span>
                                    </Typography>
                                  </Grid>
                                </Grid>

                                {/* New section for adding client issues */}
                                <Grid item xs={12}>
                                  <Typography sx={{ color: "#566573", fontWeight: "bold", marginTop: 2 }}>
                                    Add Client Issues
                                  </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                  <TextField
                                    label="Subject"
                                    variant="outlined"
                                    fullWidth
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                  />
                                </Grid>
                                <Grid item xs={5}>
                                  <TextField
                                    label="Issue"
                                    variant="outlined"
                                    fullWidth
                                    value={issue}
                                    onChange={(e) => setIssue(e.target.value)}
                                  />
                                </Grid>
                                <Grid item xs={2}>
                                  <Button variant="contained" color="primary" onClick={handleAddIssue}>
                                    {editingIndex !== null ? 'Update' : 'Add'}
                                  </Button>
                                </Grid>
                                {issues.length > 0 &&
                                  <Grid item xs={12}>
                                    <Table>
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Date</TableCell>
                                          <TableCell>Job No</TableCell>
                                          <TableCell>Subject</TableCell>
                                          <TableCell>Issue</TableCell>
                                          <TableCell>Actions</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {issues.map((issue, index) => (
                                          <TableRow key={index}>
                                            <TableCell>{issue.date}</TableCell>
                                            <TableCell>{issue.jobNo}</TableCell>
                                            <TableCell>{issue.subject}</TableCell>
                                            <TableCell>{issue.issue}</TableCell>
                                            <TableCell>
                                              <IconButton onClick={() => handleEditIssue(index)}>
                                                <EditIcon />
                                              </IconButton>
                                              <IconButton onClick={() => handleRemoveIssue(index)}>
                                                <DeleteIcon />
                                              </IconButton>
                                            </TableCell>
                                          </TableRow>
                                        ))}
                                      </TableBody>
                                    </Table>
                                  </Grid>
                                }

                              </Grid>

                              <Grid container justifyContent="space-evenly">
                                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                                  Submit
                                </Button>
                                <Button type="button" variant="outlined" sx={{ mt: 2 }} onClick={handleClose}>
                                  Cancel
                                </Button>
                              </Grid>

                            </form>
                          </Grid>
                        </Box>
                      </Modal>

                    </td>
                  </tr>
                )
              })
            }

          </tbody>

        </table>
      </Grid>

    </Grid >
  );
};

const validationSchema = yup.object({
  client_id: yup.string().required("Client Id is required"),

  reason: yup.string().required("Write a reason"),
});
