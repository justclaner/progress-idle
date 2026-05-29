import { useState, useEffect } from 'react';
import Versions from './Versions';

function App() {
  //const [gold, setGold] = useState(0)

  // useEffect(() => {
  // 	const loadSave = async () => {
  // 		const save = await window.store.get('save')  // await!
  // 		console.log('Loaded save:', save)
  // 		if (save) setGold(save.gold ?? 0)
  // 	}
  // 	loadSave()
  // }, [])

  const ipcHandle = () => window.electron.ipcRenderer.send('ping');

  // const handleAddGold = async () => {
  // 	const newGold = gold + 1
  // 	setGold(newGold)
  // 	await window.store.set('save', { gold: newGold })  // autosave
  // }
  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Send IPC
          </a>
        </div>
      </div>
      {/* <div className="flex flex-col items-center p-4 bg-gray-900 text-white">
				<p className="text-2xl font-bold">Gold: 1234</p>
				<button className="mt-2 px-4 py-2 bg-yellow-500 rounded hover:bg-yellow-400">
					+1 Gold
				</button>
			</div> */}
      <Versions></Versions>
    </>
  );
}

export default App;
