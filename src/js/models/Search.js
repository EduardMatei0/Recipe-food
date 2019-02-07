
import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            if (res.data.error === 'limit') {
				alert('API limit reached! (: ( ');
				return;
			} else {
				console.log(res.data);
				//add res to this.result props
				this.result = res.data.recipes;
			}
        } catch (error) {
            alert(error);
        }
    }
}

