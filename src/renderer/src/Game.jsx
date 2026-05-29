import { useState, useEffect, Context } from 'react';
import Title from './pages/Title.jsx';
import UI from './components/UI.jsx';

const debug = true;

const Game = () => {
  // Access save on loadup
  const [save, setSave] = useState({});
  useEffect(() => {
    const loadSave = async () => {
      const save = await window.store.get('save');
      if (save) {
        setSave(save);
      }
    };
    loadSave();
  }, []);

  useEffect(() => {
    if (debug) {
      console.log('save was updated!');
      console.log(save);
    }
  }, [save]);

  const [onTitle, setOnTitle] = useState(true);

  return <div>{onTitle ? <Title setOnTitle={setOnTitle} /> : <UI />}</div>;
};

export default Game;
