import React,{useContext, useState} from 'react';

import {CategoriasContext} from '../context/CategoriasContext'


const Formulario = () => {

    const [busqueda, guardarBusqueda]= useState({
        nombre : '',
        categoria : ''
    });

    const { categorias } = useContext(CategoriasContext);//a si tengo disponible todo lo que tengo en el value
//Funcines para leer los contenidos 

const obtenerDatosRecetas = e =>{
  
    guardarBusqueda({
        ...busqueda,
        [e.target.name]:e.target.value

    })
};
    return ( 
        <form 
        className="col-12"
  
        >
            <fieldset className="text-center">
                <legend>Buscar bebida por Categoria o Ingrediente </legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                    name="nombre"
                    className="form-control"
                    type="text"
                    placeholder="Buscar por ingrediente"
                    onChange={obtenerDatosRecetas}
                    />
                </div>
                <div className="col-md-4">
                    <select
                    className="form-control"
                    name="categoria"
                    onChange={obtenerDatosRecetas}
                    >
                        <option value="">--Seleciona categoria--</option>
                        {categorias.map(categoria =>(
                          <option 
                          key={categoria.strCategory}
                          value={categoria.strCategory}
                        >{categoria.strCategory}</option>  
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit"
                    className="btn btn-block btn-primary"
                    value="Buscar Bebidas"
                    />
                </div>

            </div>

        </form>
     );
}
 
export default Formulario;