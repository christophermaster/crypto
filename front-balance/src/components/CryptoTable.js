import React, { useEffect, useState } from 'react';
import { getCryptoData } from '../services/api';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiCloudDownload } from "react-icons/bi";
import btcImage from '../img/btc.png';
import adaImage from '../img/ada.png';
import ethImage from '../img/eth.png';
import { Card } from 'react-bootstrap';

const CryptoTable = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const data = await getCryptoData();
        setCoinData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCoinData();
  }, []);

  const exportToCSV = () => {
    const csvData = coinData.map((coin, index) => ({
      "#": index + 1,
      "Asset": coin.data.name + '.' + coin.data.symbol,
      "PRICE (USD)": '$' + coin.data.market_data.price_usd.toFixed(2),
      "CHANGE VS USD (1H)": coin.data.market_data.percent_change_usd_last_1_hour.toFixed(2) + '%',
      "CHANGE VS USD (24H)": coin.data.market_data.percent_change_usd_last_24_hours.toFixed(2) + '%',
      "7 DAY TREND": formatNumberToShort(coin.data.marketcap.current_marketcap_usd),
      "REPORTED MARKETCAP": formatNumberToShort(coin.data.market_data.real_volume_last_24_hours),
      "REAL VOLUME (24H)": '',
      "CHANGE VS USD (7D)": coin.data.roi_data.percent_change_last_1_week.toFixed(2) + '%',
      "CHANGE VS USD (30D)": coin.data.roi_data.percent_change_last_1_month.toFixed(2) + '%',
      "CHANGE VS USD (YTD)": coin.data.roi_data.percent_change_year_to_date.toFixed(2) + '%'
    }));


    const csvHeaders = Object.keys(csvData[0]);
    const csvString = Papa.unparse({ fields: csvHeaders, data: csvData });
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'crypto_data.csv');

  };

  const exportToJson = () => {
    const data = JSON.stringify(coinData, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatNumberToShort = (value) => {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    const suffixNum = Math.floor(Math.log10(value) / 3);
    let shortValue = (value / Math.pow(10, suffixNum * 3)).toFixed(1);
    return shortValue + suffixes[suffixNum];
  }


  return (
    <div className='mt-4'>   
      <Card bg="dark" text="white">
        <Card.Body> <label className='table-tile '>Cryptos</label>
        </Card.Body>
      </Card>
      <div className="mb-2 btn-group-div">
        <Button variant="outline-light" onClick={exportToJson} className="btn-download" size="sm"><BiCloudDownload /> JSON</Button>
        <Button variant="outline-light" onClick={exportToCSV} className="btn-download" size="sm"><BiCloudDownload /> CSV</Button>
      </div>

      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Asset</th>
            <th>PRICE (USD)</th>
            <th>CHANGE VS USD (1H)</th>
            <th>CHANGE VS USD (24H)</th>
            <th>7 DAY TREND</th>
            <th>REPORTED MARKETCAP</th>
            <th>REAL VOLUME (24H)</th>
            <th>CHANGE VS USD (7D)</th>
            <th>CHANGE VS USD (30D)</th>
            <th>CHANGE VS USD (YTD)</th>
          </tr>
        </thead>
        <tbody>

          {coinData.map((coin, index) => (
            <tr key={coin.data.id}>
              <th>{index + 1}</th>
              <td className="wider-cell">
                {(() => {
                  if (coin.data.symbol == "BTC") {
                    return <img src={btcImage} alt="BTC" className="img-fluid" style={{ maxWidth: '15px' }} />
                  } else if (coin.data.symbol == "ADA") {
                    return <img src={adaImage} alt="ADA" className="img-fluid" style={{ maxWidth: '15px' }} />
                  } else {
                    return <img src={ethImage} alt="ETH" className="img-fluid" style={{ maxWidth: '15px' }} />
                  }
                })()}
                <b class="crypto"> {coin.data.name}</b> . {coin.data.symbol}
              </td>
              <td> ${coin.data.market_data.price_usd.toFixed(2)}</td>
              <td style={{ color: coin.data.market_data.percent_change_usd_last_1_hour < 0 ? '#F33F54' : '#00CC3D' }}>{coin.data.market_data.percent_change_usd_last_1_hour.toFixed(2)}%</td>
              <td style={{ color: coin.data.market_data.percent_change_usd_last_24_hours < 0 ? '#F33F54' : '#00CC3D' }}>{coin.data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%</td>
              <td></td>
              <td>{formatNumberToShort(coin.data.marketcap.current_marketcap_usd)}</td>
              <td>{formatNumberToShort(coin.data.market_data.real_volume_last_24_hours)}</td>
              <td style={{ color: coin.data.roi_data.percent_change_last_1_week < 0 ? '#F33F54' : '#00CC3D' }}>{coin.data.roi_data.percent_change_last_1_week.toFixed(2)}%</td>
              <td style={{ color: coin.data.roi_data.percent_change_last_1_month < 0 ? '#F33F54' : '#00CC3D' }}>{coin.data.roi_data.percent_change_last_1_month.toFixed(2)}%</td>
              <td style={{ color: coin.data.roi_data.percent_change_year_to_date < 0 ? '#F33F54' : '#00CC3D' }}>{coin.data.roi_data.percent_change_year_to_date.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </Table >
    </div>
  );
};

export default CryptoTable;