import React from 'react';
import { Link } from 'react-router-dom';
import MobileContact from './MobileContact';

function MobileHome(){
    return (
        <div>
            <div className="mobile-home">
                <Link to="/">
                    <p id="logo">CODLoadouts</p>
                </Link>
                <MobileContact />
            </div>
        </div>
    );
}

export default MobileHome;