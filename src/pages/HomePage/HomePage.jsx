import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import '../HomePage/homePage.scss'
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const HomePage = () => {
    return (
        <div className="homePage">
            <NavBar/>
            <h1>Boooooks</h1>
            <h3>It doesn't take much to make a bookworm happy</h3>
            {/*<NavLink to={'/catalog'}>*/}
                <Button
                    variant="contained"
                    className="homePage_button"
                    sx={{
                        width: 200,
                        height: 66,
                        backgroundColor: '#FC0A7E',
                        marginLeft: "10%",
                        display: "flex",
                        justifyContent: "space-around",
                        fontSize: 25,
                        alignItems: "center",
                        color: "white"
                    }}
                >
                    <NavLink to={'/catalog'}>
                    Shop
                    <svg viewBox="0 0 57 19">
                        <path d="M42.82 19C44.4733 15.5867 46.02 13.0267 47.46 11.32H0.820001V7.96H47.46C46.02 6.25333 44.4733 3.69333 42.82 0.279998H45.62C48.98 4.17333 52.5 7.05333 56.18 8.92V10.36C52.5 12.2267 48.98 15.1067 45.62 19H42.82Z" fill="white"/>
                    </svg>
                    </NavLink>
                </Button>
            {/*</NavLink>*/}
            <Footer/>
        </div>
    );
};

export default HomePage;
