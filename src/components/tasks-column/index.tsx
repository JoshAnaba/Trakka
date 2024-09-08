import TaskCard from '../task-card'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import type { Column } from 'types'
const TasksColumn = ({column}: {column: Column}) => {

  type ColumnName ='to-do' | 'in-progress' | 'completed';
  
  const indicator: Record<ColumnName, string> = {
    'to-do': 'rgb(112 189 244)',
    'in-progress': 'rgb(248 181 83)',
    'completed': '#04AA6D'
  };

  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );

  const ColumnType = ({name}: {name: string}) => (
    <div className='flex h-9 py-[3px] my-2 gap-2 items-center'>
      <div className="indicator w-[6px] h-full rounded-md" style={{backgroundColor: indicator?.[column?.name as ColumnName]}}/>
      <h3 className='font-medium text-xl capitalize'>{name?.replace(/-/g, ' ')}</h3>
      <Badge className='bg-[#eaeaea] text-[#7c7d7ecc]'>{column?.tasks?.length}</Badge>
      <div className='ml-auto flex gap-[5px]'>
        <button className='bg-transparent p-[3px]'>
          <PlusIcon />
        </button>
        <button className='bg-transparent p-[3px]'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </button>
      </div>
    </div>
  )

  const AddNew = () => (
    <button className='flex items-center gap-2 py-2 px-0 bg-[#eaeaea] rounded-md mt-auto'>
      <PlusIcon />
      <span>Add New</span>
    </button>
  );
  return (
    <Card className='p-[10px] bg-[#f7f7f733] shadow-lg rounded-2xl w-[330px] flex flex-col gap-[10px]'>
      <ColumnType name={column.name} />
      {column.tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
      <AddNew />
    </Card>
  )
}

export default TasksColumn
