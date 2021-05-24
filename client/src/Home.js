import React from 'react';
import Search from './Search';

function Home(){
    return (
        <div className="home">
            <h1>Welcome to WZLodadouts!</h1>
            <h3>This is your one-stop shop to find the best loadouts for every gun created by famous Warzone streamers and content creators</h3>
            <Search />
        </div>
    );
}

export default Home;