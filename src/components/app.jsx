import React from 'react';
import BodyStyle from 'body-style';
import '../../public/sass/styles.scss'; 

/**
 * Stateless component
 * Sets Body style
 *
 * @return {void}
 */
const App = () => (
  <div>
    <BodyStyle className="wrapper" />
  </div>
);

export default App;