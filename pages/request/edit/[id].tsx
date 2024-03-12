import { Grid, Box } from '@mui/material'
import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react'
import { MainTab } from '../../../components/MainTab/MainTab';
import { InstallionDetails } from '../../../components/Request/RequestManage/InstallionDetails';
import { OtherDetails } from '../../../components/Request/RequestManage/OtherDetails';
import { PersonalDetails } from '../../../components/Request/RequestManage/PersonalDetails';
import { CreateButton } from '../../../components/UI/Button/CreateButton';
import { SavedPopup } from '../../../components/UI/Popups/SavedPopup';
import { useJwt } from '../../../hooks/useJwt';
import { useQueryFetchId } from '../../../hooks/useQueryFetch';
import * as yup from 'yup';


const index = () => {

  const router = useRouter();

  const { id } = router.query;


  const { fetchedData: fetchedData } = useQueryFetchId(`request`, id);

  const request = fetchedData?.result

  const token = useJwt();


  const [file_upload, setFileUpload] = React.useState();


  const [alertBox, setAlertBox] = React.useState({ active: false, message: '', success: false, id: 0 })


  const [isActive, setIsActive] = React.useState(true);

  const [erp, setErp] = React.useState(false);
  const [pos, setPos] = React.useState(false);
  const [erp_pos, setErpPos] = React.useState(false);

  const [software_support, setSoftWareSupport] = React.useState(false);
  const [hardware_support, setHardwareSupport] = React.useState(false);
  const [network_support, setNetworkSupport] = React.useState(false);

  const [next_amc_date, setNextAmcDate]: any = React.useState();
  const [installationDate, setInstallationDate]: any = React.useState();

  const [serverType, setServerType] = React.useState(0);
  const [softwareName, setSoftwareName] = React.useState(null);
  const [shopCategory, setShopCategory] = React.useState(null);
  const [amcMonth, setAmcMonth] = React.useState(null)
  const [amcDate, setAmcDate] = React.useState(null)



  React.useEffect(() => {

    setErp(request?.erp)
    setPos(request?.pos)
    setErpPos(request?.erp_pos)

    setSoftWareSupport(request?.software_support)
    setHardwareSupport(request?.hardware_support)
    setNetworkSupport(request?.network_support)

    setFileUpload(request?.file_location)

    setNextAmcDate(request?.next_amc_date)

    setAmcMonth(request?.amc_month)

    setInstallationDate(request?.installation_date)

    setIsActive(request?.is_active)

    setServerType(request?.server_type)

    setSoftwareName(request?.software_name)

    setShopCategory(request?.shop_category)

  }, [request])



  const formik = useFormik({

    initialValues: {

      client_id: request?.client_id,
      customer_name: request?.customer_name,
      shop_name: request?.shop_name,
      shop_address: request?.shop_address || null,
      contact_number: request?.contact_number,
      contact_person: request?.contact_person,
      cr_no: request?.cr_no,
      email: request?.email,
      owner_contact_no: request?.owner_contact_no,
      care_of: request?.care_of,


      software_name: request?.software_name,
      // shop_category: request?.shop_category,
      shop_category: shopCategory,

      erp_system_count: request?.erp_system_count || 0,
      pos_system_count: request?.pos_system_count || 0,
      tab_count: request?.tab_count || 0,
      user_limit: request?.user_limit || 1,
      active_erp: request?.active_erp || null,
      active_pos: request?.active_pos || null,
      active_tabs: request?.active_tabs || null,

      amc: request?.amc,
      server_password: request?.server_password,
      anydesk_password: request?.anydesk_password,
      server_configuration: request?.server_configuration,
      sql_password: request?.sql_password,
      amc_date:request?.amc_date,
      amc_month: request?.amc_month,

    },

    enableReinitialize: true,

    validationSchema: validationSchema,

    onSubmit: (values: any) => {

      const axiosrequest = axios.patch(`request/${id}`, {

        is_active: isActive,
        client_id: values.client_id,
        customer_name: values.customer_name,
        shop_name: values.shop_name,
        shop_address: values.shop_address,
        contact_number: values.contact_number,
        contact_person: values.contact_person,
        cr_no: values.cr_no,
        email: values.email,
        owner_contact_no: values.owner_contact_no,

        software_name: softwareName,
        shop_category: shopCategory,
        erp: erp,
        pos: pos,
        erp_pos: erp_pos,
        erp_system_count: values.erp_system_count,
        pos_system_count: values.pos_system_count,
        tab_count: values.tab_count,
        user_limit: values.user_limit,
        active_erp: values.active_erp,
        active_pos: values.active_pos,
        active_tabs: values.active_tabs,

        amc: values.amc,
        software_support: software_support,
        hardware_support: hardware_support,
        network_support: network_support,
        server_password: values.server_password,
        anydesk_password: values.anydesk_password,
        server_configuration: values.server_configuration,
        sql_password: values.sql_password,
        next_amc_date: next_amc_date?.$d,
        installation_date: installationDate?.$d,
        amc_month: amcMonth || null,
        amc_date: amcDate || null,
        file_location: file_upload,
        server_type: serverType,
        care_of: values.care_of

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

        setAlertBox({ active: true, message: res.data.message, success: res.data.success, id: res.data?.result?.id })

      }));

    },
  });


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
      title: "Care Of",
      label: "care_of",
      type: "text",
      value: formik.values.care_of,
      touched: formik.touched.care_of,
      errors: formik.errors.care_of,
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

    // {
    //   title: "Software  Name",
    //   label: "software_name",
    //   type: "text",
    //   value: formik.values.software_name,
    //   touched: formik.touched.software_name,
    //   errors: formik.errors.software_name,
    // },
    // {
    //   title: "Shop Category",
    //   label: "shop_category",
    //   type: "text",
    //   value: formik.shopCategory,
    //   touched: formik.touched.shop_category,
    //   errors: formik.errors.shop_category,
    // },
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
      title: "Tab Count",
      label: "tab_count",
      type: "number",
      value: formik.values.tab_count,
      touched: formik.touched.tab_count,
      errors: formik.errors.tab_count,
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
    {
      title: "Active Tabs",
      label: "active_tabs",
      type: "number",
      value: formik.values.active_tabs,
      touched: formik.touched.active_tabs,
      errors: formik.errors.active_tabs,
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

        serverType={serverType}
        setServerType={setServerType}

        software_support={software_support}
        setSoftWareSupport={setSoftWareSupport}


        list={personaldetails} formik={formik} file_upload={file_upload} setFileUpload={setFileUpload} />
    },
    {
      label: "Installion Details",
      errors: false,
      component: <InstallionDetails

        softwareName={softwareName}
        setSoftwareName={setSoftwareName}

        shopCategory={shopCategory}
        setShopCategory={setShopCategory}

        erp={erp}
        setErp={setErp}

        pos={pos}
        setPos={setPos}

        erp_pos={erp_pos}
        setErpPos={setErpPos}

        isActive={isActive}
        setIsActive={setIsActive}

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

        installationDate={installationDate}
        setInstallationDate={setInstallationDate}

        amcMonth={amcMonth}
        setAmcMonth={setAmcMonth}

        amcDate={amcDate}
        setAmcDate={setAmcDate}

        list={otherdetails} formik={formik} />
    }
  ]



  return (

    <Grid>

      <Box sx={{
        width: "100%", display: "flex", mt: { xs: 8, md: 0 },
        flexDirection: { xs: "column-reverse", lg: "column" }
      }}>

        <CreateButton buttonName="Update" title="Edit Registration"
          onCreate={formik.handleSubmit}
        />

        <MainTab tabData={tabData} request={request} />

        {alertBox.active === true && < SavedPopup data={alertBox} setAlertBox={setAlertBox}  />}

      </Box>

    </Grid>

  )

}



const validationSchema = yup.object({

  client_id: yup
    .string()
    .required('Client Id is required'),

  customer_name: yup
    .string()
    .required('Customer Name is required'),

  shop_name: yup
    .string()
    .required('Shop Name is required'),

  contact_number: yup
    .string(),
  // .min(10, 'Phone Number should be of minimum 10 characters length'),

  owner_contact_no: yup
    .string(),
  // .min(10, 'Phone Number should be of minimum 10 characters length'),

  email: yup
    .string()
    .email('Enter a valid email')

});



export default index