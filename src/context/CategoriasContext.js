//muy importantes es que los datos fluyen desde este context no dede el App.js al 
// es diferente cuando props es diferente y ridux tambien es diferente

import React, { createContext, useState, useEffect} from 'react';
import axios from 'axios'; 
//crear el context 
 // a qui vamos a tener todo relacionadoa a las categorias 
 //context y funciones  

 export const CategoriasContext = createContext();

 //provaider es de donde van a salir los datos  y las funciones (state),
 const CategoriasProvider = (props) =>{
    //crear state del context
       const[categorias, guardarCategorias] = useState([]);

    //ejecutar el llamado a la api
    useEffect(()=>{
        const obtenerCategoria = async()=>{
        const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`; 
        
        const categorias = await axios.get(url);
        guardarCategorias(categorias.data.drinks); 
    }
        obtenerCategoria();
    },[])

    return(
        <CategoriasContext.Provider
        value={{
            categorias
        }}
        >
            {props.children}{/*aqui estas: App , Formulario */}
        </CategoriasContext.Provider>
    )
 }
 
export default CategoriasProvider;
