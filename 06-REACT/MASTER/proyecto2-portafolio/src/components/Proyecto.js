/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const params = useParams();
    const [proyecto, setProyecto] = useState({});

    useEffect(() => {
        let proyectos = trabajos.filter(trabajo => trabajo.id === params.id)
        setProyecto(proyectos[0]);
    }, []);

  return (
    <div className='page page-work'>
      {
        proyecto ? 
        ( <>
            <div className='mask'>
              <img src={`/images/${proyecto.id}.png`} alt={proyecto.nombre} />
            </div>
            <h1 className='heading'>{proyecto.nombre}</h1>
            <p>{proyecto.tecnologias}</p>
            <p>{proyecto.descripcion}</p>
            <a href={proyecto.url} target='_blank' rel="noreferrer">Ir al proyecto</a>
          </>
        ) : 
        ( <>
            <h1 className='heading'>ERROR</h1>
            <p>No hay un proyecto con ese nombre</p>
          </>
        )
      }
    </div>
  )
}