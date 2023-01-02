import React from 'react'
import { Button } from '@mui/material';

export default function BuyButton({HandleRemoveBuyProduct}) {
    return (
        <Button variant="contained" sx={{
            fontFamily: "VT323",
            backgroundColor: "#418C51",
            color: 'white',
            fontSize: "25px",
            width: "100%",
            boxShadow: "0px 0px 0px 4px #60CE77"
        }} onClick={HandleRemoveBuyProduct}>
            Buy
        </Button>
    )
}