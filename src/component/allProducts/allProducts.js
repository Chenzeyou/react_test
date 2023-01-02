import React, { Fragment } from 'react'
import ProductsView from './productsView';
import { Button, Stack, Grid } from '@mui/material';


export default function AllProducts({ storeData, index , onNext, onPrev}) {
    return (
        <Fragment>
            <Stack direction={"row"} spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={2} md={2} lg={2}>
                <Button variant="text" sx={{ fontFamily: "VT323", color: 'black', fontSize: "50px" }} onClick={onPrev}> Prev </Button>
            </Grid>
            <Grid item xs={8} md={8} lg={8}>
                <ProductsView index={index} storeData={storeData}/>
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
                <Button variant="text" sx={{ fontFamily: "VT323", color: 'black', fontSize: "50px" }} onClick={onNext}> Next </Button>
            </Grid>
            </Stack>
        </Fragment>
    )
}
