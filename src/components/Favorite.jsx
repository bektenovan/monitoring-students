import React, { useContext, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, CardMedia, Container, IconButton, Tab } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import grad from '../files/wp.jpg'
import { favoriteContext } from "../context/favoriteContext";
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Favorite() {
    const { getFavorite, favorite, changeProductCount, deleteFromFavorite } = useContext(favoriteContext);
    useEffect(() => {
        getFavorite();
    }, []);

    const navigate = useNavigate();
    // console.log(favorite);
    return (
        <Box>
            <img width="100%" className='img' src={grad} alt='' />
            <Container className="fav">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 20 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: "black" }}>
                                <TableCell style={{ color: "white", fontSize: "20px" }}>Product</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="right">Price</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="right">Description</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="right">Image</TableCell>
                                <TableCell style={{ color: "white", fontSize: "20px" }} align="right">More</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {favorite &&
                                favorite?.products.map(row => (
                                    <TableRow
                                        key={row.item.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            <Tab icon={<FavoriteIcon color={"success"} />} aria-label="favorite" />

                                            {row.item.title}

                                        </TableCell>
                                        <TableCell align="right">{row.item.price}</TableCell>
                                        <TableCell align="right">
                                            {row.item.description}
                                        </TableCell>
                                        <TableCell align="right">
                                            <CardMedia
                                                component="img"
                                                alt="green iguana"
                                                height="100%"
                                                width="100%"
                                                image={row.item.image}
                                            /></TableCell>
                                        <TableCell align="right">
                                            <IconButton
                                                onClick={() => deleteFromFavorite(row.item.id)}
                                                aria-label="delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton
                                                onClick={() => navigate(`/products/${row.item.id}`)}
                                                aria-label="delete">
                                                <InfoIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>
        </Box>
    );
}