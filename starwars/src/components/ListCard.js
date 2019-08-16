import React from 'react';
import {Card, Grid, CardContent} from 'semantic-ui-react';
import styled from 'styled-components';

const NasaCard = (props) => {
    
    const Card = styled.div` 
    border: 1px solid black;
    margin: 20px auto;
    background: darkolivegreen;
    width: 100%;
    border-radius: 10%;
    `;

    const CardContent = styled.div`
    width:100%;
    margin: 2% auto;
    display:flex; 
    justify-content: space-evenly;
    background: black;
    border-radius: 5%;
    background: gold;
    border: 2px solid outset gold;
    
    `;

    const Header = styled.header`
    width: 15%;
    margin: 3px auto;
    padding: 10px;
    border: 2px solid outset gold;
    background: black;
    color:gold;

    `;

    const CardP = styled.div` 
    width: 15%;
    margin: 2px 2px 2px 2px;
    padding: 2px;
    border: 2px solid gold;
    border-radius: 15%;
    color: gold;
    background: black;

    `;
    

    
    return (
        // <div className="nasa-cardInfo" key={props.title}>
        //     <h2 className="nasa_title">Nasa's Photo Of The Day: <strong>{props.title}</strong></h2>
        //     <p>Date: {props.date}</p>
        //     <img className="imgTheDaily" alt="daily space pic!" src={props.imgUrl}/>
        //     <p className="the-description">{props.explanation}</p>
        // </div>
        <Card>
            <CardContent>
                <Header>Name: <strong>{props.name}</strong></Header>
                <CardP>Date Born: <strong>{props.birth_year}</strong></CardP>
                <CardP>Gender: <strong>{props.gender}</strong></CardP>
                <CardP>Height: <strong>{props.height}</strong></CardP>
                <CardP>Mass: <strong>{props.mass}</strong></CardP>
                <CardP>Hair Color: <strong>{props.hair_color}</strong></CardP>
                <CardP>Skin Tone: <strong>{props.skin_color}</strong></CardP>
                <CardP>Eye Color: <strong>{props.eye_color}</strong></CardP>
            </CardContent>
        </Card>
    )
    
}
export default NasaCard;