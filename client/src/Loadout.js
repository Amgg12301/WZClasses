import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { Card, Icon } from 'semantic-ui-react';

function Loadout(props){

    var creator = ""
    var description = ""
    var socials = ""
    var list = []
    const [data, setData] = useState({})
    const API_KEY = process.env.REACT_APP_API_KEY

    useEffect(() => {
        console.log(API_KEY)
        Tabletop.init({
          key: API_KEY,
          simpleSheet: true,
        }).then(function (data) {
          setData(data)
          console.log(data)
        });
      }, []);

    for(var i = 0; i < data.length; i++){
        console.log(data[i]["Gun"], props.gun)
        if (data[i]["Gun"].toLowerCase() === props.gun.toLowerCase()) {
            console.log(data[i])
            creator = <b>{data[i]["Creator"]}</b>
            description = <p><b>Muzzle: </b>{data[i]["Muzzle"]}<br></br><b>Barrel: </b>{data[i]["Barrel"]}
                                <br></br><b>Underbarrel: </b>{data[i]["Underbarrel"]}<br></br><b>Laser: </b>
                                {data[i]["Laser"]}<br></br><b>Ammunition: </b>{data[i]["Ammunition"]}<br></br>
                                <b>Optic: </b>{data[i]["Optic"]}<br></br><b>Rear Grip: </b>{data[i]["Rear Grip"]}
                                <br></br><b>Stock: </b>{data[i]["Stock"]}<br></br><b>Perk: </b>{data[i]["Perk"]}</p>
            socials = <p><b>Twitch: </b>{data[i]["Twitch"]}<br></br><b>Youtube:</b> {data[i]["Youtube"]}<br></br><b>Twitter:</b> {data[i]["Twitter"]}
                        <br></br><b>Instagram:</b> {data[i]["Instagram"]}</p>
                        
            list.push(
                    <Card id="card">
                        <Card.Content header = {creator} />
                        <Card.Content description = {description} />
                        <Card.Content extra>
                            {socials}
                        </Card.Content>
                    </Card>)
        }
    }

    return (
        <div className="loadout">
            <h3>{props.gun}</h3>
            <div className="cards">
                <Card.Group>
                    {list}
                </Card.Group>
            </div>
            <div className="message">
                {list.length === 0 ? "Sorry, we have no loadouts for this gun right now!" : ""}
            </div>
        </div>
    )
}

export default Loadout;