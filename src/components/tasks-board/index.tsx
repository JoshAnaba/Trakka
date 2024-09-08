import TasksColumn from '../tasks-column'

import type { Board } from '../../../types'

const TasksBoard = ({board}: {board: Board}) => {
  return (
    <div className='flex gap-4'>
      {board.columns.map((column) => (
        <TasksColumn key={column.id} column={column} />
      ))}
    </div>
  )
}

export default TasksBoard
