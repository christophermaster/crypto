import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Cards from './Cards';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import btcImage from '../img/btc.png';
import adaImage from '../img/ada.png';
import ethImage from '../img/eth.png';

const Calculator = (props) => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [bitcoinAmount, setBitcoinAmount] = useState(0);
  const [etherAmount, setEtherAmount] = useState(0);
  const [cardanoAmount, setCardanoAmount] = useState(0);

  const usdCrypto = props.usdCrypto;

  const currencies = [
    {
      name: "BTC",
      url: btcImage,
      price: usdCrypto[0],
      monthlyReturn: 0.05,
      inversion: bitcoinAmount > 0 ? bitcoinAmount : initialInvestment
    },
    {
      name: "ETH",
      url: ethImage,
      price: usdCrypto[1],
      monthlyReturn: 0.042,
      inversion: etherAmount > 0 ? etherAmount : initialInvestment

    },
    {
      name: "ADA",
      url: adaImage,
      price: usdCrypto[2],
      monthlyReturn: 0.01,
      inversion: cardanoAmount > 0 ? cardanoAmount : initialInvestment

    },
  ];

  const handleInputChange = (e) => {
    setInitialInvestment(parseFloat(e.target.value || 0));
  };
  const handleInputChangeBTC = (e) => {
    setBitcoinAmount(parseFloat(e.target.value || 0));
  };
  const handleInputChangeETH = (e) => {
    setEtherAmount(parseFloat(e.target.value || 0));
  };
  const handleInputChangeADA = (e) => {
    setCardanoAmount(parseFloat(e.target.value || 0));
  };

  return (
    <div>

      <Card bg="dark" text="white" className='mb-4'>
        <Card.Body>
          <label className='title-calculator'>Calculadora de Inversión en Criptomonedas</label>
        </Card.Body>
      </Card>

      <Card className='card-calculator mb-4' text="white">
        <Card.Body>
          <Form>
            <Form.Label>Ingrese el monto de inversión inicial en USD:</Form.Label>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>BTC:</Form.Label>
                <Form.Control value={bitcoinAmount} onChange={handleInputChangeBTC} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>ETH</Form.Label>
                <Form.Control value={etherAmount} onChange={handleInputChangeETH} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>ADA</Form.Label>
                <Form.Control value={cardanoAmount} onChange={handleInputChangeADA} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Inversión general:</Form.Label>
                <Form.Control value={initialInvestment} onChange={handleInputChange} />
              </Form.Group>
            </Row>

          </Form>
        </Card.Body>
      </Card>

      <Row >
        {currencies.map((currency, idx) => (
          <Col key={idx}  md={4}>
            <Cards
              name={currency.name}
              price={currency.price}
              monthlyReturn={currency.monthlyReturn}
              initialInvestment={currency.inversion}
              url={currency.url}
            />
          </Col>
        ))}
      </Row>
    </div>

  );
};

export default Calculator;