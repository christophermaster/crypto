import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CryptoTable from './components/CryptoTable';
import reportWebVitals from './reportWebVitals';
import Container from 'react-bootstrap/Container';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Container fluid="md">
      <CryptoTable/>
    </Container>
  </React.StrictMode>
);

reportWebVitals();
