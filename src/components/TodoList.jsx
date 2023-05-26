import React, { useState } from 'react'
// componentes
import TodoItem from './TodoItem'
import Button from './Button'
// Data de tareas en json
import tareas from './../data/Tareas.json'
// iconos
import { AiFillCheckCircle, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineAddCircle } from 'react-icons/md'
import FormTask from './FormTask'

function TodoList() {
  // Array de las tareas
  const [tareasList, setTareasList] = useState(tareas)

  // funcion para marcar como compleado una  tarea
  const changeStateTarea = (e) => {
    let id = parseInt(e.target.value);

    setTareasList(tareasList.map(tarea => {
      if (tarea.id === id) {
        return { ...tarea, completed: !tarea.completed };
      }
      return tarea;
    }));
  }

  // funcion para eliminar una tarea
  const handleDeleteTarea = (id) => {
    setTareasList(tareasList.filter((tarea) => {
      return (
        tarea.id !== id
      )
    }))
  }

  // funcion marcar como completadas todas las tareas
  const changeCompletingTasks = () => {
    setTareasList(tareasList.map(tarea => {
      return { ...tarea, completed: true };
    }))
  }

  // funcion marcar como no completadas todas las tareas
  const changeNotCompleted = () => {
    setTareasList(tareasList.map(tarea => {
      return { ...tarea, completed: false };
    }))
  }


  const [showForm, setShowForm] = useState(false); // estado para mostrar u ocultar el formulario
  const [textTarea, setTextTarea] = useState(""); // estado para controlar el texto del formulario

  // funcion para agregar tarea
  const addNewTask = () => {
    if (textTarea.trim() !== "") {
      let lastId = 0;
      if (tareasList.length > 0) {
        // Buscar el último valor de id en la lista
        lastId = tareasList[tareasList.length - 1].id;
      }

      const newTask = {
        id: lastId + 1,
        text: textTarea,
        completed: false,
      };

      setTareasList([...tareasList, newTask]);
      setTextTarea("");
      setShowForm(false);
    } else {
      alert('añade texto mongolito')
    }
  }

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

                tareasList={tareasList}
                setTareasList={setTareasList}
              />
            )
          })
        }

        {showForm && (
          <FormTask
            type="create"
            handle={addNewTask}
            showForm={setShowForm}
            setTextTarea={setTextTarea}
            textTarea={textTarea}
          />
        )}
      </div>
    </>
  )
}

export default TodoList;