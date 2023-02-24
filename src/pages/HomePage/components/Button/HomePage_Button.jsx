import React from 'react';
import './homePage_Button.scss'
import {NavLink} from "react-router-dom";

const HomePage_Button = () => {
    return (
        <button
            className='homePage_buttonWrapper'
        >
            <NavLink to={'/catalog'} className="homePage_button">
                Shop
                <svg width="57" height="19" viewBox="0 0 57 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.82 19C44.4733 15.5867 46.02 13.0267 47.46 11.32H0.820001V7.96H47.46C46.02 6.25333 44.4733 3.69333 42.82 0.279998H45.62C48.98 4.17333 52.5 7.05333 56.18 8.92V10.36C52.5 12.2267 48.98 15.1067 45.62 19H42.82Z" fill="#D8FFA4"/>
                </svg>
            </NavLink>
        </button>
    );
};

export default HomePage_Button;
