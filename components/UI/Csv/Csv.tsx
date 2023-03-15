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
      Date: moment.utc(data.createdAt).format('MMMM Do YYYY, hh:mm A')
    })
  })

  console.log("exceldata", exceldata)

  return (


      <CSVLink data={exceldata}>

        <CustomizedButton bgcolor="green">Download</CustomizedButton>

      </CSVLink>


  )
}
