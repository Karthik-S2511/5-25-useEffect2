import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(100)

  useEffect(() => {
    const id = setInterval(() => {
      setTimer((timer) => timer - 1)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return <div>Count Down : {timer}</div>
}

export default Timer
