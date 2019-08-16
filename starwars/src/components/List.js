import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ListCard from "./ListCard.js";
import axios from 'axios';
import {Card, Grid, CardContent} from 'semantic-ui-react';


export default function List() {
const [actor, setActor]= useState([]);


    useEffect(()=> {
    axios.get(`https://swapi.co/api/people/`)
    .then(response => {
        // console.log(response);
        const theActors = response.data.results;
        console.log(theActors);
        setActor(theActors);
        // console.log("can you see this from inside the axios")
    })
    .catch(err => {
        console.log(err.message);
    })
},[]);


const Container = styled.div` 
width: 60%;
margin: 0 auto;
`;

    return (
        <Container>
        <Grid relaxed columns={2} divided="vertically">
        <Grid.Row padded="vertically" columns={2}>
        {actor.map(allTen => {
            return (<ListCard key={allTen.name} name={allTen.name} birth_year={allTen.birth_year} gender={allTen.gender} height={allTen.height} mass={allTen.mass} hair_color={allTen.hair_color} skin_color={allTen.skin_color} eye_color={allTen.eye_color}/>)
        })}
            
        </Grid.Row>
        </Grid>
        </Container>

    );
}