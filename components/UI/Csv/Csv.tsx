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
  csvdata?.map((data: any, index: number) => {
    exceldata.push({
      sl_no: index + 1,
      client_id: data?.client_id,
      customer_name: data?.customer_name,
      software_name: data?.software_name,
      server_type: data?.server_type,
      installation_date: data?.next_amc_date
        ? moment.utc(data?.next_amc_date).format("DD/MM/YYYY")
        : null,
      amc_amount: data?.amc,
      status: data?.is_active ? "Active" : "Inactive",
    });
  });

  const headers = [
    { label: "Sl No", key: "sl_no", width: '20' },
    { label: "Client ID", key: "client_id", width: '80' },
    { label: "Client Name", key: "customer_name", width: '150' },
    { label: "Software Name", key: "software_name", width: '150' },
    { label: "Server Type", key: "server_type", width: '80' },
    { label: "Instalation Date", key: "installation_date", width: '30' },
    { label: "AMC Amount", key: "amc_amount", width: '30' },
    { label: "Status", key: "status", width: '30' },
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
