import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { Card } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import Contact from './Contact';

function Loadout(){
    
    var creator = ""
    var description = ""
    var meta = ""
    var socials = ""
    var list = []
    const [data, setData] = useState({})
    const API_KEY = process.env.REACT_APP_API_KEY
    let location = useLocation()
    let gun = location.state.gun

    const modifyData = () => {
        for(var i = 0; i < data.length; i++){
            if (data[i]["Gun"].toLowerCase() === gun.toLowerCase()) {
                creator = <b>{data[i]["Creator"]}</b>
                description = <p><b>Muzzle: </b>{data[i]["Muzzle"]}<br></br><b>Barrel: </b>{data[i]["Barrel"]}
                                    <br></br><b>Underbarrel: </b>{data[i]["Underbarrel"]}<br></br><b>Laser: </b>
                                    {data[i]["Laser"]}<br></br><b>Ammunition: </b>{data[i]["Ammunition"]}<br></br>
                                    <b>Optic: </b>{data[i]["Optic"]}<br></br><b>Rear Grip: </b>{data[i]["Rear Grip"]}
                                    <br></br><b>Stock: </b>{data[i]["Stock"]}<br></br><b>Perk: </b>{data[i]["Perk"]}</p>
                meta = <p>{data[i]["Description"]}</p>
                socials = <p><b>Twitch: </b>{data[i]["Twitch"]}<br></br><b>Youtube:</b> {data[i]["Youtube"]}<br></br><b>Twitter:</b> {data[i]["Twitter"]}
                            <br></br><b>Instagram:</b> {data[i]["Instagram"]}</p>
                            
                list.push(
                        <Card id="card">
                            <Card.Content header = {creator} />
                            <Card.Content meta = {meta} />
                            <Card.Content description = {description} />
                            <Card.Content extra>
                                {socials}
                            </Card.Content>
                        </Card>)
            }
        }

        console.log(list)

        if (list.length === 0){
            return (
                <div className="message">
                    <p>Sorry, we have no loadouts for this gun right now!</p>
                </div>
            )
        } else {
            return list
        }
    }

    useEffect(() => {
        Tabletop.init({
          key: API_KEY,
          simpleSheet: true,
        }).then(function (data) {
          setData(data)
        })
    }, [API_KEY])

    return (
        <div>
            <div className="home">
                <Link to="/">
                    <p id="logo">CODLoadouts</p>
                </Link>
                <Contact />
            </div>
            <div className="loadout">
                <h2>{gun}</h2>
                <div className="cards">
                    <Card.Group>
                        {modifyData()}
                    </Card.Group>
                </div>
            </div>
        </div>
    )
}

export default Loadout;