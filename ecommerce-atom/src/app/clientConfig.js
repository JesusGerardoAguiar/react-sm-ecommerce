import axios from 'axios';

export default axios.create({
	baseURL: 'https://lograf-ecommerce-api.herokuapp.com/',
	timeout: 50000
});