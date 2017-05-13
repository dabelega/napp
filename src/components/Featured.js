import React from 'react';
import '../../sass/styles.scss';

export default class Featured extends React.Component {
	render() {
		
		return (
     <div className="center-div">
     	<table style={ {width:'100%'} } >
     		<thead>
			  <tr >
			    <th style={{width:'22%'}}></th>
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			   
			  </tr>
			 </thead> 

			 <tbody >
				  <tr >
				    <td><img src="../../images/logos/bbc.png" /></td>
				    <td><img src="../../images/logos/techrunch.png" /></td>
				     <td><img src="../../images/logos/espn-main.png" /> </td>
				    
				    <td><img src="../../images/logos/nyt.png" /></td>
				     <td><img src="../../images/logos/espn.png" /></td>
				    </tr> 
			   </tbody>

			 <thead>
			  <tr >
			    <th style={{width:'22%'}}></th>
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			   
			  </tr>
			 </thead> 
			 
			 <tbody >
				  <tr >
				    <td> <img src="../../images/logos/techradar.png" /> </td>
				    <td><img src="../../images/logos/al-jazeera.png" /> </td>
				     <td><img src="../../images/logos/bloomberg.png" /></td>
				    <td><img src="../../images/logos/next-web.png" /> </td>
				       <td><img src="../../images/logos/das.png" /> </td>
				    </tr> 
			   </tbody>

			   <thead>
			  <tr >
			    <th style={{width:'22%'}}></th>
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			    <th style={{width:'22%'}}></th> 
			   
			  </tr>
			 </thead> 

			 <tbody >
				  <tr >
				    <td> <img src="../../images/logos/bbc-sport.png" /> </td>
				    <td><img src="../../images/logos/reuters.png" /> </td>
				      <td><img src="../../images/logos/usa-today.png" /> </td>
				    <td><img src="../../images/logos/cnbc.png" /> </td>
				       <td><img src="../../images/logos/ign.png" /> </td>
				    </tr> 
			   </tbody>


	    </table>
      </div>

      );
	}
}
