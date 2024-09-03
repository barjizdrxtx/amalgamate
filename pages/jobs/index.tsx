import { Box, Button, Checkbox, Grid, Modal, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import style from '../../styles/TableUI.module.css'
import { BASE_URL } from "../../url";
import axios from "axios";
import { useJwt } from "../../hooks/useJwt";

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

interface DoneList {
  job_id: number,
  is_done: boolean,
  action_remarks: string;
}


const index = () => {
  axios.defaults.baseURL = BASE_URL;
  const token = useJwt();

  const [selectedJobs, setSelectedJobs] = useState<any>([]);
  const [isViewIssuesModalOpen, setIsViewIssuesModalOpen] = useState(false);

  const handleViewIssuesModalOpen = () => setIsViewIssuesModalOpen(true);
  const handleViewIssuesModalClose = () => setIsViewIssuesModalOpen(false);

  const { fetchedData: fetchedJobList, refetch: refetchJobList } = useQueryFetch(`job/alljobs`);

  const jobList = fetchedJobList?.result

  const handleDone = async () => {
    if (selectedJobs.length > 0) {
      const axiosrequest = await axios.patch('job/markAsDone', {
        jobItems: selectedJobs
      },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        }
      )

      if (axiosrequest?.data?.success) {
        refetchJobList()
        handleViewIssuesModalClose()
      }
    } else {

    }
  }

  const handleCheckBoxChange = (jobId: number) => {
    setSelectedJobs((prevSelectedJobs: { job_id: number; }[]) => {
      const isJobSelected = prevSelectedJobs.some((item: { job_id: number; }) => item.job_id === jobId);

      if (isJobSelected) {
        return prevSelectedJobs.filter((item: { job_id: number; }) => item.job_id !== jobId);
      } else {
        return [...prevSelectedJobs, {
          job_id: jobId,
          is_done: true,
          action_remarks: null
        }];
      }
    });

  }

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
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
            {jobList?.length > 0 ?
              jobList?.map((job: any) => {
                return (
                  <tr>
                    <td>{job.client_id}</td>
                    <td>{job?.client.customer_name}</td>
                    <td>{job?.client.shop_category}</td>
                    <td>{job?.client.software_name}</td>
                    <td>{job?.client.contact_number}</td>
                    <td>

                      <Typography sx={{
                        width: 'fit-content', bgcolor: job?.client.is_active === true ? "yellowgreen" : "gray", px: 1,
                        borderRadius: "20px", color: "white"
                      }}>{job?.client.is_active === true ? "Active" : "Inactive"}</Typography>

                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          // loadClientIssues(client)
                          handleViewIssuesModalOpen()
                        }}
                        sx={{
                          bgcolor: "lightblue",
                          color: "ButtonText",
                          fontWeight: 'bold'
                        }}
                      >
                        View Jobs
                      </Button>
                      <Modal
                        open={isViewIssuesModalOpen}
                        onClose={handleViewIssuesModalClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                      >
                        <Box sx={styleBox}>
                          <Typography id="modal-title" variant="h6" component="h2">
                            Client Issues
                          </Typography>
                          <Grid container spacing={2}>
                            {/* Table to display issues */}
                            <Grid item xs={12}>
                              <Table>
                                <TableHead>
                                  <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell>Job No</TableCell>
                                    <TableCell>Subject</TableCell>
                                    <TableCell>Issue</TableCell>
                                    <TableCell>Status</TableCell>
                                    {/* <TableCell>Remarks</TableCell> */}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {job.items.length > 0 ? (
                                    job.items.map((issue: any, index: number) => (
                                      <TableRow key={index}>
                                        <TableCell><Checkbox onChange={() => { handleCheckBoxChange(issue.id) }} /></TableCell>
                                        <TableCell>{issue.job_no}</TableCell>
                                        <TableCell>{issue.subject}</TableCell>
                                        <TableCell>{issue.issue_note}</TableCell>
                                        <TableCell>{issue.is_done ? 'Done' : 'Pending'}</TableCell>
                                        {/* <TableCell>{issue.action_remarks}</TableCell> */}
                                      </TableRow>
                                    ))
                                  ) : (
                                    <TableRow>
                                      <TableCell colSpan={5} align="center">
                                        No issues available.
                                      </TableCell>
                                    </TableRow>
                                  )}
                                </TableBody>
                              </Table>
                            </Grid>

                            <Grid container justifyContent="center">
                              <Button type="button" variant="contained" sx={{ mt: 2 }} onClick={handleDone}>
                                Mark as Done
                              </Button>
                              <Button type="button" variant="outlined" sx={{ mt: 2, ml: 2 }} onClick={handleViewIssuesModalClose}>
                                Close
                              </Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Modal>
                    </td>
                  </tr>
                )
              })
              :
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No Jobs Found
                </TableCell>
              </TableRow>
            }
          </tbody>
        </table>
      </Grid>
    </Grid>
  );
};
export default index;
