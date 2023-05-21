import React from 'react'

function TodoItem({ tarea, onChangeState, onDelete }) {
  return (
    <>
      <div className='flex flex-col bg-slate-300 rounded-xl p-2'>

        <div className='flex gap-1'>
          <p className='font-medium'>Tarea numero: </p>
          <p>{tarea.id}</p>
        </div>

        <div className='flex gap-1'>
          <p className='font-medium'>Nombre de la tarea: </p>
          <p>{tarea.text}</p>
        </div>

        <div className='flex gap-1'>
          <p className={`font-medium ${tarea.completed ? 'text-green-500 bg-black' : 'text-red-500 bg-black'}`}>Estado:</p>
          <input
            type="checkbox"
            checked={tarea.completed}
            onChange={onChangeState}
            value={tarea.id}
            name=""
            id=""
          />
        </div>
        <button
          onClick={onDelete}
          className='bg-red-500 p-2 text-white w-fit my-2 rounded-md'
        >Elimar</button>
      </div>
    </>
  )
}

export default TodoItem