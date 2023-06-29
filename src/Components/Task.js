import React from 'react'
import { FaTimes } from 'react-icons/fa'

function Task({task, toggleReminder}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={() => {toggleReminder(task.id)}}>
      <h3>
        {task.text} 
        <FaTimes style={{ color:'red', cursor:'pointer' }} />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
