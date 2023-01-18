import { useRouter } from 'next/router'
import React from 'react'
import { CustomizedButton } from '../../components/UI/Button/CustomizedButton';

const index = () => {

    const router = useRouter();

    return (
        <div>

            <CustomizedButton bgColor="red" onClick={() => {

                router.push("/auth/login")

                localStorage.removeItem("authToken")

                window.location.reload();

                

            }

            } sx={{ m: 1 }}>Logout</CustomizedButton>

        </div>
    )
}

export default index