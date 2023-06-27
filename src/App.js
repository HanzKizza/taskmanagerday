import Greetings from './Components/Greetings'
function App() {
  const tasks = [
    {
      id: 1,
      text: "Meeting with elon",
      day: "16th Aug",
      reminder: true
    },
    {
      id: 2,
      text: "Lunch with CMX",
      day: "15th May",
      reminder: false
    },
    {
      id: 3,
      text: "Pick up son from school",
      day: "everyday",
      reminder: true
    }
  ]
  return (
    <div>
      {
        tasks.map((task) => (<h1>{task.text}</h1>))
      }
    </div>
  );
}

export default App;