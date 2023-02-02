import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useJwt } from '../../../hooks/useJwt';
import { MainTab } from '../../MainTab/MainTab';
import { CreateButton } from '../../UI/Button/CreateButton';
import { validationSchema } from '../validation';
import { InstallionDetails } from './InstallionDetails';
import { OtherDetails } from './OtherDetails';
import { PersonalDetails } from './PersonalDetails';

export const CreateTab = () => {

  const router = useRouter();

  const token = useJwt();

  const [file_upload, setFileUpload] = React.useState();


  const [erp, setErp] = React.useState(false);
  const [pos, setPos] = React.useState(false);
  const [erp_pos, setErpPos] = React.useState(false);

  const [software_support, setSoftWareSupport] = React.useState(false);
  const [hardware_support, setHardwareSupport] = React.useState(false);
  const [network_support, setNetworkSupport] = React.useState(false);

  const [next_amc_date, setNextAmcDate]: any = React.useState();

  const formik = useFormik({

    initialValues: {

      client_id: '',
      customer_name: '',
      shop_name: '',
      shop_address: '',
      contact_number: '',
      contact_person: '',
      cr_no: '',
      email: '',
      owner_contact_no: '',

      software_name: '',
      shop_category: '',

      erp_system_count: '',
      pos_system_count: '',
      user_limit: '',
      active_erp: '',
      active_pos: '',

      amc: '',
      server_password: '',
      anydesk_password: '',
      server_configuration: '',
      sql_password: '',

    },

    validationSchema: validationSchema,

    onSubmit: (values: any) => {

      const axiosrequest = axios.post('request', {

        client_id: values.client_id,
        customer_name: values.customer_name,
        shop_name: values.shop_name,
        shop_address: values.shop_address,
        contact_number: values.contact_number,
        contact_person: values.contact_person,
        cr_no: values.cr_no,
        email: values.email,
        owner_contact_no: values.owner_contact_no,

        software_name: values.software_name,
        shop_category: values.shop_category,
        erp: erp,
        pos: pos,
        erp_pos: erp_pos,
        erp_system_count: values.erp_system_count,
        pos_system_count: values.pos_system_count,
        user_limit: values.user_limit,
        active_erp: values.active_erp,
        active_pos: values.active_pos,

        amc: values.amc,
        software_support: software_support,
        hardware_support: hardware_support,
        network_support: network_support,
        server_password: values.server_password,
        anydesk_password: values.anydesk_password,
        server_configuration: values.server_configuration,
        sql_password: values.sql_password,
        next_amc_date: next_amc_date?.$d,
        file_location: file_upload
      },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        }
      )

      // you could also use destructuring to have an array of responses
      axios.all([axiosrequest]).then(axios.spread(function (res) {

        router.push('/')

      }));

    },
  });


  const [pop, setPop]: any = React.useState([])


  React.useEffect(() => {

    if (formik.errors.client_id === "Client Id is required"
      || formik.errors.customer_name === "Customer Name is required"
      || formik.errors.shop_name === "Shop Name is required"
    ) {

      setPop(1);

    } else {

      setPop(0);

    }


  }, [formik.errors])


  const personaldetails = [

    {
      title: "Client ID",
      label: "client_id",
      type: "text",
      value: formik.values.client_id,
      touched: formik.touched.client_id,
      errors: formik.errors.client_id,
    },
    {
      title: "Customer Name",
      label: "customer_name",
      type: "text",
      value: formik.values.customer_name,
      touched: formik.touched.customer_name,
      errors: formik.errors.customer_name,
    },
    {
      title: "Shop Name",
      label: "shop_name",
      type: "text",
      value: formik.values.shop_name,
      touched: formik.touched.shop_name,
      errors: formik.errors.shop_name,
    },
    {
      title: "Shop Address",
      label: "shop_address",
      type: "text",
      value: formik.values.shop_address,
      touched: formik.touched.shop_address,
      errors: formik.errors.shop_address,
    },
    {
      title: "Contact Number",
      label: "contact_number",
      type: "number",
      value: formik.values.contact_number,
      touched: formik.touched.contact_number,
      errors: formik.errors.contact_number,
    },
    {
      title: "Contact Person",
      label: "contact_person",
      type: "text",
      value: formik.values.contact_person,
      touched: formik.touched.contact_person,
      errors: formik.errors.contact_person,
    },
    {
      title: "CR NO",
      label: "cr_no",
      type: "number",
      value: formik.values.cr_no,
      touched: formik.touched.cr_no,
      errors: formik.errors.cr_no,
    },
    {
      title: "Email",
      label: "email",
      type: "email",
      value: formik.values.email,
      touched: formik.touched.email,
      errors: formik.errors.email,
    },

    {
      title: "Owner Contact Number",
      label: "owner_contact_no",
      type: "number",
      value: formik.values.owner_contact_no,
      touched: formik.touched.owner_contact_no,
      errors: formik.errors.owner_contact_no,
    },
  ]


  const installiondetails = [

    {
      title: "Software  Name",
      label: "software_name",
      type: "text",
      value: formik.values.software_name,
      touched: formik.touched.software_name,
      errors: formik.errors.software_name,
    },
    {
      title: "Shop Category",
      label: "shop_category",
      type: "text",
      value: formik.values.shop_category,
      touched: formik.touched.shop_category,
      errors: formik.errors.shop_category,
    },
    {
      title: "ERP System Count",
      label: "erp_system_count",
      type: "number",
      value: formik.values.erp_system_count,
      touched: formik.touched.erp_system_count,
      errors: formik.errors.erp_system_count,
    },
    {
      title: "POS System Count",
      label: "pos_system_count",
      type: "number",
      value: formik.values.pos_system_count,
      touched: formik.touched.pos_system_count,
      errors: formik.errors.pos_system_count,
    },
    {
      title: "User Limit",
      label: "user_limit",
      type: "number",
      value: formik.values.user_limit,
      touched: formik.touched.user_limit,
      errors: formik.errors.user_limit,
    },
    {
      title: "Active ERP",
      label: "active_erp",
      type: "number",
      value: formik.values.active_erp,
      touched: formik.touched.active_erp,
      errors: formik.errors.active_erp,
    },

    {
      title: "Active POS",
      label: "active_pos",
      type: "number",
      value: formik.values.active_pos,
      touched: formik.touched.active_pos,
      errors: formik.errors.active_pos,
    },
  ]


  const otherdetails = [

    {
      title: "AMC",
      label: "amc",
      type: "text",
      value: formik.values.amc,
      touched: formik.touched.amc,
      errors: formik.errors.amc,
    },
    {
      title: "Server Password",
      label: "server_password",
      type: "text",
      value: formik.values.server_password,
      touched: formik.touched.server_password,
      errors: formik.errors.server_password,
    },
    {
      title: "Anydesk Password",
      label: "anydesk_password",
      type: "text",
      value: formik.values.anydesk_password,
      touched: formik.touched.anydesk_password,
      errors: formik.errors.anydesk_password,
    },
    {
      title: "Server Configuration",
      label: "server_configuration",
      type: "text",
      value: formik.values.server_configuration,
      touched: formik.touched.server_configuration,
      errors: formik.errors.server_configuration,
    },
    {
      title: "SQL Password",
      label: "sql_password",
      type: "text",
      value: formik.values.sql_password,
      touched: formik.touched.sql_password,
      errors: formik.errors.sql_password,
    },
  ]


  const tabData = [
    {
      label: "Personal Details",
      errors: true,
      component: <PersonalDetails

        software_support={software_support}
        setSoftWareSupport={setSoftWareSupport}


        list={personaldetails} formik={formik} file_upload={file_upload} setFileUpload={setFileUpload} />
    },
    {
      label: "Installion Details",
      errors: false,
      component: <InstallionDetails

        erp={erp}
        setErp={setErp}

        pos={pos}
        setPos={setPos}

        erp_pos={erp_pos}
        setErpPos={setErpPos}

        list={installiondetails} formik={formik} />
    },
    {
      label: "Other Details",
      errors: false,
      component: <OtherDetails

        software_support={software_support}
        setSoftWareSupport={setSoftWareSupport}

        hardware_support={hardware_support}
        setHardwareSupport={setHardwareSupport}

        network_support={network_support}
        setNetworkSupport={setNetworkSupport}

        next_amc_date={next_amc_date}
        setNextAmcDate={setNextAmcDate}

        list={otherdetails} formik={formik} />
    }
  ]



  return (

    <Grid>

      <Box sx={{
        width: "100%", display: "flex",
        flexDirection: { xs: "column-reverse", lg: "column" }
      }}>

        <CreateButton buttonName="Save" title="New Registartion"
          onCreate={formik.handleSubmit}
        />

        <MainTab tabData={tabData} pop={pop} />


      </Box>

    </Grid>

  )


}