import React from 'react'
import Button from './Button'
const FormTask = ({ textTarea, setTextTarea, handle, showForm, type, setTareaTaskEdit }) => {
  return (
    <>
      <div
        className='absolute flex flex-col items-center inset-0 h-screen w-screen bg-black bg-opacity-50'>
        <div
          className='flex flex-col gap-3 bg-slate-900 shadow-xl shadow-gray-950 rounded-lg p-4 w-fit mt-40'>
          <label
            className='text-white'
            htmlFor="tarea">Agregue una tarea nueva:</label>
          <textarea
            id="tarea"
            rows="5"
            placeholder='Escriba aqui su tarea...'
            className='rounded-md p-1 w-[250px]'
            onChange={(e) => {
              setTextTarea(e.target.value)
            }}
            value={textTarea}
          ></textarea>
          <div className='flex justify-around'>
            <Button
              title={type === 'edit' ? 'Actualizar tarea' : 'Añadir tarea'}
              className='bg-blue-600 text-white shadow-md'
              onClick={handle}
            />
            <Button
              title="Ir atras"
              className='bg-red-600 text-white shadow-md'
              onClick={() => {
                showForm(false)
                if (type === 'edit') {
                  setTareaTaskEdit()
                } else {
                  setTextTarea('')
                }
              }}
            />
          </div>
        </div>

      </div>
    </>
  )
}

export default FormTask