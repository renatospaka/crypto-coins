import axios from 'axios';

const apiKey = '37a1655efb73c0f9908d059e5dbf782f5a570ffde93e72c6386cecce7133c184';

export const cryptoHttp = axios.create({
  baseURL: 'https://min-api.cryptocompare.com/data',
  headers: {
    authorization: `ApiKey ${apiKey}`
  }
});
