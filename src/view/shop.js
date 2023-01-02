import React, { Fragment, useState } from 'react'
import Wallet from '../component/wallet';
import ProductDescription from '../component/productDescription';
import AllProducts from '../component/allProducts/allProducts';
import BuyButton from '../component/buyButton';
import { Grid, Stack } from '@mui/material';
import storeData from '../data/store'

export default function Shop() {
    const [storeSize, setStoreSize] = useState(storeData.length - 1)
    const [store, setStore] = useState(storeData)
    const [index, setIndex] = useState(0)
    const [prevIndex, setPrevIndex] = useState(storeSize)
    const [nextIndex, setNextIndex] = useState(index + 1)
    const [balance, setBalance] = useState(1500)

    const HandleNextIndex = () => {
        if (index === storeSize) {
            setPrevIndex(storeSize)
            setIndex(0)
            return
        }
        setPrevIndex(index)
        setIndex(index + 1)
        if (nextIndex === storeSize) {
            setNextIndex(1)
            return
        }
        setNextIndex(nextIndex + 1)
    }

    const HandlePrevIndex = () => {
        if (prevIndex <= 0) {
            setPrevIndex(storeSize)
            setIndex(index - 1)
            setNextIndex(nextIndex - 1)
            return
        }
        if (index <= 0) {
            console.log(storeSize)
            setPrevIndex(prevIndex - 1)
            setIndex(storeSize)
            setNextIndex(nextIndex - 1)
            return
        }
        if (nextIndex <= 0) {
            setPrevIndex(prevIndex - 1)
            setIndex(index - 1)
            setNextIndex(storeSize)
            return
        }
        setPrevIndex(prevIndex - 1)
        setNextIndex(nextIndex - 1)
        setIndex(index - 1)
    }

    const HandleRemoveBuyProduct = () => {
        if (balance - store[index].cost <= 0)
            return // declancher animation wallet
        const filteredStore = store?.filter(newStore => newStore.key !== store[index].key)
        setStoreSize(filteredStore.length - 1)
        if (prevIndex === storeSize)
            setPrevIndex(prevIndex - 1)
        if (nextIndex === storeSize)
            setNextIndex(nextIndex - 1)
        setBalance(balance - store[index].cost)
        setStore(filteredStore)
    }

    return (
        <Fragment>
            <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Stack spacing={4}>
                    <AllProducts
                        onPrev={HandlePrevIndex}
                        onNext={HandleNextIndex}
                        index={{ prevIndex: prevIndex, index: index, nextIndex: nextIndex }}
                        storeData={store}
                    />
                    <Stack direction={"row"} spacing={2}>
                        <Grid item xs={2} md={2} lg={2}>
                            <Wallet balance={balance} />
                        </Grid>
                        <Grid item xs={8} md={8} lg={8}>
                            <ProductDescription productDescription={store[index]} />
                        </Grid>
                    </Stack>
                    <BuyButton HandleRemoveBuyProduct={HandleRemoveBuyProduct} />
                </Stack>
            </Grid>
        </Fragment >

    )
}
