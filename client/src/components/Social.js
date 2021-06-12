import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Social(){
    return (
        <div className="socials">
            <SocialIcon url="mailto:wzclasses21@gmail.com" target='_blank'  bgColor="red" style={{ height: 30, width: 30, margin: "0px 5px 5px 5px" }}/>
            <SocialIcon url="https://twitter.com/WZClasses" target='_blank' style={{ height: 30, width: 30, margin: "0px 5px 5px 5px" }}/>
        </div>
    )
}

export default Social;