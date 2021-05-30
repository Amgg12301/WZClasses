import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social(){
    return (
        <div className="socials">
            <SocialIcon url="mailto:codloadouts21@gmail.com" bgColor="red" style={{ height: 35, width: 35, margin: "0px 5px 5px 5px" }}/>
            <SocialIcon url="https://twitter.com/COD_Loadouts" style={{ height: 35, width: 35, margin: "0px 5px 5px 5px" }}/>
            <SocialIcon url="https://discord.gg/tAwB65tzf4" bgColor="#6600ff" style={{ height: 35, width: 35, margin: "0px 5px 5px 5px" }}/>
        </div>
    )
}

export default Social;