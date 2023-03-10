import React from 'react';
import './loader.scss';

const Loader = () => {
    return (
        <div className='loaderContainer'>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;