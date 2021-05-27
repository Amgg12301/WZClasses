import React from 'react';
import Contact from './Contact';
import Search from './Search';

function Home(){
    return (
        <div>
            <div className="home">
                <p id="logo">CODLoadouts</p>
                <Contact />
            </div>
            <div className="search-text">
                <h3>This is your one-stop shop to find the best loadouts for every gun created by famous Call of Duty streamers and content creators</h3>
                <Search />
            </div>
        </div>
    );
}

export default Home;