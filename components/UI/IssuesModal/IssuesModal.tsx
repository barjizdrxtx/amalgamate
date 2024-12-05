import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Collapse,
  IconButton,
  Select,
  MenuItem,
  TextField,
  FormControl,
  InputLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Define types for our data structures
interface Client {
  customer_name: string;
}

interface Telecaller {
  username: string;
}

type IssueStatus = 'Done' | 'Rejected' | 'Waiting for Approval' | 'Cash Work';

interface Issue {
  id: string;
  job_no: string;
  subject: string;
  status: IssueStatus;
  issue_note: string;
  remark?: string;
}

interface SelectedJobData {
  client: Client;
  client_id: string;
  telecaller: Telecaller;
  createdAt: string;
  items: Issue[];
}

interface ExpandableRowProps {
  issue: Issue;
  onStatusChange: (id: string, newStatus: IssueStatus) => void;
  onRemarkChange: (id: string, newRemark: string) => void;
}

interface IssuesModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedJobData: any;
  handleDone: () => void;
}

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(4),
  width: '80%',
  maxWidth: '1000px',
  maxHeight: '90vh',
  overflowY: 'auto',
}));

const ExpandableRow: React.FC<ExpandableRowProps> = ({ issue, onStatusChange, onRemarkChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{issue.job_no}</TableCell>
        <TableCell>{issue.subject}</TableCell>
        <TableCell>
          <FormControl fullWidth>
            <Select
              value={issue.status}
              onChange={(e) => onStatusChange(issue.id, e.target.value as IssueStatus)}
            >
              <MenuItem value="Done">Done</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
              <MenuItem value="Waiting for Approval">Waiting for Approval</MenuItem>
              <MenuItem value="Cash Work">Cash Work</MenuItem>
            </Select>
          </FormControl>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Issue Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">Issue Note</TableCell>
                    <TableCell>{issue.issue_note}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">Update Remark</TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        multiline
                        rows={2}
                        value={issue.remark || ''}
                        onChange={(e) => onRemarkChange(issue.id, e.target.value)}
                        placeholder="Enter update remark"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const IssuesModal: React.FC<IssuesModalProps> = ({ isOpen, onClose, selectedJobData, handleDone }) => {
  const [issues, setIssues] = useState<Issue[]>(selectedJobData.items);

  const handleStatusChange = (id: string, newStatus: IssueStatus) => {
    setIssues(issues.map(issue => 
      issue.id === id ? { ...issue, status: newStatus } : issue
    ));
  };

  const handleRemarkChange = (id: string, newRemark: string) => {
    setIssues(issues.map(issue => 
      issue.id === id ? { ...issue, remark: newRemark } : issue
    ));
  };

  const handleSaveChanges = () => {
    // Here you would typically send the updated issues to your backend
    console.log('Saving changes:', issues);
    // After saving, you might want to close the modal or update the parent component
    onClose();
  };

  return (
    <StyledModal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <ModalContent>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ fontSize: '18px', fontWeight: 'bold', mb: 2 }}>
          Client Issues
        </Typography>
        <Grid container spacing={2} sx={{ borderTop: 2, pt: 2 }}>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "text.secondary" }}>
              Customer Name: <Box component="span" sx={{ color: 'text.primary', fontWeight: 'bold' }}>{selectedJobData?.client?.customer_name}</Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1 }}>
              Customer Id: <Box component="span" sx={{ color: 'text.primary', fontWeight: 'bold' }}>{selectedJobData?.client_id}</Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1 }}>
              AMC: <Box component="span" sx={{ color: 'text.primary', fontWeight: 'bold' }}>{selectedJobData?.client?.amc}</Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography sx={{ color: "text.secondary" }}>
              Relationship Manager: <Box component="span" sx={{ color: 'text.primary', fontWeight: 'bold' }}>{selectedJobData?.telecaller?.username}</Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", mt: 1 }}>
              Issued At: <Box component="span" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
                {new Date(selectedJobData.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit',
                })}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>Job No</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {issues.length > 0 ? (
                  issues.map((issue: Issue) => (
                    <ExpandableRow 
                      key={issue.id} 
                      issue={issue} 
                      onStatusChange={handleStatusChange}
                      onRemarkChange={handleRemarkChange}
                    />
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No issues available.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Grid>
          <Grid container justifyContent="center" sx={{ mt: 2 }}>
            <Button variant="contained" onClick={handleSaveChanges} sx={{ mr: 2 }}>
              Save Changes
            </Button>
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </ModalContent>
    </StyledModal>
  );
};

export default IssuesModal;