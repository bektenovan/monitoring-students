import { Box, Breadcrumbs, Container, Link, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../context/productContext';
import Loader from '../components/Loader';
import grad from '../files/wp.jpg'

const ProductDetails = () => {
    const { getOneProduct, oneProduct } = useContext(productContext)
    const { id } = useParams()
    useEffect(() => {
        getOneProduct(id)
    }, [])
    return (
        <Box>
            <img width="100%" className='img' src={grad} alt='' />
            <Container>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Shop
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/products">
                        Products
                    </Link>
                    <Typography color="text.primary">Info</Typography>
                </Breadcrumbs>
                {oneProduct ? <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingTop={"50px"} textAlign={"center"}>
                    <Paper style={{ width: "40%" }} elevation={3}>
                        <img src={oneProduct.image} width="100%" alt='product' />
                    </Paper>
                    <Typography variant='h4'>{oneProduct.title}</Typography>
                    <Typography style={{ maxWidth: "400px" }} variant='string'>{oneProduct.description}</Typography>
                    <Typography variant='h5'>{oneProduct.price}</Typography>
                    <Typography variant='h5'>{oneProduct.data}</Typography>
                </Box> : <Loader />}
            </Container>
        </Box>
    );
};

export default ProductDetails; 