import { Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useJwt } from '../../../hooks/useJwt';
import { useQueryFetch, useQueryFetchId } from '../../../hooks/useQueryFetch';
import { MainTab } from '../../MainTab/MainTab';
import { CreateButton } from '../../UI/Button/CreateButton';
import { InstallionDetails } from './InstallionDetails';
import { OtherDetails } from './OtherDetails';
import { PersonalDetails } from './PersonalDetails';


export const TabHome = () => {


  const router = useRouter();

  const { id } = router.query;


  const { fetchedData: fetchedData } = useQueryFetchId(`request`, id);

  const request = fetchedData?.result

  const token = useJwt();


  const [file_upload, setFileUpload] = React.useState();

  const [erp, setErp] = React.useState(false);
  const [pos, setPos] = React.useState(false);
  const [erp_pos, setErpPos] = React.useState(false);

  const [software_support, setSoftWareSupport] = React.useState(false);
  const [hardware_support, setHardwareSupport] = React.useState(false);
  const [network_support, setNetworkSupport] = React.useState(false);

  const [next_amc_date, setNextAmcDate]: any = React.useState();


  console.log("erp", erp)
  console.log("erp", pos)
  console.log("erp", erp_pos)


  React.useEffect(() => {

    setErp(request?.erp)
    setPos(request?.pos)
    setErpPos(request?.erp_pos)

    setSoftWareSupport(request?.software_support)
    setHardwareSupport(request?.hardware_support)
    setNetworkSupport(request?.network_support)


  },[])



  const formik = useFormik({

    initialValues: {

      client_id: request?.client_id,
      customer_name: request?.customer_name,
      shop_name: request?.shop_name,
      shop_address: request?.shop_address,
      contact_number: request?.contact_number,
      contact_person: request?.contact_person,
      cr_no: request?.cr_no,
      email: request?.email,
      owner_contact_no: request?.owner_contact_no,

      software_name: request?.software_name,
      shop_category: request?.shop_category,
      erp_system_count: request?.erp_system_count,
      pos_system_count: request?.pos_system_count,
      user_limit: request?.user_limit,
      active_erp: request?.active_erp,
      active_pos: request?.active_pos,

      amc: request?.amc,
      server_password: request?.server_password,
      anydesk_password: request?.anydesk_password,
      server_configuration: request?.server_configuration,
      sql_password: request?.sql_password,
      next_amc_date: request?.next_amc_date,

    },

    enableReinitialize: true,

    // validationSchema: clinicSchemea,

    onSubmit: (values: any) => {

      const axiosrequest = axios.patch(`request/${id}`, {

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
        erp: true,
        pos: true,
        erp_pos: true,
        erp_system_count: 0,
        pos_system_count: 0,
        user_limit: 0,
        active_erp: 0,
        active_pos: 0,

        amc: values.amc,
        software_support: true,
        hardware_support: true,
        network_support: true,
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
        alert("submit success")
        router.push(`/`)
      }));

    },
  });


  const personaldetails = [

    {
      title: "Client Id",
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
      title: "Shop Name",
      label: "shop_address",
      type: "text",
      value: formik.values.shop_address,
      touched: formik.touched.shop_address,
      errors: formik.errors.shop_address,
    },
    {
      title: "Contact Number",
      label: "contact_number",
      type: "text",
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
      title: "Cr No",
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
      title: "Erp System Count",
      label: "erp_system_count",
      type: "text",
      value: formik.values.erp_system_count,
      touched: formik.touched.erp_system_count,
      errors: formik.errors.erp_system_count,
    },
    {
      title: "Pos System Count",
      label: "pos_system_count",
      type: "text",
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
      title: "Active Erp",
      label: "active_erp",
      type: "text",
      value: formik.values.active_erp,
      touched: formik.touched.active_erp,
      errors: formik.errors.active_erp,
    },

    {
      title: "Active Pos",
      label: "active_pos",
      type: "text",
      value: formik.values.active_pos,
      touched: formik.touched.active_pos,
      errors: formik.errors.active_pos,
    },
  ]


  const otherdetails = [

    {
      title: "Amc",
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
      title: "Sql Password",
      label: "sql_password",
      type: "email",
      value: formik.values.sql_password,
      touched: formik.touched.sql_password,
      errors: formik.errors.sql_password,
    },
  ]


  const tabData = [
    {
      label: "Personal Details",
      component: <PersonalDetails

        software_support={software_support}
        setSoftWareSupport={setSoftWareSupport}


        list={personaldetails} formik={formik} file_upload={file_upload} setFileUpload={setFileUpload} />
    },
    {
      label: "Installion Details",
      component: <InstallionDetails

        request={request}

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
      component: <OtherDetails

        request={request}

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

      <CreateButton buttonName="Edit" title="request"
        onCreate={formik.handleSubmit}
      />

      <MainTab tabData={tabData} request={request} />

    </Grid>

  )


}