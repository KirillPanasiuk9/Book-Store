import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import '../HomePage/homePage.scss'

const HomePage = () => {
    return (
        <div className="homePage">
            <NavBar/>
            Home Page
            <Footer/>
        </div>
    );
};

export default HomePage;
