import React from 'react'
import { CCard, CCardBody, CCardTitle } from '@coreui/react'
import '../../scss/contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <CCard>
        <CCardBody>
          <CCardTitle><h4>Información de Contacto</h4></CCardTitle>
          <p>
            <strong>Nombre:</strong> Marco Fernández Areste
          </p>
          <p>
            <strong>Dirección:</strong> Carrer de Roger de Llúria, 97, L'Eixample, 08009 Barcelona, España
          </p>
          <p>
            <strong>Correo Electrónico:</strong> marco.fernandez.areste@prateducacio.com
          </p>
          <p>
            <strong>Horario de Atención:</strong> Lunes a Viernes, 3:00 PM - 9:00 PM
          </p>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Contact
