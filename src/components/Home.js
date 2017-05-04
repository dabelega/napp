import React from 'react';
import '../../sass/styles.scss';
import App from 'components/app';
import Header from 'components/Header';
import Headline from 'components/Headline';
import Featured from 'components/Featured';


export default class Home extends React.Component {
	render() {
		return (
     <div>
        <App />
        <Header />
        <Headline />
        <Featured />
      </div>
      );
	}
}
