import axios from 'axios';

export default class BalanceService {
  private readonly apiUrl: string = 'https://data.messari.io/api/v1';

  async getBalance(crypto: String): Promise<Object> {

    let urlBTC: string = `${this.apiUrl}/assets/BTC/metrics`;
    let urlETH: string = `${this.apiUrl}/assets/ETH/metrics`;
    let urlADA: string = `${this.apiUrl}/assets/ADA/metrics`;

    const responseBTC = await axios.get(urlBTC);
    const responseETH = await axios.get(urlETH);
    const responseADA = await axios.get(urlADA);

    return [responseBTC.data,responseETH.data,responseADA.data];
  }

}