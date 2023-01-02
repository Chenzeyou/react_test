import React, { } from 'react'
import { Stack, Typography } from '@mui/material';

export default function ProductsView({ index, storeData }) {

    return (
        <Stack style={{
            backgroundColor: "#DADADA",
            height: "180px",
            width: "350px",
            boxShadow: "0px 0px 0px 4px #BBBBBB",
        }}
            alignItems="center"
            justifyContent="center"
            direction="row"
            spacing={1}
        >
            <div>
                <img src={storeData[index.prevIndex].img} alt={storeData[index.prevIndex].name} />
            </div>

            <div>
                <img src={storeData[index.index].img} alt={storeData[index.index].name} />
            </div>
            <div>
                <img src={storeData[index.nextIndex].img} alt={storeData[index.nextIndex].name} />
            </div>

        </Stack>
    )
}
