import React from 'react';
import '../../sass/styles.scss';

export default class Featured extends React.Component {
	render() {
		var width: '100%';
		var colwidth: '25%'; 
		return (
     <div className="center-div">
     	<table style={ {width:width} } >
     		<thead>
			  <tr >
			    <th style={{width:'30%'}}></th>
			    <th style={{width:'30%'}}></th> 
			    <th style={{width:'30%'}}></th> 
			    <th style={{width:'30%'}}></th> 
			  </tr>
			 </thead> 

			 <tbody >
				  <tr >
				    <td> <img src="../../images/fox.png" /> </td>
				    <td><img src="../../images/cnn.png" /> </td>
				    <td><img src="../../images/techcrunch.png" /></td>
				    <td><img src="../../images/al-jazeera.png" /></td>
				    </tr> 
			   </tbody>

			 <thead>
			  <tr >
			    <th style={{width:'30%'}}></th>
			    <th style={{width:'30%'}}></th> 
			    <th style={{width:'30%'}}></th> 
			    <th style={{width:'30%'}}></th> 
			  </tr>
			 </thead> 
			 
			 <tbody >
				  <tr >
				    <td> <img src="../../images/bbc.png" /> </td>
				    <td><img src="../../images/cnn.png" /> </td>
				    <td><img src="../../images/cbs.png" /></td>
				    <td><img src="../../images/msnbc.png" /></td>
				    </tr> 
			   </tbody>


	    </table>
      </div>

      );
	}
}
