import React from "react";
import { Card, Button, Icon } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

function Loadout(){
    
    var creatorName = ""
    var gunName = ""
    var description = ""
    var meta = ""
    var socials = ""
    var list = []

    let location = useLocation()
    let data = location.state.data
    let type = location.state.type
    var gun;
    var creator;

    if(type === 'gun'){
        gun = location.state.gun
    }else {
        creator = location.state.creator
    }

    const modifyData = () => {
        for(var i = 0; i < data.length; i++){
            if (data[i]["Gun"].toLowerCase() === gun.toLowerCase()) {
                creatorName = <b>{data[i]["Creator"]}</b>
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
                            <Card.Content header = {creatorName} />
                            <Card.Content meta = {meta} />
                            <Card.Content description = {description} />
                            <Card.Content extra>
                                {socials}
                            </Card.Content>
                        </Card>)
            }
        }

        list = list.sort(() => Math.random() - 0.5)

        return list
    }

    const modifyDataCreator = () => {
        for (var i = 0; i < data.length; i++){
            if(data[i]["Creator"] === creator){
                gunName = <p><b>{data[i]["Gun"]}</b></p>
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
                            <Card.Content header = {gunName} />
                            <Card.Content meta = {meta} />
                            <Card.Content description = {description} />
                            <Card.Content extra>
                                {socials}
                            </Card.Content>
                        </Card>)
            }
        }

        list = list.sort(() => Math.random() - 0.5)

        return list
    }

    return (
        <div>
            <div className="loadout">
                <div className="title">
                    <div className="loadouts-button">
                        <Link to="/">
                            <Button color="red" animated='fade'>
                                <Button.Content visible>Find More Loadouts</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow left' />
                                    </Button.Content>
                            </Button>
                        </Link>
                    </div>
                    {type === 'gun' ? <h2 id="name">{gun} Loadouts</h2> : <h2 id="name">{creator}'s Loadouts</h2>}
                </div>
                <div className="cards">
                    <Card.Group>
                        {type === 'gun' ? modifyData() : modifyDataCreator()}
                    </Card.Group>
                </div>
                {list.length === 0 ? <div className="message">
                                        <p>Sorry, we have no loadouts for this gun right now!</p>
                                    </div> : ""}
            </div>
        </div>
    )
}

export default Loadout;