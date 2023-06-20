import React from 'react'
import Modal from 'react-modal'

const AlertModal = ({ title, message, isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel='Alerta'
      style={{
        content: {
          width: '400px',
          height: '200px',
          margin: 'auto'
        }
      }}
      contentClassName='custom-modal-content'
    >
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onClose}>Cerrar</button>
    </Modal>
  )
}

export default AlertModal
