import { Button } from '@mui/material';
import React from 'react'

export const CustomizedButton = (props: any) => {

    const { children, onClick, bgColor, m, p } = props;


    return (
        <Button style={{ margin: "10px" }} sx={{
            boxShadow: "none", backgroundColor: bgColor, border: `1px solid ${bgColor}`, "&:hover": {
                backgroundColor: "transparent", boxShadow: "none",
                color: bgColor, border: `1px solid ${bgColor}`
            }
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}
