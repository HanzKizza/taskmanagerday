import React from 'react'
import Button from './Button'

function Task({task}) {
  return (
    <div className={`task ${task.reminder ? 'reminder': ''}`}>
      <Button />
      <h3>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
