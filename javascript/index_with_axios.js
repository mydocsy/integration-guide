const jwt = require('jsonwebtoken');
const axios = require('axios');

const API_KEY = 'Your API key';
const API_SECRET = 'Your API secret';

const baseUrl = 'https://staging.mydocsy.com';
// const baseUrl = 'https://mydocsy.com' ;

function generateJWT(params) {
  params.timestamp = Date.now();
  return jwt.sign(params, API_SECRET, { algorithm: 'HS256' });
}

function createCorporate() {
  const jwtToken = generateJWT({
    name: 'Test',
    country: 'India',
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Address',
  });

  axios
    .post(baseUrl + '/api/auth/corporates?api_key=' + API_KEY, null, {
      headers: {
        'x-payload': jwtToken,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('response', response);

      if (!response.status === 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log(response.data);
    })
    .catch((error) => console.error('Error:', error.message));
}

createCorporate();
