import React from 'react'
import { useState, useEffect } from 'react'


const Home = () => {
    const [tasks, setTask] = useState();



  return (
    <div>
        <h1>TODO</h1>
        <AddTask/>
        <TaskList/>
    </div>
  )
}

export default Home