import React from 'react';
import UIButton from '../components/UIButton';

import { clearSave } from '../utils/save';

const debug = true;

const Title = ({ setOnTitle }) => {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 top-[30%] flex flex-col gap-5 items-center'>
      <h1>Progress Idle</h1>
      <UIButton
        callbackFunction={() => {
          setOnTitle(false);
        }}
      >
        <h2>Play</h2>
      </UIButton>
      {debug && (
        <UIButton callbackFunction={async () => await clearSave(debug)}>
          <h3>Clear Save</h3>
        </UIButton>
      )}
    </div>
  );
};

export default Title;
