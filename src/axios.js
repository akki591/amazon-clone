import axios from "axios";

// console.log('baseurl');
const instance = axios.create({
  
  baseURL: 'http://localhost:5001/clone-b2eca/us-central1/api'
});

export default instance;


