import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({ name, price, monthlyReturn, initialInvestment, url }) => {

    const calculateBalance = () => {
        const monthlyMultiplier = 1 + monthlyReturn;
        const annualMultiplier = monthlyMultiplier ** 12;
        const balance = initialInvestment * annualMultiplier;
        return balance;
    };

    const balance = calculateBalance();


    return (
        <div>

            <Card bg="dark" text="white">
                <Card.Header >{name}</Card.Header>
                <Card.Img src={url} />
                <Card.Body>
                    <Card.Text className="amount-usd"><b className='crypto'>Valor actual:</b> ${price.toFixed(2)} </Card.Text>
                </Card.Body>
                <Card.Header >Balance proyectado</Card.Header>

                <Card.Body>
                    <Card.Text className="amount-usd"><b className='crypto'> USD:</b> ${balance.toFixed(2)} </Card.Text>
                    <Card.Text className="amount-usd"><b className='crypto'>Crypto:</b> {(balance / price).toFixed(8) } </Card.Text>
                </Card.Body>
            </Card>

        </div>

    );
};

export default Cards;