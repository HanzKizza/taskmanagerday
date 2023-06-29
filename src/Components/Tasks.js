import React from 'react'
import Task from './Task'

function Tasks({tasks, toggleReminder, deleteTask}) {
  return (
    <div className='tasks'>
      {
        tasks.map((task) => (
            <Task key={task.id} task={task} toggleReminder={toggleReminder} deleteTask={deleteTask}/>
        ))
      }
    </div>
  )
}

export default Tasks
