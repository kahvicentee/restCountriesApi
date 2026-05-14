import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Navigation from './routes';
import { useState, useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [tema, setTema] = useState(false)

  useEffect(() => {
    if (tema) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [tema])

  return (
    <Navigation tema={tema} setTema={setTema} />
  )
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
