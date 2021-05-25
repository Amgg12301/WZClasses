import React from 'react';
import { Card } from 'semantic-ui-react';

function Loadout(props){

    var creator = ""
    var description = ""
    var list = []

    for(var i = 0; i < 3; i++){
        creator = <b>Creator {i+1}</b>
        var description = <p><b>Muzzle: </b>Monolithic Suppressor<br></br><b>Barrel: </b>XRK Zodiac S440
                            <br></br><b>Underbarrel: </b>Commando Foregrip<br></br><b>Ammunition: </b>45 Round Mags
                            <br></br><b>Optic: </b>VLK 3.0 Optic</p>
        list.push(<Card>
                    <Card.Content header = {creator} />
                    <Card.Content description = {description} />
                </Card>)
        
    }


    return (
        <div className="loadout">
            <h3>{props.gun}</h3>
            <div className="cards">
                {/* <Card>
                    <Card.Content header = 'Creator 1' />
                    <Card.Content description = {description} />
                </Card> */}
                <Card.Group>
                    {list}
                </Card.Group>
            </div>
        </div>
    )
}

export default Loadout;