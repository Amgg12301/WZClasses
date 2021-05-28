import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Search from './Search';

function Home(){
    return (
        <div>
            <div className="home">
                <Link to="/">
                    <p id="logo">CODLoadouts</p>
                </Link>
                <Contact />
            </div>
            <Search />
        </div>
    );
}

export default Home;