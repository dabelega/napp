import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE = 'https://newsapi.org/v1/articles?source';


export function getSources(callback){
	const url = "https://newsapi.org/v1/sources?language=en";
	return axios.get(url).then((response) => callback (response.data.sources))
}

export function displayArticles(sourceName,sortType,callback){
	const URL = `${BASE}=${sourceName}&sortBy=${sortType}&apiKey=${API_KEY}`;
	return axios.get(URL).then((response) => callback(response.data.articles))
	.catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
       return callback(error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
       return callback(error.request);
    } 
  });	
}


