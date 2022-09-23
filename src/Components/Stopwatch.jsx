import React, { useState, useRef, useEffect } from 'react'

const Stopwatch = () => {
  const timerId = useRef(null)
  const [watch, setWatch] = useState(0)

  const start = () => {
    if (!timerId.current) {
      let id = setInterval(() => {
        setWatch((prev) => prev + 1)
      }, 1000)
      timerId.current = id
    }
  }

  const pause = () => {
    clearInterval(timerId.current)
    timerId.current = null
  }

  const reset = () => {
    clearInterval(timerId.current)
    setWatch(0)
    timerId.current = null
  }

  useEffect(() => {
    return reset
  }, [])

  return (
    <div>
      <h2>Stopwatch</h2>
      <h1>{watch}</h1>
      <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch
