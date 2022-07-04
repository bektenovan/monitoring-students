import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Slider } from "@mui/material";
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { setDate } from "date-fns";
const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.50),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.60),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: 20,
    border: "1px solid grey",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(0),
        width: "200px",
    },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
const Filters = ({ search, setSearch, price, setPrice, data, setData }) => {
    const [value, setValue] = React.useState([null, null]);

    return (
        <div>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    value={search}
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>
            <Slider

                getAriaLabel={() => "Temperature range"}
                value={price}
                onChange={(e, value) => setPrice(value)}
                valueLabelDisplay="auto"
                min={1}
                max={10000}
                step={100}
                style={{ width: "200px", display: "flex", justifyContent: "flex-end", marginLeft: "10px", color: "green" }}
            />
            <Box style={{ width: "650px" }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDateRangePicker
                        displayStaticWrapperAs="desktop"
                        value={data}
                        onChange={(e, value) => {
                            setData(value);
                        }}
                        renderInput={(startProps, endProps) => (
                            <React.Fragment>
                                <TextField {...startProps} />
                                <Box sx={{ mx: 1 }}> to </Box>
                                <TextField {...endProps} />
                            </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
            </Box>
        </div>
    );
};
export default Filters;