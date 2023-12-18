//task -> addtask -> tasklist -> task as a prop from the prop add a delete button to mark as complete it will be in list order also
import React from 'react'

const Task = ({task}) => { //pass a on colmplete as a prop to mark as complete
  return (
    <div>
        {task}
        <button></button>
    </div>
  )
}

export default Task