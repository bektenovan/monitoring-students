import React, { useContext, useState } from "react";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { authContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
//import grad from '../files/wp.jpg'

const RegisterForm = () => {
    const { signUp, error } = useContext(authContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleValues() {
        if (!email || !password) {
            alert("заполните поля!");
            return;
        }
        signUp(email, password, navigate);
    }
    return (
        <div width="100%" className='herow'>
            <div className='image'>
                <img width="100%" height="100%" src="https://images.pexels.com/photos/9906084/pexels-photo-9906084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <Box className="log"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                height={"70vh"}>
                <Typography variant="h3" component="h2">
                    Register
                </Typography>
                {error ? <Alert severity="error">{error}</Alert> : null}

                <TextField
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ width: "40%", margin: "10px" }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ width: "40%", margin: "10px" }}



                    id="standard-password-input"
                    label="Password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                />
                <Button
                    variant="contained" color="success"
                    style={{ width: "40%", margin: "10px" }}
                    onClick={handleValues}>
                    Register
                </Button>
                <Typography color={"white"} variant="p" component="h2">
                    Already have an account?
                </Typography>
                <Typography
                    onClick={() => navigate("/login")}
                    variant="p"
                    color={"green"}
                    style={{ cursor: "pointer" }}
                    component="h2">
                    Log in
                </Typography>
            </Box>
        </div>


    );
};

export default RegisterForm; 