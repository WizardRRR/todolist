import React from 'react'
import { HiTrash } from 'react-icons/hi'
import Button from './Button'
function TodoItem({ tarea, onChangeState, onDelete }) {

  let tareaD = {
    id: tarea.id,
    text: tarea.text,
    state: tarea.state,
    completed: tarea.completed
  }

  return (
    <>
      <div className='flex flex-col bg-slate-900 rounded-xl p-4 shadow-lg shadow-slate-900'>
        <div className='flex gap-1 text-white bg-blue-950 w-fit rounded-md px-1.5 mb-1'>
          <p className='font-medium'>ID: </p>
          <p>{tareaD.id}</p>
        </div>

        <div className='flex gap-1 text-white'>
          <p className='font-medium'>Tarea: </p>
          <p className='text-sm place-self-center'>{tareaD.text}</p>
        </div>

        <div className='flex gap-1 justify-between items-end mt-2'>
          <div className='space-x-2'>
            <label
              htmlFor={`completed${tareaD.id}`}
              className={`font-medium ${tarea.completed ? 'text-green-500' : 'text-red-500'}`}>
              {tareaD.completed ? 'Completado' : 'No Completado'}:</label>
            <input
              type="checkbox"
              checked={tareaD.completed}
              onChange={onChangeState}
              value={tareaD.id}
              name=""
              id={`completed${tareaD.id}`}
            />
          </div>
          <Button
            className="bg-red-400 text-white self-end shadow-md"
            icon={<HiTrash className="text-[18px]" />}
            onClick={onDelete}
          />
        </div>
      </div>
    </>
  )
}

export default TodoItem