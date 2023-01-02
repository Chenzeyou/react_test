import React from 'react'
import { Stack, Typography } from '@mui/material';

export default function Wallet({ balance }) {
    
    return (
        <Stack style={{
            backgroundColor: "#E5AE22",
            height: "100px",
            width: "100px",
            boxShadow: "0px 0px 0px 4px #FFD700"
        }}
            alignItems="center"
            justifyContent="center"
        >
            <Typography sx={{ fontFamily: "VT323", color: 'black', fontSize: "25px" }}> Wallet </Typography>
            <Stack bgcolor="#FAFAD2" p={0.1}>
                <Stack sx={{ border: "solid 2px #E5AE22" }} p={1}>
                    <Typography sx={{ fontFamily: "VT323", color: 'black', fontSize: "22px" }}> {balance} </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}
