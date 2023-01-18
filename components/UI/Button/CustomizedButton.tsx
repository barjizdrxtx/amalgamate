import { Button } from '@mui/material';
import React from 'react'

export const CustomizedButton = (props: any) => {

    const { children, onClick, bgColor, type, m } = props;

    return (
        <Button type={type} sx={{
            width: props.width,
            boxShadow: "none", my: 1, backgroundColor: bgColor, border: `1px solid ${bgColor}`, "&:hover": {
                backgroundColor: "transparent", boxShadow: "none",
                color: bgColor, border: `1px solid ${bgColor}`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}
