import React from 'react';

const Title = ({ setOnTitle }) => {
  return (
    <div className='absolute left-1/2 -translate-x-1/2 top-[30%] flex flex-col gap-5 items-center'>
      <h1>Progress Idle</h1>
      <button
        className='border-2 border-black rounded-xl px-2 py-1 w-fit hover:bg-neutral-400 active:bg-neutral-300 duration-75'
        onClick={() => {
          setOnTitle(false);
        }}
      >
        <h2>Play</h2>
      </button>
    </div>
  );
};

export default Title;
