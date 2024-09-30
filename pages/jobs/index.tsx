import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQueryFetch } from '../../hooks/useQueryFetch';
import { BASE_URL } from '../../url';
import axios from 'axios';
import { useJwt } from '../../hooks/useJwt';
import IssuesModal from '../../components/UI/IssuesModal/IssuesModal';

interface Job {
  job_id: number;
  client_id: string;
  client: {
    customer_name: string;
    shop_category: string;
    software_name: string;
    contact_number: string;
    is_active: boolean;
  };
}

interface Telecaller {
  id: number;
  username: string;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  '&.MuiTableCell-body': {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const JobListPage: React.FC = () => {
  const token = useJwt();
  axios.defaults.baseURL = BASE_URL;

  const [search, setSearch] = useState('');
  const [telecaller, setTelecaller] = useState<number>(0);
  const [selectedJobData, setSelectedJobData] = useState<Job | null>(null);
  const [isViewIssuesModalOpen, setIsViewIssuesModalOpen] = useState(false);

  const { fetchedData: fetchedTelecallers } = useQueryFetch('user/telecallers');
  const { fetchedData: fetchedJobList, refetch: refetchJobList } = useQueryFetch(`job/alljobs?search=${search}&telecaller=${telecaller}`);

  const handleTelecallerChange = (event: SelectChangeEvent<number>) => {
    setTelecaller(Number(event.target.value));
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    refetchJobList();
  };

  const handleViewIssuesModalOpen = (job: Job) => {
    setSelectedJobData(job);
    setIsViewIssuesModalOpen(true);
  };

  const handleViewIssuesModalClose = () => {
    setIsViewIssuesModalOpen(false);
  };

  const handleDone = async () => {
    try {
      const response = await axios.patch(
        'job/markAsDone',
        { jobItems: [{ job_id: selectedJobData?.job_id, is_done: true, action_remarks: null }] },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        refetchJobList();
        handleViewIssuesModalClose();
      }
    } catch (error) {
      console.error('Error marking job as done:', error);
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ mt: 5 }}>
      <Grid container justifyContent="center" alignItems="center">
        <TextField
          sx={{ width: '40%', my: 1 }}
          fullWidth
          id="search"
          name="search"
          label="Search"
          value={search}
          onChange={handleSearchChange}
        />

        <FormControl sx={{ m: 1, minWidth: 300 }}>
          <InputLabel id="crm-label-id">CRM</InputLabel>
          <Select
            labelId="crm-label-id"
            id="crm-select"
            value={telecaller}
            label="CRM"
            onChange={handleTelecallerChange}
          >
            <MenuItem value={0}>
              <em>All</em>
            </MenuItem>
            {fetchedTelecallers?.result.map((element: any) => (
              <MenuItem key={element.id} value={element.id}>
                {element.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <TableContainer component={Paper} sx={{ mt: 3, width: '95%', margin: 'auto' }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Client Id</StyledTableCell>
                <StyledTableCell>Customer Name</StyledTableCell>
                <StyledTableCell>Category</StyledTableCell>
                <StyledTableCell>Software</StyledTableCell>
                <StyledTableCell>Mobile No</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fetchedJobList?.result.length ? (
                fetchedJobList.result.map((job: any) => (
                  <StyledTableRow key={job.job_id}>
                    <StyledTableCell component="th" scope="row">
                      {job.client_id}
                    </StyledTableCell>
                    <StyledTableCell>{job.client.customer_name}</StyledTableCell>
                    <StyledTableCell>{job.client.shop_category}</StyledTableCell>
                    <StyledTableCell>{job.client.software_name}</StyledTableCell>
                    <StyledTableCell>{job.client.contact_number}</StyledTableCell>
                    <StyledTableCell>
                      <Typography
                        sx={{
                          width: 'fit-content',
                          bgcolor: job.client.is_active ? 'success.main' : 'error.main',
                          px: 1,
                          py: 0.5,
                          borderRadius: '20px',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        {job.client.is_active ? 'Active' : 'Inactive'}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell>
                      <Button
                        variant="contained"
                        onClick={() => handleViewIssuesModalOpen(job)}
                        sx={{
                          bgcolor: 'info.main',
                          color: 'white',
                          '&:hover': {
                            bgcolor: 'info.dark',
                          },
                        }}
                      >
                        View Jobs
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={7} align="center">
                    No Jobs Found
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {selectedJobData && (
        <IssuesModal
          isOpen={isViewIssuesModalOpen}
          onClose={handleViewIssuesModalClose}
          selectedJobData={selectedJobData}
          handleDone={handleDone}
        />
      )}
    </Grid>
  );
};

export default JobListPage;