import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Container, Grid, Icon } from 'semantic-ui-react';
import Tabletop from "tabletop";
import { isMobile } from 'react-device-detect';
import Toggle from './Toggle';

function Search(){

    var stringSimilarity = require('string-similarity')
    const gunsList = ['FAL', 'M4A1', 'XM4', 'FFAR 1', 'M13', 'Kilo 141', 'CW AK-47', 'Grau 5.56',
                    'FARA 83', 'CR-56 AMAX', 'MW MP5', 'LC10', 'MAC-10', 'PPSh-41', 'Gallo SA12', 'PKM',
                    'Bruen Mk9', 'CW AUG', 'M16', 'DMR 14', 'CARV.2', 'Kar98k', 'AX-50', 'RAM-7',
                    'Bullfrog', 'AN-94', 'FN Scar 17', 'MW AK-47', 'MP7', 'Uzi', 'Fennec', 'MW AUG',
                    'ISO', 'Origin 12', 'VLK Rogue', 'R9-0', 'Streetsweeper', 'Holger-26', 'FiNN',
                    'SP-R 208', 'Sykov', 'CW MP5', 'AK-74u', 'KSP-45', 'Krig 6', 'QBZ 83', 'Stoner 63',
                    'Pellington', 'Groza', 'HDR', 'Oden', 'PP19 Bizon', 'JAK-12', 'SA87',
                    'CW 1911', 'MW 1911', 'Diamatti', 'FR 5.56', 'P90', 'Model 680', 'AS VAL',
                    'M91', 'Renetti', '.357 Magnums', 'Swiss K31', 'Type 63', 'MG 82', 'C58', 'OTs 9', 
                    'Milano 821', 'SKS', 'Crossbow', '725', 'Striker 45', 'MG34', 'EBR-14', 'MK2 Carbine',
                    'Dragunov', 'Rytec AMR', 'X16', '.50 GS', 'M19']
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
                        Cloakzy, Nickmercs, TeePee, Crowder, and SuperEvan</p>
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
                                            placeholder={isToggled ? "Ex. Aydan, Symfuhny, JoeWo, Huskerrs, Cloakzy etc."
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