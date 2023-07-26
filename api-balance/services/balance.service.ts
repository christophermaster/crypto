import axios from 'axios';

export default class BalanceService {
  private readonly apiUrl: string = 'https://data.messari.io/api/v1/';

  async getBalance(crypto: String): Promise<Object> {

    let url: string = `${this.apiUrl}/assets/${crypto}/metrics`;

    const response = await axios.get(url);

    return response;
  }


  
  
}