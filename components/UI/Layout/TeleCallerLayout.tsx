import {
  CircularProgress,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useJwt } from "../../../hooks/useJwt";
import { BASE_URL } from "../../../url";
import { RequestDetails2 } from "../../Request/RequestDetails2";
import { CustomizedButton } from "../Button/CustomizedButton";
import style from "../../../styles/TableUI.module.css"
import * as yup from "yup";
import { useQueryFetch } from "../../../hooks/useQueryFetch";

export const TeleCallerLayout = () => {
  axios.defaults.baseURL = BASE_URL;

  const [searchData, setSearchData] = useState();
  const [blurValue, setBlurValue] = useState("0px");
  const [buttonLoading, setButtonLoading] = useState(false);
  const { fetchedData: fetchedClients, refetch: refetchClientList } = useQueryFetch(`request/servicer/assigned-clients`);

  const clientList = fetchedClients?.result;

  const token = useJwt();

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
                  <tr style={{backgroundColor: client.service_status === 'no_job' ? 'lightgreen': client.service_status === 'job' ? '#ffdddd' :'white'}}>
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
                    <td></td>
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
