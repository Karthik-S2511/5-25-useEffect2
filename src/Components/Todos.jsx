import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [page, setPage] = useState(1) // to update the page no's from 1
  const [totalCount, setTotalCount] = useState(0) // to terminate the page no
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    const getTodo = async () => {
      const res = await axios.get(
        `http://localhost:8080/todos?_page=${page}&_limit=${limit}`
      )
      // console.log(res)
      setTodos(res.data)
      setTotalCount(res.headers['x-total-count'])
    }
    getTodo()
    // fetch(`http://localhost:8080/todos`)
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   })
  }, [page, limit])

  return (
    <div className='App'>
      {todos.map((ele) => (
        <div key={ele.id}>
          {ele.id} : {ele.value}
        </div>
      ))}
      <button
        disabled={page <= 1}
        onClick={() => {
          setPage(page - 1)
        }}
      >
        Previous
      </button>{' '}
      <button
        disabled={totalCount < page * 5}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      <select
        onChange={(e) => {
          setLimit(e.target.value)
        }}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
    </div>
  )
}

export default Todos
