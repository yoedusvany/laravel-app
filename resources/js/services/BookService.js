import axios from 'axios';

export default class BookService {

    getProducts() {
        return axios.get('http://localhost:8000/api/books').then(res => res.data.data);
    }
}