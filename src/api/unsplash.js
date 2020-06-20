import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c45666845627604112ca45c62687928decd09c4082fba6a46cb8e9fee61879ab'
  }
});