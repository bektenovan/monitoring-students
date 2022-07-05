import { Avatar, Box, Breadcrumbs, Container, Link, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../context/productContext';
import Loader from '../components/Loader';
import grad from '../files/wp.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

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

                {oneProduct ? <Box className='details' display={"flex"} flexDirection={"row"} alignItems={"center"} paddingTop={"50px"} justifyContent={"space-around"}>
                    <Paper className='details-image' style={{ width: "40%" }} elevation={1}>
                        <img src={oneProduct.image} width="100%" alt='product' />
                    </Paper>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                        <List className='details-info' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocationOnIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText secondary="10.07.2022" > <Typography style={{ color: "black" }} variant='h4'>{oneProduct.title}</Typography></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <AttachMoneyIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText secondary="" >  <Typography variant='h5'>{oneProduct.price} сом</Typography></ListItemText>

                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImportContactsIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText secondary="10.07.2022"  > <Typography style={{ maxWidth: "400px" }} variant='string'>{oneProduct.description}</Typography>
                                </ListItemText>

                            </ListItem>
                        </List>

                    </Box>

                </Box> : <Loader />}
            </Container>




        </Box>
    );
};

export default ProductDetails; 