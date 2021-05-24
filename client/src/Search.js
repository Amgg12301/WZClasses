import React from 'react';
import { useState } from 'react';
import { Button, Form, Container, Grid} from 'semantic-ui-react'

function Search(){

    const [input, setInput] = useState("hello")

    const handleChange = (event) => {
        event.preventDefault()
        setInput(event.target.value.toLowerCase())
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input)
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
        </div>
    )
}

export default Search;