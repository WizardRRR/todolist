import React, { useState } from 'react'
import TodoItem from './TodoItem'
// Tareas en json 
import tareas from './../data/Tareas.json'

function TodoList() {
  const [tareasList, setTareas] = useState(tareas)

  // funcion para marcar como compleado una  tarea
  const changeStateTarea = (e) => {
    let id = parseInt(e.target.value);

    setTareas(tareasList.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    }));
  }

  // funcion para eliminar una tarea
  const handleDeleteTarea = (id) => {
    setTareas(tareasList.filter((tarea) => {
      return (
        tarea.id !== id
      )
    }))
  }

  // funcion marcar como completadas todas las tareas
  const changeCompletingTasks = () => {
    setTareas(tareasList.map(tarea => {
      return { ...tarea, completed: true };
    }))
  }

  // funcion marcar como no completadas todas las tareas
  const changeNotCompleted = () => {
    setTareas(tareasList.map(tarea => {
      return { ...tarea, completed: false };
    }))
  }

  // funcion para agregar tarea ( text )

  // funcion para editar tarea ( text , completed )

  return (
    <>
      <div>
        <div className='flex justify-between'>
          <h1 className='font-bold text-white text-2xl'>Lista de tareas</h1>
          <div className='flex gap-2'>
            <button
              className='p-2 bg-green-700 text-white font-bold rounded-md text-sm'
              onClick={changeCompletingTasks}
            >
              Completar todas las tareas
            </button>
            <button
              className='p-2 bg-red-700 text-white font-bold rounded-md text-sm'
              onClick={changeNotCompleted}
            >
              Marcar todas las tareas como no completadas
            </button>
          </div>
        </div>
        
        {/* Formulario de agregar tarea */}
        <div>

        </div>

        <div className='flex flex-col gap-2 mt-5'>

          {tareasList.length === 0 && (
            <p className='text-white'>No tienes tareas disponibles</p>
          )}

          {
            tareasList.map((tarea, index) => {

              return (
                <TodoItem
                  key={index}
                  tarea={tarea}
                  onChangeState={changeStateTarea}
                  onDelete={() => handleDeleteTarea(tarea.id)}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default TodoList;