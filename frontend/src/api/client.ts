import axios from 'axios';

const client = axios.create({
  baseURL: '/api/rsvp',
});

export default client;