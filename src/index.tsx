import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Batata () {
  const [canViewApp, setCanViewApp] = useState(true)

  return <>
    {
      canViewApp &&
      <App/>
    }
    <button onClick={() => 
          setCanViewApp(!canViewApp)
        }>
          toogle
        </button>
  </>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Batata />
  </React.StrictMode>
);
