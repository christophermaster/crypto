import React, { useState } from 'react';
import btcImage from '../img/btc.png';
import adaImage from '../img/ada.png';
import ethImage from '../img/eth.png';
import { Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Cards = (props) => {

    const resul = props.result;

    const cards = [{
        name: "BTC",
        url: btcImage
    }, {
        name: "ETH",
        url: ethImage
    }, {
        name: "ADA",
        url: adaImage
    }];

    return (
        <div>
            <Row xs={1} md={3} className="g-40">
                {cards.map((card, idx) => (
                    <Col key={idx} style={{ width: '12rem' }}>
                        <Card bg="dark" text="white">
                            <Card.Img src={card.url} />
                            <Card.Body>
                                <Card.Title className="cryptocurrency-name">{card.name}</Card.Title>
                                <Card.Text className="amount-usd"><h3>{resul[idx] ? resul[idx] : 0} USD</h3></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

    );
};

export default Cards;