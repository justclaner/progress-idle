import { useState, useEffect, Context } from 'react';

const debug = true;

const Game = () => {
  const [save, setSave] = useState({});

  // Access save on loadup
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

  return <div>Game</div>;
};

export default Game;
