export default function Topbar({display}) {
  function handleClose() {
    window.electron.ipcRenderer.send('close-window')
  }
  function handleMini() {
    window.electron.ipcRenderer.send('minimize-window')
  }

  return (
    <>
      <div
        className={`absolute m-3 -top-2 -right-2 flex content-center place-items-center gap-1 ${display ? '' : 'hidden'}`}
        id="controlButton"
      >
        <button
          className="w-3 h-3 hover:bg-gray-400 hover:w-5 hover:h-5 cursor-pointer rounded-full bg-gray-400/10 duration-200 ease-in-out"
          id="minimize"
          onClick={handleMini}
        />
        <button
          className="w-3 h-3 hover:bg-red-600 hover:w-5 hover:h-5 rounded-full m-1 cursor-pointer bg-red-600/20 duration-200 ease-in-out"
          id="close"
          onClick={handleClose}
        />
      </div>
    </>
  )
}
