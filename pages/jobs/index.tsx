import { Box, Button, Checkbox, Grid, Modal, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useQueryFetch } from "../../hooks/useQueryFetch";
import style from '../../styles/TableUI.module.css'
import { BASE_URL } from "../../url";
import axios from "axios";
import { useJwt } from "../../hooks/useJwt";
import { DropDown } from "../../components/UI/DropDown/DropDown";

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

  const { fetchedData: fetchedTelecallers, refetch: refetchTelecallersList } = useQueryFetch(`user/telecallers`);

  const [selectedJobs, setSelectedJobs] = useState<any>([]);
  const [selectedJobData, setSelectedJobData] = useState<any>([]);
  const [isViewIssuesModalOpen, setIsViewIssuesModalOpen] = useState(false);
  const [search, setSearch] = React.useState('');
  const [customerService, setCustomerService] = useState(0);

  const handleViewIssuesModalOpen = () => setIsViewIssuesModalOpen(true);
  const handleViewIssuesModalClose = () => setIsViewIssuesModalOpen(false);

  const { fetchedData: fetchedJobList, refetch: refetchJobList } = useQueryFetch(`job/alljobs?search=${search}`);

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
    <Grid
      // container 
      justifyContent="center" sx={{ mt: 5 }}>
      <Grid container
        justifyContent="center"
        alignItems="center"
      >
        < TextField sx={{ width: "40%", my: 1 }}
          fullWidth
          id={'search'}
          name={'search'}
          label={'search'}
          value={search}
          type={'text'}
          onChange={(e) => {
            setSearch(e.target.value)
            refetchJobList()
          }}
        />

        <DropDown
          text="Customer Relationship Manager"
          value={customerService}
          setValue={setCustomerService}
          dropData={fetchedTelecallers?.result.length > 0 ? fetchedTelecallers?.result : []}
          id="id"
          name="username"
        />
      </Grid>
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
                          setSelectedJobData(job)
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
                          <Typography id="modal-title" variant="h6" component="h2" sx={{ fontSize: '16px', fontWeight: 'bold' }}>
                            Client Issues
                          </Typography>
                          <Grid container spacing={2} sx={{ borderTop: 2, marginTop: 2 }}>
                            <Grid container xs={6} sm={6} lg={6}>
                              <Grid item xs={12} sx={{ m: 1 }}>
                                <Typography sx={{ color: "#566573" }}>
                                  Customer Name: <span style={{ color: 'black', fontWeight: 'bold' }}>{selectedJobData?.client?.customer_name}</span>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sx={{ m: 1 }}>
                                <Typography sx={{ color: "#566573" }}>
                                  Customer Id: <span style={{ color: 'black', fontWeight: 'bold' }}>{selectedJobData.client_id}</span>
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid container xs={6} sm={6} lg={6}>
                              <Grid item xs={12} sx={{ m: 1 }}>
                                <Typography sx={{ color: "#566573" }}>
                                  Relationship Manager: <span style={{ color: 'black', fontWeight: 'bold' }}>{selectedJobData?.telecaller?.username}</span>
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sx={{ m: 1 }}>
                                <Typography sx={{ color: "#566573" }}>
                                  Issued At <span style={{ color: 'black', fontWeight: 'bold' }}>{new Date(selectedJobData?.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                  })}</span>
                                </Typography>
                              </Grid>
                            </Grid>
                            {/* Table to display issues */}
                            <Grid item xs={12}>
                              <Box sx={{ maxWidth: '100%', overflowX: 'auto' }}>
                                <Table sx={{ minWidth: 650, maxWidth: 750 }}>
                                  <TableHead>
                                    <TableRow>
                                      <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}></TableCell>
                                      <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>Job No</TableCell>
                                      <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>Subject</TableCell>
                                      <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>Issue</TableCell>
                                      <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>Status</TableCell>
                                      {/* <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>Remarks</TableCell> */}
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {selectedJobData?.items?.length > 0 ? (
                                      selectedJobData.items.map((issue: any, index: number) => (
                                        <TableRow key={index}>
                                          <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}><Checkbox onChange={() => { handleCheckBoxChange(issue.id) }} /></TableCell>
                                          <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>{issue.job_no}</TableCell>
                                          <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>{issue.subject}</TableCell>
                                          <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>{issue.issue_note}</TableCell>
                                          <TableCell style={{ padding: '8px', fontSize: '0.875rem' }}>{issue.is_done ? 'Done' : 'Pending'}</TableCell>
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
                              </Box>
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
