import './assets/main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './legacy/Demo';
import Game from './Game';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Game />
  </StrictMode>,
);
