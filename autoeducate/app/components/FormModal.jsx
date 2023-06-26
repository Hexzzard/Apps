import React from 'react'
import Modal from 'react-modal'

const FormModal = ({ isOpen, handleCloseModal, handleSubmit, setImagen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel='Formulario Modal'
      style={{
        content: {
          width: '500px',
          height: '85%',
          margin: 'auto'
        }
      }}
    >
      <form className='form' onSubmit={handleSubmit}>
        <h2 className='form_title'>Crear un nuevo grupo de estudio</h2>
        <div className='form_container'>
          <div className='form_group'>
            <input type='text' id='name' className='form_input' placeholder=' ' />
            <label htmlFor='name' className='form_label'>Nombre</label>
            <span className='form_line' />
          </div>
          <div className='form_group'>
            <input type='text' id='asignatura' className='form_input' placeholder=' ' />
            <label htmlFor='asignatura' className='form_label'>Asignatura</label>
            <span className='form_line' />
          </div>
          <div className='form_group'>
            <input type='text' id='descripcion' className='form_input' placeholder=' ' />
            <label htmlFor='descripcion' className='form_label'>Descripcion</label>
            <span className='form_line' />
          </div>
          <div className='form_group'>
            <input type='file' id='imagen' className='form_input' placeholder=' ' onChange={(e) => { setImagen(e.target.files[0]) }} />
            <label htmlFor='imagen' className='form_label'>Banner</label>
            <span className='form_line' />
          </div>
          <input type='submit' className='form_submit' value='Enviar' />
        </div>
      </form>
    </Modal>
  )
}

export default FormModal
