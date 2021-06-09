import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Container, Grid, Icon } from 'semantic-ui-react';
import Tabletop from "tabletop";
import { isMobile } from 'react-device-detect';
import Toggle from './Toggle';

function Search(){

    var stringSimilarity = require('string-similarity')
    const gunsList = ['FAL', 'FN Scar 17', 'M4A1', 'XM4', 'Ram-7', 'FFAR 1', 'QBZ-83', 'Groza', 'M13', 'Oden', 'Kilo 141',
                        'CW AK-47', 'AN-94', 'AS VAL', 'CR-56 AMAX', 'Krig 6', 'P90', 'Milano 821', 'MW AUG', 'Bullfrog', 
                        'ISO', 'PP19 Bizon', 'MW MP5', 'KSP-45', 'AK-74u', 'Fennec', 'MAC-10', 'Uzi', 'CW MP5', 'LC10', 'MP7', 
                        'PPSh-41', 'Streetsweeper', 'Gallo SA12', 'R9-0', 'Origin 12', 'JAK-12', 'Hauer 77', 'Model 680', 
                        'Model 680', 'VLK Rogue', '725', 'PKM', 'Holger-26', 'RPD', 'FiNN', 'MG34', 'M91', 'SA87',
                        'Stoner 63', 'Bruen Mk9', 'M60', 'CW AUG', 'M16', 'DMR 14', 'Type 63', 'CARV.2', 'R1 Shadowhunter', 
                        'SKS', 'Crossbow', 'MK2 Carbine', 'EBR-14', 'Kar98k', 'SP-R 208', 'LW3-Tundra', 'Pelington 703', 
                        'ZRG 20MM', 'M82', 'AX-50', 'HDR', 'Rytec AMR', 'Dragunov']
    const [input, setInput] = useState("")
    const [data, setData] = useState({})
    const [isToggled, setIsToggled] = useState(false);
    const history = useHistory();
    const API_KEY = process.env.REACT_APP_API_KEY

    const handleChange = (event) => {
        event.preventDefault()
        setInput(event.target.value.toLowerCase())
    }

    const validateInput = () => {
        var max_similarity = 0
        var gun = ""
        var isValid = false

        for(var i = 0; i < gunsList.length; i++){
            var similarity = stringSimilarity.compareTwoStrings(input, gunsList[i].toLowerCase())
            console.log(similarity, input, gunsList[i])

            if (similarity > max_similarity){
                max_similarity = similarity
                gun = gunsList[i]
            }

        }

        if (max_similarity >= 0.40 && gun.length > 0){
            isValid = true
        }

        return [isValid, gun, 'gun']
    }

    const validateCreatorInput = () => {
        var creatorList = [];

        for (var i = 0; i < data.length; i++){
            if(!creatorList.includes(data[i]["Creator"])){
                creatorList.push(data[i]["Creator"])
            }
        }

        var creator = ""
        var isValid = false

        for (var x = 0; x < creatorList.length; x++){
            if(input.toLowerCase() === creatorList[x].toLowerCase()){
                creator = creatorList[x]
                break
            }
        }

        if(creator.length !== 0){
            isValid = true
        }
        return [isValid, creator, 'creator']
    }

    const goToLoadouts = (arr) => {
        if (arr[0]){
            if (arr[2] === 'gun'){
                history.push({
                    pathname: '/loadout',
                    state: {
                        gun: arr[1],
                        data: data,
                        type: 'gun',
                    },
                })
            } else {
                history.push({
                    pathname: '/loadout',
                    state: {
                        creator: arr[1],
                        data: data,
                        type: 'creator',
                    },
                })
            }
        } else {
            if (arr[2] === 'gun'){
                if (arr[1].length === 0){
                    alert('Please enter a valid Warzone gun name!')
                } else {
                    alert(`Please enter a valid Warzone gun name!\nDid you possibly mean the ${arr[1]}?`)
                }
            }else{
                alert('We currently don\'t have loadouts for this creator :(')
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        var arr;
        
        if (!isToggled){
            arr = validateInput()
        }else{
            arr = validateCreatorInput()
        }

        goToLoadouts(arr)
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
            <div className="search-text">
                <div className="intro-text">
                    <div>
                        <p>Loadouts for every Gun in Warzone!</p>
                        <p>...From Aydan, Symfuhny, JoeWo, Huskerrs, 
                            SuperEvan, Nickmercs, Cloakzy, TeePee, and Crowder</p>
                    </div>
                </div>
            </div>
            <div className="search">
                <Container fluid className="container">
                    <Grid>
                        <Grid.Row centered>
                            <div className="toggle-form">
                                <Toggle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
                                {isToggled ? <p id="title">Find Loadouts for Creator</p>
                                                            : <p id="title">Find Loadouts for Gun</p>}
                            </div>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Form className="form" onSubmit={handleSubmit}>
                                <div className="form-field-div">
                                    <Form.Field>
                                        <input
                                            type="text"
                                            placeholder={isToggled ? "Ex. Aydan, Symfuhny, Huskerrs, JoeWo, etc."
                                                                    : "Ex. CR-56 AMAX, CW AK-47, M4A1, XM4, etc."}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Field>
                                </div>
                                <div className="search-button-div">
                                    {isMobile ? 
                                    <div>
                                        <Button className="search-button"color="blue" type='submit'>
                                            <Button.Content visible>Get Loadouts</Button.Content>
                                        </Button>
                                    </div> 
                                    : 
                                    <div>
                                        <Button className="search-button"color="blue" type='submit' animated='fade'>
                                            <Button.Content visible>Get Loadouts</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='arrow right' /> 
                                            </Button.Content>   
                                        </Button>
                                    </div>}
                                </div>
                            </Form>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Search;