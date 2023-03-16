import { CSVLink, CSVDownload } from "react-csv";
import * as moment from 'moment'
import React from 'react'
import { CustomizedButton } from "../Button/CustomizedButton";

export const Csv = (props: any) => {

  const { csvdata } = props;

  const exceldata: any = []
  csvdata?.map((data: any) => {
    exceldata.push({
      client_name: data.client?.customer_name,
      employee_name: data.user?.username,
      purpose: data.purpose,
      date: moment.utc(data.createdAt).format('MMMM Do YYYY, hh:mm A')
    })
  })

  const headers = [
    { label: "Company Name", key: "client_name" },
    { label: "Employee", key: "employee_name" },
    { label: "Purpose", key: "purpose" },
    { label: "Date and Time", key: "date" }
  ];

  console.log("exceldata", exceldata)

  return (


      <CSVLink data={exceldata} headers={headers} filename='search history'>

        <CustomizedButton bgcolor="green">Download</CustomizedButton>

      </CSVLink>


  )
}
