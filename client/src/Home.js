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
                <div className="intro-text">
                    <p>Tired of looking for the best loadout everytime the meta changes?</p>
                    <p>Don't know what to use with so many content creators out there?</p>
                    <p>This is your one-stop shop to find the best loadouts for every gun created 
                        by famous Call of Duty streamers and content creators! You can easily acquire 
                        the loadout for any gun for any type of build within a couple of seconds. In 
                        addition, you'll be able to see the gameplay associated with each loadout to 
                        get a better feel for what's best for you. Now, let's get to finding that loadout for you!</p>
                </div>
                <div className="input">
                    <Search />
                </div>
            </div>
        </div>
    );
}

export default Home;