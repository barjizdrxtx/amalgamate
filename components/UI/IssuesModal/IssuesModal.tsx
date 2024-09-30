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
  IconButton
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

interface Issue {
  id: string;
  job_no: string;
  subject: string;
  is_done: boolean;
  issue_note: string;
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

const ExpandableRow: React.FC<ExpandableRowProps> = ({ issue }) => {
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
        <TableCell>{issue.is_done ? 'Done' : 'Pending'}</TableCell>
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
                  {/* Add more rows here for additional issue details */}
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
                {selectedJobData?.items?.length > 0 ? (
                  selectedJobData.items.map((issue: any, index: number) => (
                    <ExpandableRow key={index} issue={issue} />
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
            <Button variant="contained" onClick={handleDone} sx={{ mr: 2 }}>
              Mark as Done
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