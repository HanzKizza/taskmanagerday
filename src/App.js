import { useState } from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: "Meeting with Elon",
          day: "Feb 10 2030",
          reminder: false
      },
      {
          id: 2,
          text: "Aeragon Launch",
          day: "May/16/2025",
          reminder: true
      },
      {
          id: 3,
          text: "Date with Rita",
          day: "June/16/2025",
          reminder: true
      },
  ])

  const  test = () => {
    console.log("Button clicked")
   }

   const  toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
   }

  return (
    <div className='container'>
      <Header title="Task Manager"/>
      <Tasks tasks={tasks} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;