import React, { useContext, useState } from 'react';
import { Box, Breadcrumbs, Button, Container, Link, TextField, Typography } from '@mui/material';
import { productContext } from '../context/productContext';
import { useNavigate } from 'react-router-dom';
import grad from '../files/wp.jpg'



const AddProductForm = () => {
    const { createProduct } = useContext(productContext)
    // console.log(createProduct)
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [data, setData] = useState('')


    function handleValues() {
        let newProduct = {
            title,
            description,
            price,
            data,
            image
        }
        if (!title.trim() || !description.trim() || !price || !image.trim() || !data) {
            alert("заполните поля!")
            return
        }
        createProduct(newProduct)
        // console.log(newProduct)
        navigate("/products")
    }
    //   console.log(typeof price);
    return (
        <Box>
            <img width="100%" className='img' src={grad} alt='' />
            <Container maxWidth="sm">
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
                    <Typography color="text.primary">Add</Typography>
                </Breadcrumbs>
                <Box display={"flex"} flexDirection={"column"} padding={"30px"} textAlign={"center"}>
                    <Typography variant="h4" component="h2">Add new product</Typography>ƒ
                    <TextField value={title} onChange={(e) => setTitle(e.target.value)} label="Title" variant="standard" style={{ margin: "10px" }} />
                    <TextField value={description} onChange={(e) => setDescription(e.target.value)} label="Description" variant="standard" style={{ margin: "10px" }} />
                    <TextField type={price} value={price} label="Price" onChange={e => setPrice(+e.target.value)} variant="standard" style={{ margin: "10px" }} />
                    <TextField type={data} value={data} label="Data" onChange={e => setData(+e.target.value)} variant="standard" style={{ margin: "10px" }} />
                    <TextField value={image} onChange={(e) => setImage(e.target.value)} label="Image" variant="standard" style={{ margin: "10px" }} />
                    <Button onClick={handleValues} style={{ margin: "10px" }} variant="contained" color="success">Add product</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AddProductForm; 