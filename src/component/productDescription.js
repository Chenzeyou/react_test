import React from 'react'
import { Stack, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function ProductDescription({ productDescription }) {

    const Text = styled(Typography)(
        () => ({
            fontFamily: "VT323",
            color: 'black',
            fontSize: "22px",
            textTransform: "capitalize"
        })
    );

    const Numbers = styled(Typography)(
        () => ({
            fontFamily: "VT323",
            fontSize: "22px",
            textTransform: "capitalize",
            backgroundColor: "#418C51", 
            color: "white", 
            textAlign: "end",
        })
    );

    return (
        <Stack style={{
            backgroundColor: "#DADADA",
            height: "180px",
            width: "350px",
            boxShadow: "0px 0px 0px 4px #BBBBBB"
        }}
            alignItems="center"
            justifyContent="center"
            spacing={1}
        >
            <Typography sx={{ fontFamily: "VT323", color: 'black', fontSize: "35px", textTransform: "capitalize" }}>
                {productDescription.name}
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <p>image </p>
                <Stack direction="column" spacing={1}>
                    <Text>
                        INTERGRITY
                    </Text>
                    <Text>
                        DOMAGE
                    </Text>
                    <Text>
                        COST
                    </Text>
                </Stack>
                <Stack direction="column" spacing={1}>
                    <Numbers>
                        {productDescription.integrity}
                    </Numbers>
                    <Numbers>
                        {"+" + productDescription.damage}
                    </Numbers>
                    <Numbers>
                        {productDescription.cost}
                    </Numbers>
                </Stack>
            </Stack>
        </Stack>
    )
}
