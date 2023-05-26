import React, { useState } from 'react'
import TodoItem from './TodoItem'
// Tareas en json 
import tareas from './../data/Tareas.json'
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineAddCircle } from 'react-icons/md'

import Button from './Button'

function TodoList() {
  const [tareasList, setTareas] = useState(tareas)
  const [showForm, setShowForm] = useState(false);
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
  const [textTarea, setTextTarea] = useState("");
  const addNewTask = () => {
    if (textTarea.trim() !== "") {
      const newTask = {
        id: tareasList.length > 0 ? tareasList[tareasList.length - 1].id + 1 : 1,
        text: textTarea,
        completed: false,
      };

      setTareas([...tareasList, newTask]);
      setTextTarea("");
      setShowForm(false);
    } else {
      alert('añade texto mongolito')
    }
  }
  // funcion para editar tarea ( text , completed )

  return (
    <>
      <h1 className='font-extrabold text-white text-5xl text-center'>Todo List App</h1>
      <div className='flex flex-wrap justify-center items-center mt-10 gap-4'>
        <Button
          className='bg-green-600 text-white'
          icon={<MdOutlineAddCircle className="text-[20px]" />}
          title='Añadir nueva tarea'
          onClick={() => setShowForm(true)}
        />
        <Button
          className='bg-yellow-500 text-white'
          icon={<AiFillCheckCircle className="text-[20px]" />}
          title='Completar tareas'
          onClick={changeCompletingTasks}
        />
        <Button
          className='bg-red-600 text-white'
          icon={<AiOutlineClose className="text-[20px]" />}
          title='No completar todas'
          onClick={changeNotCompleted}
        />

      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5 max-w-[1000px] lg:mx-auto'>
        {tareasList.length === 0 && (
          <p className='text-white text-center'>No tienes tareas disponibles</p>
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
        {
          showForm && (
            <>
              <div
                className='absolute flex flex-col items-center inset-0 h-screen w-screen bg-black bg-opacity-50'>
                <div
                  className='flex flex-col gap-3 bg-slate-900 shadow-xl shadow-gray-950 rounded-lg p-4 w-fit mt-40'>
                  <label
                    className='text-white'
                    htmlFor="tarea">Agregue una tarea nueva:</label>
                  <textarea
                    name=""
                    id="tarea"
                    rows="5"
                    placeholder='Escriba aqui su tarea...'
                    className='rounded-md p-1 w-[250px]'
                    onChange={(e) => setTextTarea(e.target.value)}
                    value={textTarea}
                  ></textarea>
                  <div className='flex justify-around'>
                    <Button
                      title="Agregar Tarea"
                      className='bg-blue-600 text-white shadow-md'
                      onClick={addNewTask}
                    />
                    <Button
                      title="Ir atras"
                      className='bg-red-600 text-white shadow-md'
                      onClick={() => {
                        setShowForm(false)
                        setTextTarea('')
                      }}
                    />
                  </div>
                </div>

              </div>
            </>
          )
        }
      </div>
    </>
  )
}

export default TodoList;