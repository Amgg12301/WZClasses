import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, Container, Grid, Icon } from 'semantic-ui-react';
import Tabletop from "tabletop";
import Toggle from './Toggle';

function Search(){

    var stringSimilarity = require('string-similarity')
    const gunsList = ['M13', 'M4A1', 'FR 5.56', 'MW AK-47', 'FAL', 'FN Scar 17', 'Oden', 'Kilo 141', 'RAM-7', 'Grau 5.56', 
                        'CR-56 AMAX', 'AN-94', 'AS VAL', 'FARA 83', 'CW AUG', 'FFAR 1', 'Kar98k', 'LW3 - Tundra', 'PKM', 'MAC-10',
                        'MW AUG', 'CW AK-47', 'Bruen Mk9', 'Bullfrog', 'DMR 14', 'HDR', 'LC10', 'M16', 'CW MP5', 'MW MP5', 'MP7', 
                        'Oden', 'SP-R 208', 'Stoner 63', 'Uzi', 'AK-74u', 'Crossbow', 'FiNN', 'M91', 'PP19 Bizon', 'Type 63', 'XM4', 
                        'AX-50', 'Fennec', 'Krig 6', 'Milano 821', 'RPD', 'Groza', 'Holger-26', 'M60', 'MG34', 'P90', 'Pellington 703', 
                        'QBZ-83', 'SKS', 'Dragunov', 'EBR-14', 'ISO', 'KSP-45', 'M82', 'MK2 Carbine', 'Rytec AMR', 'SA87', 'Striker 45']
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

            if (similarity > max_similarity){
                max_similarity = similarity
                gun = gunsList[i]
            }

        }

        if (max_similarity > 0.30 && gun.length > 0){
            isValid = true
        }

        return [isValid, gun]
    }

    const goToLoadouts = (arr) => {
        if (arr[0]){
            history.push({
                pathname: 'loadout',
                state: {
                    gun: arr[1],
                    data: data,
                },
            })
        } else {
            alert('Please enter a valid gun name')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        var arr = validateInput()

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
                    <p>Tired of looking for the best loadout everytime the meta changes?</p>
                    <p>Don't know what to use with so many content creators out there?</p>
                    <p>This is your one-stop shop to find the best loadouts for every gun created 
                        by famous Warzone streamers and content creators! You can easily acquire 
                        the loadout for any gun for any type of build within a couple of seconds. 
                        Click the toggle to either get all loadouts used by a specific content
                        creator or all loadouts for a specific gun. Now, let's get to finding that loadout for you!</p>
                </div>
            </div>
            <div className="search">
                <div className="toggle-form">
                    <Toggle isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
                    {isToggled ? <p id="title">Find Loadouts for Creator</p>
                                                : <p id="title">Find Loadouts for Gun</p>}
                </div>
                <Container fluid className="container">
                    <Grid>
                        <Grid.Row centered>
                            <Form className="form" onSubmit={handleSubmit}>
                                <div className="form-field-div">
                                    <Form.Field>
                                        <input
                                            type="text"
                                            placeholder={isToggled ? "Ex. Amogh, Alex, Kevin, Chris, etc."
                                                                    : "Ex. CR-56 AMAX, CW AK-47, M4A1, XM4, etc."}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Field>
                                </div>
                                <div className="search-button-div">
                                    <Button className="search-button"color="blue" type='submit' animated='fade'>
                                        <Button.Content visible>Get Loadouts</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name='arrow right' /> 
                                            </Button.Content>   
                                    </Button>
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