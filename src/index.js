import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import background from './assets/pictures/hoodStock.png';

ReactDOM.render(
  <React.StrictMode>
    <div style={{ 
      backgroundImage: `url(${background})`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
