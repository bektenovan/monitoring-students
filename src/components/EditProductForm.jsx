import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Breadcrumbs,
    Button,
    Container,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { productContext } from "../context/productContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from '../components/Loader';
import grad from '../files/wp.jpg'
// title, description, price, image

const EditProductForm = () => {
    const { getOneProduct, oneProduct, updateProduct } = useContext(productContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    function handleValues() {
        let editedProduct = {
            title,
            description,
            price,
            image
        }
        if (!title.trim() || !description.trim() || !price || !image.trim()) {
            alert("заполните поля!")
            return
        }
        updateProduct(id, editedProduct)
        navigate("/products")
    }
    useEffect(() => {
        getOneProduct(id)
    }, [])
    useEffect(() => {
        if (oneProduct) {
            setTitle(oneProduct.title)
            setPrice(oneProduct.price)
            setImage(oneProduct.image)
            setDescription(oneProduct.description)
        }
    }, [oneProduct])
    return oneProduct ? (
        <div width="100%" className='herow'>
            <div className='image'>
                <img width="100%" height="100%" src="https://images.pexels.com/photos/5652640/pexels-photo-5652640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <Box>
                <img width="100%" className='img' src={grad} alt='' />
                <Container className="log" maxWidth="sm">
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
                        {/* <Typography color="text.primary">Edit</Typography> */}
                    </Breadcrumbs>
                    <Box display={"flex"} flexDirection={"column"} padding={"30px"} textAlign={"center"}>
                        <Typography variant="h4" component="h2">Edit product</Typography>
                        <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="standard-basic" label="Title" variant="standard" style={{ margin: "10px" }} />
                        <TextField value={description} onChange={(e) => setDescription(e.target.value)} id="standard-basic" label="Description" variant="standard" style={{ margin: "10px" }} />
                        <TextField type={price} value={price} label="Price" onChange={e => setPrice(e.target.value)} variant="standard" style={{ margin: "10px" }} />
                        <TextField value={image} onChange={(e) => setImage(e.target.value)} id="standard-basic" label="Image" variant="standard" style={{ margin: "10px" }} />
                        <Button onClick={handleValues} style={{ margin: "10px" }} variant="contained" color="success">Save product</Button>
                    </Box>
                </Container> </Box>
        </div>
    ) : <Loader />;


};

export default EditProductForm; 