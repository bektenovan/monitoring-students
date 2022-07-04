import { Box, Button, Container, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../context/productContext';
import ProductCard from '../components/ProductCart';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Filters from "../components/Filters";
import { authContext } from "../context/authContext";




const ProductsList = () => {
    const { getProducts, products, pages } = useContext(productContext)
    const { isAdmin } = useContext(authContext);
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(
        searchParams.get("q") ? searchParams.get("q") : ""
    );

    const [searchParamsData, setSearchParamsData] = useSearchParams();
    const [searchData, setSearchData] = useState(
        searchParamsData.get("q") ? searchParamsData.get("q") : ""
    );

    const [price, setPrice] = useState([1, 10000]);
    const [data, setData] = useState([1, 31])
    const [page, setPage] = useState(1);

    useEffect(() => {
        getProducts()
    }, [])
    useEffect(() => {
        setSearchParams({
            q: search,
            price_gte: price[0],
            price_lte: price[1],
            _page: page,
            _limit: 6,
        });
    }, [search, price, page]);
    useEffect(() => {
        getProducts();
    }, [searchParams]);



    useEffect(() => {
        setSearchParamsData({
            q: search,
            data_gte: data[0],
            data_lte: data[1],
            _page: page,
            _limit: 6,
        });
    }, [searchData, data, page]);
    useEffect(() => {
        getProducts();
    }, [searchParamsData]);


    //   console.log(price);
    //   console.log(pages);
    //   console.log(searchParams.get("q"));
    //   console.log(window.location.search);
    return (
        <Box  >
            <div width="100%" className='herow'>
                <div className='image'>
                    <img width="100%" height="100%" src="https://images.wallpaperscraft.com/image/single/nature_lake_mountains_166874_2560x1080.jpg" alt="" />
                </div>
                <div className='content'>
                    <h1>Galaxy. Travel.</h1>
                    <p>World's first civilian space travel.</p>

                </div>
            </div>


            <Container>
                {isAdmin ? (
                    <Button
                        variant="outlined"
                        style={{ margin: "30px" }}
                        onClick={() => navigate("/add-product")}>
                        Add product
                    </Button>
                ) : null}
                <Filters
                    search={search}
                    setSearch={setSearch}
                    price={price}
                    setPrice={setPrice}
                    searchData={searchData}
                    setSearchData={setSearchData}
                    data={data}
                    setData={setData}
                />
          


                <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} paddingTop={"30px"}>
                    {products.map(item => <ProductCard key={item.id} item={item} />)}
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Pagination
                        page={page}
                        count={isNaN(pages) ? 0 : pages}
                        variant="outlined"
                        shape="rounded"
                        onChange={(e, value) => setPage(value)}
                    />
                </Box>
            </Container>

        </Box>

    );
};

export default ProductsList; 