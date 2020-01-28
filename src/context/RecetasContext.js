import React,{ createContext , useState} from 'react';

export const RecetasContext = createContext();

const [recetas, guaradarRecetas] = useState([]);
const [busqueda, buscarRecetas] = useState({
    ingrediente: '',
    categoria: ''
})


const RecetasProvider = (props) => {


    return ( 
        <RecetasContext.Provider
        value={{
            buscarRecetas
  
        }}
        >
          {props.children}     
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;