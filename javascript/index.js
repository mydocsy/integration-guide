const jwt = require('jsonwebtoken');

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

  fetch(baseUrl + '/api/auth/corporates?api_key=' + API_KEY, {
    method: 'POST',
    headers: {
      'x-payload': jwtToken,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      console.log('response', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      return data;
    })
    .catch((error) => console.error('Error:', error.message));
}

createCorporate();
