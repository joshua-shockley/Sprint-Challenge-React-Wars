import React from 'react';
import {Card, Grid, CardContent} from 'semantic-ui-react';
import styled from 'styled-components';

const NasaCard = (props) => {
    
    const Card = styled.div` 
    border: 1px solid black;
    margin: 20px auto;
    background: darkolivegreen;
    width: 90%;
    `;

    const CardContent = styled.div`
    width:100%;
    margin: 2% auto;
    display:flex; 
    justify-content: space-evenly;
    background: silver;
    border-radius: 5%;
    background: gold;
    border: 2px solid outset black;
    
    `;

    const Header = styled.header`
    margin: 5px auto;
    padding: 20px;
    border: 2px solid outset black;

    `;

    const CardP = styled.div` 
    margin: 2px 2px 2px 2px;
    padding: 2px;
    border: 2px solid black;
    border-radius: 5%;

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