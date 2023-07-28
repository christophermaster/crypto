import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import CryptoTable from './components/CryptoTable';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';

ReactDOM.render(
  <React.StrictMode>
    <Container fluid="md">
      <CryptoTable />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();