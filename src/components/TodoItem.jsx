import React, { useState } from 'react'
import Button from './Button'
import { HiTrash } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'
import FormTask from './FormTask'

function TodoItem({ tarea, onChangeState, onDelete, tareasList, setTareasList }) {

  let tareaD = {
    id: tarea.id,
    text: tarea.text,
    state: tarea.state,
    completed: tarea.completed
  }

  const [showFormEdit, setShowFormEdit] = useState(false)
  const [textTarea, setTextTarea] = useState(tareaD.text);
  // funcion de editar tarea 
  const editTask = (id) => {
    if (textTarea !== '') {
      setTareasList(tareasList.map((tarea) => {
        if (tarea.id === id) {
          tarea.text = textTarea;
        }
        return tarea;
      }))
      setShowFormEdit(false);
    } else {
      alert('Debe ingresar un texto especial');
    }
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

        <div className='flex gap-1 justify-between items-center mt-auto pt-2'>
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
          <div className='flex gap-2 '>
            <Button
              className="bg-blue-400 text-white shadow-md"
              icon={<AiFillEdit className="text-[18px]" />}
              onClick={() => setShowFormEdit(true)}
            />
            <Button
              className="bg-red-400 text-white  shadow-md"
              icon={<HiTrash className="text-[18px]" />}
              onClick={onDelete}
            />
          </div>
        </div>
      </div>
      {
        showFormEdit && (
          <FormTask
            type="edit"
            showForm={setShowFormEdit}
            setTextTarea={setTextTarea}
            textTarea={textTarea}
            handle={() => editTask(tareaD.id)}
            setTareaTaskEdit={() => setTextTarea(tareaD.text)}
          />
        )
      }
    </>
  )
}

export default TodoItem