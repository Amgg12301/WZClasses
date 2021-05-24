import React from 'react';
import { Card } from 'semantic-ui-react';

function Loadout(props){


    const description = <p><b>Muzzle: </b>Monolithic Suppressor<br></br><b>Barrel: </b>XRK Zodiac S440
                        <br></br><b>Underbarrel: </b>Commando Foregrip<br></br><b>Ammunition: </b>45 Round Mags
                        <br></br><b>Optic: </b>VLK 3.0 Optic</p>

    return (
        <div className="loadout">
            <h3>{props.gun}</h3>
            <div className="cards">
                <Card>
                    <Card.Content header = 'Creator 1' />
                    <Card.Content description = {description} />
                </Card>
            </div>
        </div>
    )
}

export default Loadout;