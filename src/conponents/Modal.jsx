import { Fragment, useState } from 'react'
import './Modal.css'

const Modal = () => {
  const [show, setShow] = useState(false)

  const toggle = () => {
    setShow(!show)
  }

  return (
    <Fragment>
      <button className='btn btn-primary' onClick={toggle}>
        Abrir Modal
      </button>

      <div className={`modal ${show && "show"}`} onClick={toggle}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <h2 className='title'></h2>
            <h2 className='modal-close' onClick={toggle}>
              X
            </h2>
          </div>

          <div className='modal-body'>
            <div className='form-control'>
              <label>Nome</label>
              <input type="text"  placeholder='Digite seu nome...'/>
            </div>

            <div className='form-control'>
              <label>CPF</label>
              <input type="text"  placeholder='Digite seu CPF...'/>
            </div>

            <div className='form-control'>
              <label>Data-Nascimento</label>
              <input type="date"  placeholder='Data Nascimento...'/>
            </div>
            
            {/* Outros dados aqui */}
          </div>

          <div className='modal-footer'>
            <button className='btn btn-cancel'>Cancelar</button>
            <button className='btn btn-primary'>Salvar</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal