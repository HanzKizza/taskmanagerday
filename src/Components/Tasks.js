import React from 'react'
import Task from './Task'

function Tasks({tasks, toggleReminder}) {
  return (
    <div className='tasks'>
      {
        tasks.map((task) => (
            <Task key={task.id} task={task} toggleReminder={toggleReminder}/>
        ))
      }
    </div>
  )
}

export default Tasks
