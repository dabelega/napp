[![Build Status](https://travis-ci.org/dhaniboy09/napp.svg?branch=staging)](https://travis-ci.org/dhaniboy09/napp) [![Coverage Status](https://coveralls.io/repos/github/dhaniboy09/napp/badge.svg?branch=staging)](https://coveralls.io/github/dhaniboy09/napp?branch=staging) <a href="https://codeclimate.com/github/codeclimate/codeclimate"><img src="https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg" /></a>

# The Napp Journal - A News Application
https://nappnews.herokuapp.com/

The Napp Journal is a news application (built with ReactJS) that uses the "NEWS" API to display latest news from 70 news sources. These news Sources include CNN, BBC, Al Jazeera, and much more. The App provides a friendly user interface that allows users view major headlines at a glance, as they would on a news paper. Napp also provides a seamless search funtionality, which enables users to isolate headlines from their favorite news sources.

## Functionalities
* Google sign in - Users can sign in with their google accounts.
* Dynamic Home page, which shows the latest headlines by category from different sources.
* Sources - Users can view the full list of Napp's 70 news sources.
* Search - Users can search through the list of sources.
* Articles - Users can view articles from a news source by selecting that source.
* Article Filtering - Users can also filter articles by Top and by Latest.

## Limitations

* The app doesn't provide any database capabillites.
* The app currently allows sign ins from google accounts only.
* The app doesn't enable users save articles or sources to favorites.
* The app doesn't have an article scrapping feeature.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

To install Napp on your local machine you need to be running at least node v7.9.0. 

### Installing

From your Terminal, clone the repo into a local directory. Next, cd into that directory and simply run the following command. No other steps are required.

```
npm install
```
then run Napp on your local server like this:

```
http://localhost:3000/
```

## Running the tests

Napp Tests have been written using Mocha, Chai and Enzyme. To run tests, type the following command in your terminal:
```
npm run test
```

## Built With

* [ReactJS](http://www.dropwizard.io/1.0.2/docs/) 	- The Technology used
* [FLUX](http://www.dropwizard.io/1.0.2/docs/) 		- The architecture used
* [Babel](http://www.babeljs.io/docs/) 				- The Compiler Used
* [Webpack](https://webpack.github.io/docs/) 		- The Module Bundler used
* [Express](https://expressjs.com/) 				- The Server used
* [NPM](https://www.npmjs.org/) 					- Dependency Management
* [MOCHA](https://mochajs.org/) 					- The Testing Framework Used
* [CHAI](https://chaijs.com/) 						- The Assertion Library Used
* [ENZYME](https://github.com/airbnb/enzyme) 		- A ReactJS Test Utility
* [AXIOS](https://www.npmjs.com/package/axios) 		- The HTTP Cient Library used.
* [NEWSAPI](https://newsapi.org/) 					- The API used.

## Contributing

Kindly tweet at @thenappjournal for details on code of conduct, and the process for submitting pull requests.

## Authors

* **Dhani A.** 

## License

This project is licensed under the MIT License

## Acknowledgments

* Andela Cohort 26
* Ugonna Thelma
* Redd
* Mark



