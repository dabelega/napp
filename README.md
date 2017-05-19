[![Build Status](https://travis-ci.org/dhaniboy09/napp.svg?branch=staging)](https://travis-ci.org/dhaniboy09/napp) [![Coverage Status](https://coveralls.io/repos/github/dhaniboy09/napp/badge.svg?branch=staging)](https://coveralls.io/github/dhaniboy09/napp?branch=staging) <a href="https://codeclimate.com/github/codeclimate/codeclimate"><img src="https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg" /></a>

# The Napp Journal - A News Application
https://nappnews.herokuapp.com/

The Napp Journal is a news application that consumes the "NEWSAPI" API to display latest news from over 70 sources. Sources include CNN, BBC, Al Jazeera, and much more.

## Functionalities
* Google sign in - Users can sign in with their google accounts
* Dynamic Home page, which shows all the latest news by category from different sources.
* Sources - Users can view the full list of news sources provided by NEWSAPI
* Search - Users can search through list of sources
* Articles - Users can view articles from a news source by selecting that source.
  - Users can also sort through articles by Top and by latest

## Limitations

* The app doesn't provide any database capabillites.
* The app currently allows sign ins from google accounts only.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install Napp on your local machine you need to be running at least node v7.9.0. Simply type into your terminal

### Installing

To install Napp simply run the following command in your terminal. No other steps are required.

```
npm install
```
then run Napp on your local server like this:

```
http://localhost:3000/
```

## Running the tests

Napp Tests have been written using Mocha, Chai and Enzyme. To run automated tests, type the following command in your terminal:
```
npm run test
```

## Built With

* [ReactJS](http://www.dropwizard.io/1.0.2/docs/) - The Technology used
* [FLUX](http://www.dropwizard.io/1.0.2/docs/) - The architecture used
* [Babel](http://www.babeljs.io/docs/) - The Compiler Used
* [Webpack](https://webpack.github.io/docs/) - The Module Bundler used
* [Express](https://expressjs.com/) - The Server used
* [NPM](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Tweet at @thenappjournal for details on code of conduct, and the process for submitting pull requests.

## Authors

* **Dhani A.** 

## License

This project is licensed under the MIT License

## Acknowledgments

* Cohort 26
* Ugonna Thelma
* Redd



