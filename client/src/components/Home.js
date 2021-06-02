import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

function Home(){
    return (
        <div>
            <div className="home">
                <Link to="/">
                    <p id="logo">CODLoadouts</p>
                </Link>
                <Contact />
            </div>
        </div>
    );
}

export default Home;