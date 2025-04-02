import { useEffect, useState } from 'react'

export default function ClockBox({ display }) {
  const [time, setTime] = useState(new Date())
  const [timeFormate, setTimeformate] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [display])

  const hr = time.getHours()
  const hour = hr > 12 ? hr - 12 : hr
  const minute = time.getMinutes()
  const seconds = time.getSeconds()
  const period = hr < 12 ? 'AM' : 'PM'

  const twodigit = (number) => {
    return number == 0 ? '00' : number < 10 ? '0' + number : number
  }
  return (
    <>
      <div
        id="clockBox"
        className={`flex h-[80vh] m-3  rounded-md place-content-center place-items-center duration-200 ease-in-out ${display ? `bg-neutral-800 shadow-[4px_4px_10px_rgba(0,0,0,0.75)]` : ''}`}
        onDoubleClick={() => setTimeformate(!timeFormate)}
      >
        <div
          className={`${display ? 'left-1/10 top-[10%] pt-3 text-white text-[10px] min-[500px]:text-[20px] absolute' : 'hidden'}`}
        >
          {period}
        </div>
        <div
          id="dragger"
          className={` w-7 h-2 rounded-md  absolute left-[45%] bottom-[20%] ${display ? 'bg-gray-400' : ''}`}
          style={{ WebkitAppRegion: 'drag' }}
        ></div>
        <div className="bg-white m-1 w-[20%] h-[60%] text-center font-[700]  place-content-center place-items-center text-[27px] min-[500px]:text-[45px] min-[600px]:text-[65px] rounded-md  shadow-[4px_4px_5px_rgba(0,0,0,0.75)] text-gray-900 bg-linear-[180deg,rgba(0,0,0,0.18)_50%,white_55%]">
          {twodigit(hour)}
        </div>
        <div className="text-white text-[20px]">:</div>
        <div className="bg-white m-1 w-[20%] h-[60%] text-center font-[700] place-content-center place-items-center text-[27px] min-[500px]:text-[45px] min-[600px]:text-[65px] rounded-md  shadow-[4px_4px_5px_rgba(0,0,0,0.75)] text-gray-900 bg-linear-[180deg,rgba(0,0,0,0.18)_50%,white_55%]">
          {twodigit(minute)}
        </div>
        <div className={`${timeFormate ? 'hidden' : 'text-white text-[20px]'}`}>:</div>
        <div
          className={`${timeFormate ? 'hidden' : 'bg-white m-1 w-[20%] h-[60%] text-center font-[700] place-content-center place-items-center text-[27px] min-[600px]:text-[65px] min-[500px]:text-[45px] rounded-md  shadow-[4px_4px_5px_rgba(0,0,0,0.75)] text-gray-900 bg-linear-[180deg,rgba(0,0,0,0.18)_50%,white_55%]'}`}
        >
          {twodigit(seconds)}
        </div>
      </div>
    </>
  )
}
