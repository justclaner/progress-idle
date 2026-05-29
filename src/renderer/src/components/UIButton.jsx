import React from 'react';

const UIButton = ({ callbackFunction, children }) => {
  return (
    <button
      className='border-2 border-black rounded-xl px-2 py-1 w-fit hover:bg-neutral-400 active:bg-neutral-300 duration-75'
      onClick={callbackFunction}
    >
      {children}
    </button>
  );
};

export default UIButton;
