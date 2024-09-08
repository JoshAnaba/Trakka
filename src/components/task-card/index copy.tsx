import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import type { Task } from "types"

const TaskCard = ({task}: {task: Task}) => {
  const [isCardActive, setIsCardActive] = useState(false);

  const Backdrop = () => (
    <div className="fixed inset-0 bg-black/05 transition-opacity duration-300 backdrop-blur-sm z-10" onClick={()=>setIsCardActive(false)} />
  )
  return (
    <>
   {isCardActive && <Backdrop />}
   <Card 
        className={`rounded-[18px] cursor-pointer overflow-hidden duration-300 ${isCardActive ? 'z-20 fixed inset-0 m-auto' : 'cursor-grab active:cursor-grabbing'}`} 
        draggable={!isCardActive}
        style={isCardActive ? { maxWidth: '35%', maxHeight: '74%' } : {}}
        onClick={() => setIsCardActive(true)}
      >
      <CardHeader className="px-0 pt-0">
        <CardTitle className="border-b border-[rgb(241 241 241)] text-[#7c7d7ecc] text-start h-12 flex items-center px-4 text-sm">Client: {' '}<span className="text-[#7e808180]">Justice OK</span></CardTitle>
        <CardDescription className="font-medium text-xl text-[rgb(40 41 44)] text-start px-4">Card Description</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7c7d7ecc" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
        <Badge variant={'default'}>Badge</Badge>

      </CardContent>
      <CardFooter className="text-[#7c7d7ecc] flex font-medium text-sm gap-4 px-4">

        <button className="bg-transparent p-[3px] todos flex gap-[3px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7c7d7ecc" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
          </svg>
          <span>4</span>
        </button>

        <button className="bg-transparent p-[3px] comments flex gap-[3px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7c7d7ecc" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
          <span>2</span>
        </button>

        <button className="bg-transparent p-[3px] days-ago flex gap-[3px] ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#7c7d7ecc" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>4d</span>
        </button>

      </CardFooter>
    </Card>
    </>

  )
}

export default TaskCard
