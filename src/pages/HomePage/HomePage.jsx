import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import '../HomePage/homePage.scss';
import HomePage_Button from "./components/Button/HomePage_Button";



const HomePage = () => {
    return (
        <div className="homePage">
            <NavBar/>
            <div className="homePageContent">
                <h1>Boooooks</h1>
                <h3>It doesn't take much to make a bookworm happy</h3>
                <HomePage_Button/>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
