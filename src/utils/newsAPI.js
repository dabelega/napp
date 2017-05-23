import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE = 'https://newsapi.org/v1/articles?source';
const CATEGORY = ['Business', 'Entertainment', 'General'];

export function getSources(callback){
	const url = "https://newsapi.org/v1/sources?language=en";
	axios.get(url).then((response) => callback (response.data.sources));

}

export function displayArticles(sourceName,sortType,callback){
	const URL = `${BASE}=${sourceName}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

export function displayGeneral(callback){

	let source = 'the-next-web';
	let sortType = 'latest';
	const URL = `${BASE}=${source}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

export function displayFeatured(callback){
	let source = 'al-jazeera-english';
	let sortType = 'top';
	const URL = `${BASE}=${source}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

export function displayBusiness(callback){
	
	let source = 'bloomberg';
	let sortType = 'top';
	const URL = `${BASE}=${source}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

export function displayTech(callback){
	let source = 'techcrunch';
	let sortType = 'top';
	const URL = `${BASE}=${source}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

export function displayEntertainment(callback){
	let source = 'entertainment-weekly';
	let sortType = 'top';
	const URL = `${BASE}=${source}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}

export function displaySports(callback){
	let source = 'fox-sports';
	let sortType = 'top';
	const URL = `${BASE}=${source}&sortBy=${sortType}&apiKey=${API_KEY}`;
	axios.get(URL).then((response) => callback (response.data.articles));
}


