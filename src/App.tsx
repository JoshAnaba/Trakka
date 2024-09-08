
import './App.css'
import TasksBoard from './components/tasks-board'
import board from '../data/board.json'

function App() {

  return (
    <>
      <TasksBoard board={board} />
    </>
  )
}

export default App
