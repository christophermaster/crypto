import React, { useState } from 'react';
import { FaBitcoin, FaEthereum, FaCcVisa } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import Cards from './Cards';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Calculator = () => {
  const [bitcoinAmount, setBitcoinAmount] = useState(0);
  const [etherAmount, setEtherAmount] = useState(0);
  const [cardanoAmount, setCardanoAmount] = useState(0);
  const [result, setResult] = useState([]);

  const calculateInvestment = () => {
    const bitcoinReturn = bitcoinAmount * 1.05; // 5% monthly return
    const etherReturn = etherAmount * 1.042; // 4.2% monthly return
    const cardanoReturn = cardanoAmount * 1.01; // 1% monthly return
    const totalReturn = bitcoinReturn + etherReturn + cardanoReturn;

    setResult([bitcoinReturn.toFixed(2), etherReturn.toFixed(2), cardanoReturn.toFixed(2), totalReturn.toFixed(2)]);
  };

  const handleCalculate = () => {
    calculateInvestment();
  };

  return (
    <div>

      <Card bg="dark" text="white" className='mb-4'>
        <Card.Body>
          <label className='title-calculator'>Calculator</label>
        </Card.Body>
      </Card>

      <Card className='card-calculator mb-4' text="white">
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>
          </Form>
          <label className='title-calculator'>Calculator</label>
          <div>
            <label>
              Bitcoin (BTC):
              <input type="number" value={bitcoinAmount} onChange={(e) => setBitcoinAmount(parseFloat(e.target.value))} />
            </label>
            <FaBitcoin />
          </div>
          <div>
            <label>
              Ethereum (ETH):
              <input type="number" value={etherAmount} onChange={(e) => setEtherAmount(parseFloat(e.target.value))} />
            </label>
            <FaEthereum />
          </div>
          <div>
            <label>
              Cardano (ADA):
              <input type="number" value={cardanoAmount} onChange={(e) => setCardanoAmount(parseFloat(e.target.value))} />
            </label>
            <FaCcVisa />
          </div>
          <Button onClick={handleCalculate} className='mb-4 float-end' >Calculate</Button>
        </Card.Body>
      </Card>



      <Cards result={result} />
    </div>

  );
};

export default Calculator;