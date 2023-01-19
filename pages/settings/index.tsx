import { Box } from '@mui/material';
import { useRouter } from 'next/router'
import React from 'react'
import { CustomizedButton } from '../../components/UI/Button/CustomizedButton';

const index = () => {

    const router = useRouter();

    return (

        <Box sx={{ m: 1 }}>

            <CustomizedButton bgColor="red" onClick={() => {

                localStorage.removeItem("authToken")

                router.push('/auth/login').then(() => router.reload())

            }

            }>Logout</CustomizedButton>

        </Box>

    )
}

export default index