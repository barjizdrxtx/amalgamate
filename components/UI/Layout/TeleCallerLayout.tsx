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

export const TeleCallerLayout = () => {
  axios.defaults.baseURL = BASE_URL;

  const [searchData, setSearchData] = useState();
  const [blurValue, setBlurValue] = useState("0px");
  const [buttonLoading, setButtonLoading] = useState(false);

  const token = useJwt();

  const formik = useFormik({
    initialValues: {
      client_id: "",
      reason: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values: any, e: any) => {
      setButtonLoading(true);

      // e.preventDefault()

      const axiosrequest = axios.post(
        "request/details",
        {
          client_id: values.client_id,
          reason: values.reason,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      // you could also use destructuring to have an array of responses
      axios.all([axiosrequest]).then(
        axios.spread(function (res) {
          setSearchData(res.data.result);

          if (res.data.result.is_active) {
            setBlurValue("0px");
          } else {
            setBlurValue("5px");
          }

          localStorage.setItem("isSearch", "false");

          setButtonLoading(false);
        })
      );
    },
  });

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
            <tr>

            </tr>
          </tbody>

        </table>
      </Grid>

    </Grid>
  );
};

const validationSchema = yup.object({
  client_id: yup.string().required("Client Id is required"),

  reason: yup.string().required("Write a reason"),
});
