import axios from 'axios';
import _ from 'lodash';


export function getSources(callback){
	const url = "https://newsapi.org/v1/sources?language=en";
	axios.get(url).then((response) => callback (response.data.sources));
}

export function showArticles(sourceName,callback){
	const API_KEY = '213327409d384371851777e7c7f78dfe';
	const URL = `https://newsapi.org/v1/articles?source=${sourceName}&sortBy=top&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

