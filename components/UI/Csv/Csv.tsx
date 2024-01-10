import { CSVLink, CSVDownload } from "react-csv";
import * as moment from "moment";
import React from "react";
import { CustomizedButton } from "../Button/CustomizedButton";
import { Button } from "@mui/material";
import { Download } from "@mui/icons-material";

export const Csv = (props: any) => {
  const { csvdata } = props;

  const exceldata: any = [];
  csvdata?.map((data: any) => {
    exceldata.push({
      client_name: data.client?.customer_name,
      employee_name: data.user?.username,
      purpose: data.purpose,
      date: moment.utc(data.createdAt).format("MMMM Do YYYY, hh:mm A"),
    });
  });

  const headers = [
    { label: "Company Name", key: "client_name" },
    { label: "Employee", key: "employee_name" },
    { label: "Purpose", key: "purpose" },
    { label: "Date and Time", key: "date" },
  ];

  return (
    <CSVLink data={exceldata} headers={headers} filename="search history">
      <Button
        variant="contained"
        startIcon={<Download />}
        // onClick={handleDownload}
      >
        Download
      </Button>
    </CSVLink>
  );
};

export const CsvReport = (props: any) => {
  const { csvdata } = props;

  const exceldata: any = [];
  csvdata?.map((data: any) => {
    exceldata.push({
      client_name: data?.customer_name,
      amc_amount: data?.amc,
      status: data?.is_active ? "Active" : "Inactive",
    });
  });

  const headers = [
    { label: "Company Name", key: "client_name" },
    { label: "AMC Amount", key: "amc_amount" },
    { label: "Status", key: "status" },
  ];

  return (
    <CSVLink data={exceldata} headers={headers} filename="AMC Report">
      <Button
        variant="contained"
        startIcon={<Download />}
        // onClick={handleDownload}
      >
        Download
      </Button>
    </CSVLink>
  );
};
