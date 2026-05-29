import { useState, useEffect, Context } from 'react';
import Title from './pages/Title.jsx';
import UI from './components/UI.jsx';

import { getSave } from './utils/save.js';

const debug = true;

const Game = () => {
  // Access save on loadup
  const [save, setSave] = useState({});
  useEffect(() => {
    const loadSave = async () => {
      const save = await getSave(debug);
      if (save) {
        setSave(save);
      }
    };
    loadSave();
  }, []);

  const [onTitle, setOnTitle] = useState(true);

  return <div>{onTitle ? <Title setOnTitle={setOnTitle} /> : <UI />}</div>;
};

export default Game;
