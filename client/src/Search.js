import React from 'react';
import { useState } from 'react';
import { Button, Form, Container, Grid} from 'semantic-ui-react';
import Loadout from './Loadout';

function Search(){

    var stringSimilarity = require('string-similarity')
    const gunsList = ['M13', 'M4A1', 'FR 5.56', 'MW AK-47', 'FAL', 'FN Scar 17', 'Oden', 'Kilo 141', 'RAM-7', 'Grau 5.56', 
                        'CR-56 AMAX', 'AN-94', 'AS VAL', 'FARA 83', 'CW AUG', 'FFAR 1', 'Kar98k', 'LW3 - Tundra', 'PKM', 'MAC-10',
                        'MW AUG', 'CW AK-47', 'Bruen Mk9', 'Bullfrog', 'DMR 14', 'HDR', 'LC10', 'M16', 'CW MP5', 'MW MP5', 'MP7', 
                        'Oden', 'SP-R 208', 'Stoner 63', 'Uzi', 'AK-74u', 'Crossbow', 'FiNN', 'M91', 'PP19 Bizon', 'Type 63', 'XM4', 
                        'AX-50', 'Fennec', 'Krig 6', 'Milano 821', 'RPD', 'Groza', 'Holger-26', 'M60', 'MG34', 'P90', 'Pellington 703', 
                        'QBZ-83', 'SKS', 'Dragunov', 'EBR-14', 'ISO', 'KSP-45', 'M82', 'MK2 Carbine', 'Rytec AMR', 'SA87', 'Striker 45']
    const [input, setInput] = useState("hello")
    const [toggleLoadout, setToggleLoadout] = useState(false)
    const [gun, setGun] = useState(false)
    let loadout;

    const handleChange = (event) => {
        event.preventDefault()
        setInput(event.target.value.toLowerCase())
    }

    function validateInput(){
        var max_similarity = 0
        var gun = ""

        for(var i = 0; i < gunsList.length; i++){
            var similarity = stringSimilarity.compareTwoStrings(input, gunsList[i].toLowerCase())
            console.log(similarity, input, gunsList[i].toLowerCase())
            if (similarity > max_similarity){
                max_similarity = similarity
                gun = gunsList[i]
            }
        }

        setGun(gun)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input)
        validateInput();
        console.log(gun)
        setToggleLoadout(true)
    }

    return (
        <div className="search">
            <Container fluid className="container">
                <Grid>
                    <Grid.Row centered>
                        <Form className="form" onSubmit={handleSubmit}>
                        <p className="search-title">Enter the gun name</p>
                            <Form.Field>
                                <input
                                    type="text"
                                    placeholder="Ex. CR-56 Amax, CW AK-47, XM4, Bullfrog etc."
                                    onChange={handleChange}
                                />
                            </Form.Field>
                            <Button className="search-button"color="blue" type='submit'>Search</Button>
                        </Form>
                    </Grid.Row>
                </Grid>
            </Container>
            {toggleLoadout ? <Loadout gun={gun}/> : ""}
        </div>
    )
}

export default Search;